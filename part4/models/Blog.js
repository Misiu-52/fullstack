const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')



const mongoUrl = 'mongodb+srv://fullstackopen:oPR3vbDHFEa1APns@fullstack.jui31ts.mongodb.net/?retryWrites=true&w=majority&appName=Fullstack'
mongoose.connect(mongoUrl)
.then(result => {
  console.log('connected to MongoDB')
})
.catch(error => {
  console.log('error connecting to MongoDB', error.message)
})

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  blogSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Blog', blogSchema)