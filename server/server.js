const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const PORT =  2000;

connection = "mongodb+srv://brennakj3:hothx@hothx.qhbffkc.mongodb.net/test?retryWrites=true&w=majority"
mongoose
    .connect(
        connection,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
});

const thriftPostModel = require("./schema/thriftPost")
const multer=require('multer');
const uuidv4 =require('uuid');
app.get('/getPosts', async(req, res)=>{
    const posts = await thriftPostModel.find({});
        
    try {
        res.send(posts);
    } catch (error) {
            res.status(500).send(error);
    }    
        
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploads);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage
});
app.post('/createPost', upload.single('image'), async(req, res)=>{
   //Don't know if the image stuff works yet
    const imageName=req.body.image
    const url='http:/localhost:2000'
   const post = new thriftPostModel({
        body: req.body.body,
        user: req.body.user,
        title: req.body.title,
        price: req.body.price,
        contact: req.body.contact,
        timestamp: req.body.timestamp
    }); 

    post.save();
    res.json(post);
    // try {
    //     await post.save();
    //     res.send(post);
    // } catch (error) {
    //     res.status(500).send(error);
    // }
    

});

module.exports = app;