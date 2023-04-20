import { Home } from "@/typings"

export const fetchHomePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/getHomePage`)
    const data = await res.json()
    const homePageInfo : Home[] = data.home
    return homePageInfo
}