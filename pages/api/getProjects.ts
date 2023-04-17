import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Project, Social } from "@/typings";

const query = groq`
    *[_type == "projects"]{
        ...,
        technologies[]->
    }
`

type Data = {
    projects : Project[]
}

const handler = async (req : NextApiRequest, res : NextApiResponse<Data>) => {

    const projects : Project[] = await client.fetch(query)
    res.status(200).json({projects})   
}

export default handler