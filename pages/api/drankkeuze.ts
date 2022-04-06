import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        const keuzes = await prisma.drankkeuze.findMany({
            include: {
                drank: true,
                aanwezige: true
            }
        })
        res.json(keuzes)
    }
}
