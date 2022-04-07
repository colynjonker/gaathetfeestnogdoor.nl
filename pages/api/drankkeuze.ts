import prisma from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {body, method} = req;

    switch(method) {
        case "GET":
            const keuzes = await prisma.drankkeuze.findMany({
                include: {
                    drank: true,
                    aanwezige: true
                }
            })
            if(keuzes) res.status(200).json(keuzes);
            else res.status(500).json("Er zijn geen drankkeuzes gevonden");
            break;
        default:
            res.setHeader("Allow", ["GET"])
            res.status(405).end(`Method ${method} Not Allowed`)

    }
}
