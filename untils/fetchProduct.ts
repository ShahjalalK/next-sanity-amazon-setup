import { Product } from "@/typings"

export const fetchProduct = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/getProduct`)
    const data = await res.json()
    const Proudcts : Product[] = data.product
    return Proudcts
}