import { client } from "@/lib/sanity.client"
import { Skill } from "@/typings"
import { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { type } from "os"

const query = groq`
    *[_type == 'skill']
`
type Data = {
    Skill : Skill[]
}
const handler = async (req : NextApiRequest, res : NextApiResponse<Data>) => {
    const Skill : Skill[] = await client.fetch(query)
    res.status(200).json({Skill})
}

export default handler