import { CategoryDTO } from "./category"

export type MovieDTO ={
    id:number
    imgUrl:string
    title:string
    release:string
    director:string
    categories:CategoryDTO[]
}