import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        const nieuwDrankje = req.body;
        const success = await prisma.drank.create(nieuwDrankje);
        res.json(success);
    } else {
        const dranken = await prisma.drank.findMany()
        res.json(dranken)
    }

}
