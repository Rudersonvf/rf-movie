import { CategoryDTO } from "./category"

export type MovieDTO ={
    id:number
    img_url:string
    title:string
    release:string
    director:string
    categories:CategoryDTO[]
}