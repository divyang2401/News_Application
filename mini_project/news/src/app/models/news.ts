export class News {
    _id: string;
    title: string;
    description: string;
    url: string
    imageUrl:string
    
  
    constructor(id,title, description,url,imageUrl) {
      this._id=id
      this.title = title
      this.description = description
      this.url=url
      this.imageUrl=imageUrl
      
    }
  }