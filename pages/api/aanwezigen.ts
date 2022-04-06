import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        const payload = req.body;
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

        res.redirect('/statistiek');

    } else {
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
        res.json(aanwezigen)
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
