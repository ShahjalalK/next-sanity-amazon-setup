import Banner from "@/components/banner";
import Header from "@/components/header";
import ProductList from "@/components/productList";
import { Home, HomeBanner, Product } from "@/typings";
import { fetchHomeBanner } from "@/untils/fetchHomeBanner";
import { fetchHomePage } from "@/untils/fetchHomePage";
import { fetchProduct } from "@/untils/fetchProduct";
import React from "react";

type Props = {
  homePage: Home[];
  homeBanners: HomeBanner[];
  products : Product[]
};

const Home = ({ homePage, homeBanners, products }: Props) => {
    
  return (
    <div>
      <Header homePage={homePage} />
      <main className=" max-w-screen-2xl mx-auto bg-gray-200">
      <Banner homeBanners={homeBanners} />
      <ProductList products={products} homePage={homePage} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const homePage: Home[] = await fetchHomePage();
  const homeBanners: HomeBanner[] = await fetchHomeBanner();
  const products : Product[] = await fetchProduct()

  return {
    props: {
      homePage,
      homeBanners,
      products
    },
    // revalidate: 10,
  };
};
