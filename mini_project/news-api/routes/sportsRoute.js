const express= require('express')
const router= express.Router()

const SportNews= require('../models/sportsnews')


router.get('/', (req,res)=>{

    SportNews.find()
         .then(newJson => res.status(200).json(newJson))
         .catch(err=> res.status(500).json({msg:err}))  

})

// router.use(auth)

router.post('/', (req,res)=>{

    const {title, description, author, category, url, imageUrl} = req.body

    
    let sportsp= new SportNews()

    sportsp.title=title
    sportsp.description=description
    sportsp.author=author
    sportsp.category = category    
    sportsp.url=url
    sportsp.imageUrl = imageUrl

    console.log('title is: '+ title+'imageURL is: '+imageUrl)

    sportsp.save()
    .then(data=> res.status(200).json(data))
    .catch(err=> res.status(500).json({msg:err}))


})

//update entirely
router.put('/:id', (req,res)=>{

    const {title, description, author, category, url, imageUrl}= req.body
    
    let sportsu= new SportNews()

    sportsu.author= author
    sportsu.description= description
    sportsu.title= title
    sportsu.category= category
    sportsu.url= url
    sportsu.imageUrl= imageUrl

    SportNews.findByIdAndUpdate(req.params.id, {$set:{title:sportsu.title, description: sportsu.description, author: sportsu.author, category:sportsu.category, url:sportsu.url, imageUrl:sportsu.imageUrl}}, {new: true})
            .then((doc)=>res.status(200).json(doc))
            .catch(err => res.status(500).json({msg:err}))


})

module.exports= router