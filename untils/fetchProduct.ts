import { Product } from "@/typings"
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://amazon2023.vercel.app'


export const fetchProduct = async () => {
    const res = await fetch(`${API_URL}/api/sanity/getProduct`)
    const data = await res.json()
    const Proudcts : Product[] = data.product
    return Proudcts
}