const mongoose= require('mongoose')


const sportSchema= mongoose.Schema({

    title:{type:String, required:true},
    description:{type:String, required:true},
    author:{type:String, required:true},
    category:{type:String, required:true},
    url:{type:String, required:true},
    imageUrl:{type:String, required:true},
},{
    timestamps:true
})

sportSchema.methods.generateObject= function(){

    return {
        title: this.name,
        description: this.description,
        author: this.author,
        category: this.category,
        time: this.createdAt,
        url: this.url,
        imageUrl: this.imageUrl
    }

}


const sportsNews= mongoose.model('sportsNews', sportSchema)

module.exports=sportsNews