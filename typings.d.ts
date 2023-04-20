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
  _key : string
  _type : 'image'
  asset : any
}

export interface Product extends Base{
  _type : 'product'
  title : string
  medium : boolean 
  small : boolean 
  large : boolean
  price : number
  oldprice : number
  images : Images[]
  rating : number
  slug : string
  description : 'Block'
  productColorCode : ColorCode[]
  off : number  
  
  category : Category
}