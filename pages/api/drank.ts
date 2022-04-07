import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {
        body,
        method
    } = req;

    switch (method) {
        case "POST":
            // Process a POST request
            const success = await prisma.drank.create(body);
            if (success) res.status(200).json(success);
            else res.status(500).json("Fout in aanmaken van drankje");
            break;
        case "GET":
            const dranken = await prisma.drank.findMany()
            if (dranken) res.status(200).json(dranken);
            else res.status(500).json("Kan geen drankjes ophalen");
            break;
        default:
            res.setHeader("Allow", ["POST", "GET"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
