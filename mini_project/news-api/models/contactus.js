const mongoose= require('mongoose')


const contactSchema= mongoose.Schema({

    email:{type:String, required:true},
    data:{type:String, required:true}
},{
    timestamps:true
})

const contactus= mongoose.model('contactus', contactSchema)

module.exports=contactus