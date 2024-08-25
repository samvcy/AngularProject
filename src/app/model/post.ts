export interface Post {
data: any
    title:String,
    permalink:string,
    category:{
        categoryId:string,
        category:string
    },
    postImgPath: string,
    excerpt:string,
    content:string,
    isFeatured:boolean,
    views:number,
    status:string,
    createdAt:Date
}
