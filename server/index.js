const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const Image=require('./model/upModel');
const bodyParser=require('body-parser');
const app=express();
dotenv.config();

const {cloudinary}=require('./utilis/cloudinary');
const upload=require('./handlers/multer') 

const port=process.env.PORT || 3001;
app.use(express.json());
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended:true}))


app.post('/upload',upload.single("image"),async(req, res) =>{
  console.log(req.file);
  const result=(await cloudinary.uploader.upload(req.file.path));
  const imageUrl=result.secure_url;
  
  res.status(200).json({imageUrl,result});
})


/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
