import { Image } from "sanity";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
export interface PageInfo extends SanityBody{
  address : string
  email : string
  heroImage : Image
  name : string
  phonenumber : number
  profilePic : Image
  role : string
  socials : Social[] 
}
export interface Exprience extends SanityBody{
  _type : 'exprience'
  company : string
  companyImage : Image
  dateEnded : date
  dateStarted : date
  isCurrentlyWorkingHere : boolean
  jobTitle : string
  points : string[]
  technologiles : Technology[]
}

export interface Project extends SanityBody{
  _type : 'projects'
  image : Image
  linkToBuild : string
  summary : string
  technologies : Technology[]
  title : string
}
export interface Skill extends SanityBody{
  _type: 'skill'
  image : Image
  progress : number
  title : string
}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

