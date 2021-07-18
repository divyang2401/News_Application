const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const News = require('../models/News');

app.use(express.static(__dirname));


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/',(req,res) => {
    res.render('index.ejs')
})


router.get('/newsForm',(req,res) => {
    res.render('newsForm.ejs')
})

router.get('/editNews', (req,res)=>{
    News.find().then( data => 
    { res.render('editNews.ejs',{data})})
})

router.get('/delete', (req,res)=>{
  News.findOneAndDelete({
    id: req.params.id
  }, function(err,news){
    if (err) throw err
  })
  res.redirect('/api/admin/editNews')
})

router.get('/edit', (req,res)=>{
  News.findOne({ id:req.body.id}, (err, data) =>{
    res.render('editNewsButton.ejs',{data})
  })
})

router.post('/update/:id', (req,res)=> {
  News.findOne({ id:req.body.id}, (err, data) =>{
    data.title = req.body.title
    data.description = req.body.description
    data.url = req.body.url
    data.imageUrl = req.body.imageUrl

    data.save()
  })
  res.redirect('/api/admin/editNews')
})


router.post('/newsForm', function(req, res) {
  
    News.create({
      title : req.body.title,
      description : req.body.description,
      url : req.body.url,
      imageUrl : req.body.imageUrl,
      publishedAt: new Date()
    },
    function (err, news) {
      if (err) return res.status(500).send("There was a problem adding the news.")
      res.redirect('/api/admin/newsForm');
    }); 
  });

  

module.exports = router;