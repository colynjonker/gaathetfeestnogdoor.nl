import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../lib/prisma";
import {DrankKeuzeType, DrankType} from "../../types";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const aanwezigen = await prisma.aanwezigheid.findMany({
            include: {
                drankkeuze: {
                    include: {
                        drank: true
                    }
                }
            }
        })
        const dranken = await prisma.drank.findMany();

        const labels: string[] = [];
        dranken.forEach((drank: DrankType) => {
            labels.push(drank.naam);
        })

        let d = {}
        aanwezigen.forEach((persoon: any) => {
            const drankkeuze = persoon.drankkeuze;
            drankkeuze.forEach((drank: DrankKeuzeType) => {
                const dranknaam: string = drank.drank.naam;
                // @ts-ignore
                if (d[dranknaam] !== undefined) {
                    // @ts-ignore
                    d[dranknaam] += 1;
                } else {
                    // @ts-ignore
                    d[dranknaam] = 1;
                }
            });
        });
        const resultsArray: Object[] = [];
        Object.entries(d).map((entry, key) => {
            resultsArray.push({name: entry[0], value: entry[1]})
        })
        // THE RESULT
        res.send(resultsArray)
    }

}
