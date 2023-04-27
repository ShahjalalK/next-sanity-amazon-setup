import { HomeBanner } from "@/typings"
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://amazon2023.vercel.app'

export const fetchHomeBanner = async () => {
    const res = await fetch(`${API_URL}/api/sanity/getHomeBanner`)
    const data = await res.json()
    const homeBannerSlider : HomeBanner[] = data.homebanner
    return homeBannerSlider
}