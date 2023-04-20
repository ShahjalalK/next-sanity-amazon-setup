import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { FaCompressAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Product } from "@/typings";
import { urlFor } from "@/lib/sanity.client";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const [toggleState, setToggleState] = useState(0)
  const toggleTab = (i : number) => {    
    setToggleState(i)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="bg-white rounded-2xl z-20 shadow-md drop-shadow-md"
    >
      <div className=" relative h-52 overflow-hidden rounded-2xl bg-gradient-to-t from-gray-200 to-gray-300 shadow-inner  ">
        {product.off && (
          <span className=" z-20 absolute top-5 left-5 rounded-xl text-sm bg-red-500 px-2 py-1 text-gray-200">
            -{product.off}%
          </span>
        )}
        <span className=" absolute top-5 right-5 bg-gray-100 h-8 w-8 rounded-full cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-700 text-2xl z-20">
          <FaCompressAlt />
        </span>
        {product.images.map((productImage, index) => (
            <motion.div initial={{opacity : toggleState === index ? 1 : 0}} animate={{opacity : toggleState === index ? 1 : 0}} transition={{duration : 0.50}}>
              <Image
              src={urlFor(productImage).url()}
              alt="earphone"
              width={350}
              height={350}             
              className={` w-full absolute object-contain h-52  z-10`}                     
            />
            </motion.div>
          ))}
      </div>
      <div className="p-3">
        <div className="flex items-start flex-grow">
          <h1 className="flex-grow text-lg font-bold line-clamp-2 leading-[22px]">
            {product.title}
          </h1>
          <div className="mx-2 flex flex-col -space-y-1">
            <p className="text-red-500 font-bold text-lg">${product.price}</p>
            <p className="text-gray-600 text-right text-sm">
              <s>{product?.oldprice || product.price}</s>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="py-3 flex items-center gap-5">
            {product.productColorCode.map((item, index) => (
              <div className="relative">
                <span
                  style={{ borderColor: `${item}` }}
                  className={`absolute w-4 h-4 rounded-full border-2 cursor-pointer p-[3px]`} onClick={() => toggleTab(index)}
                ></span>
                {toggleState === index && 
                  <span style={{ backgroundColor: `${item}` }} className=" absolute top-1 left-1 bg-red-500 w-2 h-2 rounded-full content-['']"></span>
                }
              </div>
            ))}
          </div>
          <div className="py-3 mx-5 flex items-center gap-6">
            {product.small && (
              <div className="relative">
                <span className=" absolute rounded-full border border-gray-500 flex items-center text-gray-500 text-xs font-medium justify-center w-5 h-5">
                  S
                </span>
              </div>
            )}
            {product.medium && (
              <div className="relative ">
                <span className=" absolute rounded-full border border-gray-500 flex items-center text-gray-500 text-xs font-medium justify-center w-5 h-5">
                  M
                </span>
              </div>
            )}

            {product.large && (
              <div className="relative">
                <span className=" absolute rounded-full border border-gray-500 flex items-center text-gray-500 text-xs font-medium justify-center w-5 h-5">
                  L
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 space-x-1">
            <AiOutlineStar />
            <span>{product?.rating || 0}</span>
          </div>
          <button className="text-lg border border-gray-200 rounded-xl px-2 py-1 uppercase text-[#ff9900]">
            Buy+
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductItem;
