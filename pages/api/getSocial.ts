import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Social } from "@/typings";

const query = groq`
    *[_type == "social"]{
        ...,
    }
`

type Data = {
    socials : Social[]
}

const handler = async (req : NextApiRequest, res : NextApiResponse<Data>) => {

    const socials : Social[] = await client.fetch(query)
    res.status(200).json({socials})   
}

export default handler