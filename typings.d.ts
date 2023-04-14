import { Reference, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
}

interface Author extends Base {
  bio: Block[];
  image : Image
  slug : Slug
  name : string
}
interface Block{
    _key : string
    _type : "block"
    children : Span[]
    markDefs : any[]
    style : "normal" | "h1" | "h2"|"h3"|"h4"|"blockquote"

}

interface Span {
    _key : string
    _type : 'span'
    marks : string[]
    text : string
}

interface Category extends Base{
    _type: 'category'
    description : string
    image : Image
    name : string
    slug : Slug
}
interface mainImage{
    asset : Reference
    _type : "image"

}
interface slug{
    current : string
    _type : "slug"
}