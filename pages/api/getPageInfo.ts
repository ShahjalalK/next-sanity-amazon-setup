import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { PageInfo } from "@/typings";

const query = groq`
    *[_type == "pageinfo"]{
        ...,
    }
`

type Data = {
    pageinfo : PageInfo
}

const handler = async (req : NextApiRequest, res : NextApiResponse<Data>) => {

    const pageinfo : PageInfo = await client.fetch(query)
    res.status(200).json({pageinfo})   
}

export default handler