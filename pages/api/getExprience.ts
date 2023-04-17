import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Exprience } from "@/typings";

const query = groq`
    *[_type == "exprience"]{
        ...,
        technologiles[]->
    }
`

type Data = {
    exprience : Exprience[]
}

const handler = async (req : NextApiRequest, res : NextApiResponse<Data>) => {

    const exprience : Exprience[] = await client.fetch(query)
    res.status(200).json({exprience})   
}

export default handler