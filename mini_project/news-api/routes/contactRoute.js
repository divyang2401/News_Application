const express= require('express')
const router= express.Router()
const contactUs= require('../models/contactus')

router.post('/', (req,res)=>{

    const {email, query}= req.body

   let contactuso= new contactUs()

   contactuso.email=email
   contactuso.data=query

    contactuso.save()
            .then(data=> res.status(200).json(data))
            .catch(err=> res.status(500).json({msg:err}))

})

module.exports=router