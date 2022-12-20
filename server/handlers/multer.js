const multer=require('multer');

module.exports=multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        if(!file.mimetype.match('image/jpeg|image/png|image/gif')){  //image/jpeg contains both jpeg and jpg
            cb(new Error('File is not supported'),false)
            return
        }

        cb(null,true)
    }
})
