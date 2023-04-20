import { client } from "@/lib/sanity.client"
import { Home, Product } from "@/typings"
import { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

const query = groq`
    *[_type == "product"]{
        ...,
        category->
    }
`
type Data = {
    product : Product[]
}

const handler = async (req : NextApiRequest, res: NextApiResponse<Data>) => {
    const product : Product[] = await client.fetch(query)
    res.status(200).json({product})
}

export default handler