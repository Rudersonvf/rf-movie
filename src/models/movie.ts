import { CategoryDTO } from "./category"

export type MovieDTO ={
    imgUrl:string
    title:string
    release:Date
    director:string
    categories:CategoryDTO[]
}