import { Image } from "sanity";

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Home extends Base {
  _type: "home";
  logo: Image;
  favoriteColor: Color;
}

export interface HomeBanner extends Base {
  title: string;
  images: Images[];
}

interface Images {
  _key: string;
  _type: "image";
  asset: any;
}

export interface Product extends Base {
  _type: "product";
  title: string;
  medium: boolean;
  small: boolean;
  large: boolean;
  price: number;
  oldprice: number;
  images: ProductImages[];
  rating: number;
  slug: string;
  description: "Block";
  off: number;
  previewProductImage: Image;  
  category: Category[];
}

interface Category extends Base {
  image: Image;
  name: string;
  slug: string;
}


interface ProductImages extends Base {
  "_type": "image"
  image : Image
  color : Color

}
interface Color {
  hex : string
}


export interface ProductState {
  _id: string
  title : string
  price : number
  description : string
  rating : number

}