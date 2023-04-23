import { urlFor } from "@/lib/sanity.client";
import { Home } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productState } from "@/stateMannage/state";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { useRecoilValue } from "recoil";

type Props = {
  homePage: Home[];
};

const Header = ({ homePage }: Props) => {
  const ProductValue = useRecoilValue(productState)
  let colorCode = homePage[0].favoriteColor.hex;
  return (
    <header className=" ">
      <div className="flex-grow flex items-center bg-amazon_blue-default px-4 p-2">
        <div className="mx-1 md:mx-6 mt-2 flex-grow md:flex-grow-0">
          <Link href="/"><Image
            src={urlFor(homePage[0].logo).url()}
            alt="amazon"
            width={150}
            height={80}
          /></Link>
        </div>
        <div
        style={{backgroundColor : `${colorCode}`}}
          className={`hidden md:flex items-center flex-grow cursor-pointer rounded-md`}
        >
          <input
            type="text"
            className="flex-grow h-10 focus:outline-none  px-4 bg-white rounded-l-md"
          />
          <AiOutlineSearch className="text-4xl text-white" />
        </div>

        <div className="mx-6 flex items-center space-x-3 text-white whitespace-nowrap">
          <div className="link">
            <p className="text-xs ">Hello, Sign In</p>
            <p className="text-xs font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link flex flex-col space-y-0">
            <p className="text-xs font-extrabold md:text-sm">Returns</p>
            <p className="text-xs font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link">
            <Link href="/checkout" className="flex items-center relative">
            <span
            style={{backgroundColor : `${colorCode}`}}
              className={`absolute top-0 right-0 md:right-10 h-5 w-5 rounded-full flex items-center justify-center text-xs`}
            >
              {ProductValue.length}
            </span>
            <AiOutlineShoppingCart className="text-4xl" />
            <p className="text-xs font-extrabold md:text-sm mt-5 hidden md:inline">Basket</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-amazon_blue-light pl-6 p-2">
        <div className="text-white flex items-center space-x-3">
          <p className="flex link items-center space-x-1">
            <AiOutlineMenu /> All
          </p>
          <Link className="link" href="/">
            Headsets
          </Link>
          <Link className="link" href="/">
            Keyboards
          </Link>
          <Link className="link" href="/">
            Computer mice
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
