import { Exprience } from "@/typings"

export const fetchExprineces = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExprience`)
    const data = await res.json()
    const exprience:Exprience[] = data.exprience

    return exprience
}