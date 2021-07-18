const mongoose = require('mongoose');  
const NewsSchema = new mongoose.Schema({ 
  title: String, 
  description: String,
  url: String,
  imageUrl: String,
  publishedAt: Date
});
mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');