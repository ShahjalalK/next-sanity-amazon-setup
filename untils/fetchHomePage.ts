import { Home } from "@/typings"
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://amazon2023.vercel.app'
export const fetchHomePage = async () => {
    const res = await fetch(`${API_URL}/api/sanity/getHomePage`)
    const data = await res.json()
    const homePageInfo : Home[] = data.home
    return homePageInfo
}