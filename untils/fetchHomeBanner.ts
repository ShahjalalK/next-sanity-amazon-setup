import { HomeBanner } from "@/typings"

export const fetchHomeBanner = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/getHomeBanner`)
    const data = await res.json()
    const homeBannerSlider : HomeBanner[] = data.homebanner
    return homeBannerSlider
}