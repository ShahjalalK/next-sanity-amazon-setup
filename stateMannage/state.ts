import { ProductState } from "@/typings";
import { atom, useRecoilState } from "recoil";


export const productState = atom({
    key : 'ProductState',
    default :[] as ProductState[]
})

export const  useProductState = () => {
    const [productItem, setProductItem] = useRecoilState(productState)
    return{
        addProduct: (
           { _id,
            title,
            price,
            description,
            rating
} : ProductState
          ) =>
            setProductItem([
              ...productItem,
              { _id, title, price, description, rating },
            ]),
    }
}