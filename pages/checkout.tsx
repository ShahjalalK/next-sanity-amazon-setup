import Header from '@/components/header'
import { Home } from '@/typings'
import { fetchHomePage } from '@/untils/fetchHomePage'
import React from 'react'

type Props = {
    homePage : Home[]
}

const Checkout = ({homePage}: Props) => {
  return (
    <div>
        <Header homePage={homePage} />
    </div>
  )
}

export default Checkout

export const getStaticProps = async () => {
    const homePage: Home[] = await fetchHomePage();  
    return {
      props: {
        homePage
      },
      revalidate: 10,
    };
  };
