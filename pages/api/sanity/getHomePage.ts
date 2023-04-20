import { client } from "@/lib/sanity.client"
import { Home } from "@/typings"
import { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

const query = groq`
    *[_type == "home"]
`
type Data = {
    home : Home[]
}

const handler = async (req : NextApiRequest, res: NextApiResponse<Data>) => {
    const home : Home[] = await client.fetch(query)
    res.status(200).json({home})
}

export default handler