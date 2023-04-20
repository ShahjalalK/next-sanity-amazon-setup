import { client } from "@/lib/sanity.client"
import { Home, HomeBanner } from "@/typings"
import { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

const query = groq`
    *[_type == "homeBanerSlider"]
`
type Data = {
    homebanner : HomeBanner[]
}

const handler = async (req : NextApiRequest, res: NextApiResponse<Data>) => {
    const homebanner : HomeBanner[] = await client.fetch(query)
    res.status(200).json({homebanner})
}

export default handler