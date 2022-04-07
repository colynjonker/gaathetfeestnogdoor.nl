import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {body, method} = req;

    switch(method) {
        case "POST":
            // Process a POST request
            const payload = body;
            const drank_data: any[] = [];

            payload.keuze.forEach((keuze: string) => {
                drank_data.push({
                    naam: keuze.toLowerCase()
                })
            });

            const drank_ids = await addDranken(payload.keuze);
            // @ts-ignore

            const data: any[] = [];
            payload.keuze.forEach((keuze: string) => {
                console.log(keuze.toLowerCase())
                data.push(
                    {
                        drank: {
                            connect: {
                                naam: keuze.toLowerCase()
                            }
                        }
                    })
            });
            console.log(data);
            const aanmelding = await prisma.aanwezigheid.create({
                data: {
                    naam: payload.naam,
                    aantal: parseInt(payload.aantal),
                    kostuum: true,
                    extra: payload.extra,
                    drankkeuze: {
                        create: data
                    }
                },
            })

            console.log("finished with: ");
            console.log(aanmelding);

            if(aanmelding) res.status(200).json(aanmelding);
            else res.status(500).json("De aanmelding is niet gemaakt");
            break;
        case "GET":
            // Handle any other HTTP method
            const aanwezigen = await prisma.aanwezigheid.findMany({
                include: {
                    drankkeuze: {
                        include: {
                            drank: true
                        }
                    }
                }
            })
            if(aanwezigen) res.status(200).json(aanwezigen);
            else res.status(500).end("Geen aanwezigen zijn gevonden")
            break;
        default:
            res.setHeader("Allow", ["POST", "GET"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function addDranken(keuzes: any) {
    for (const keuze of keuzes) {
        const d = keuze.toLowerCase();
        const result = await prisma.drank.upsert({
            where: { naam: d },
            update: {
                naam: d
            },
            create: {
                naam: d
            }
        });
    }
}
