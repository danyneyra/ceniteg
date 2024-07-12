export interface News {
    id:string, 
    title:string, 
    date: string,
    description: string,
    author?:string, 
    content:string,
    coverImage: string,
    tags?:Array<string>, 
    url?:string
  }