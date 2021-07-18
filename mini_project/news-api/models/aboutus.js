const mongoose= require('mongoose')


const aboutSchema= mongoose.Schema({

    marker:{
     lat:{type:Number, required:true},   
     lat:{type:Number, required:true},   
     title:{type:String, required:true},
     label:{
         color:{type:String, default:'red'},
         text:{type:String, default:'location'}
    }
    },
    
    info:{
        values:{type:String, required:true},
        history:{type:String, default: null},
        learnmore:{type:String, default:null}
    }
},{
    timestamps:true
})

const aboutus= mongoose.model('aboutus', aboutSchema)

module.exports=aboutus