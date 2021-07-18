const express = require('express');
const router = express.Router();
const app = express();

const News = require('../models/News');



router.get('/top3news', (req, res) => {
    News.find().sort({_id:-1}).limit(3)
        .then(news => {
            res.json(news)
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
  })

  router.get('/', (req, res) => {
    News.find().sort({_id:1})
        .then(news => {
            res.json(news)
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
  })



router.put('/editNews', (req, res) => {
   var obj = req.body
    News.findOneAndUpdate({_id : req.body._id}, obj,
        {
            new: true
        }).then(newArticle => res.json(newArticle))
        .catch((err) => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const {id} = req.params
  News.findByIdAndDelete(id)
      .then(task => res.json(task))
      .catch(err => res.status(500).json(err))
})

router.post('/addNews', (req, res) => {
    const {
        title, description, url, imageUrl
    } = req.body

    const news = new News()
    news.title = title
    news.description = description
    news.url = url
    news.imageUrl = imageUrl

    news.save()
        .then(newArticle => res.json(newArticle))
        .catch(err => res.status(500).json(err))
})



  module.exports = router