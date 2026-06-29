const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: function(req, file, cb){
        cb(null, "uploads/");
    },

    filename: function(req, file, cb){

        const uniqueName =
            Date.now() +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

const upload = multer({

    storage,

    fileFilter:(req,file,cb)=>{

        const allowed = [
            "application/pdf",
            "text/csv",
            "application/vnd.ms-excel"
        ];

        if(allowed.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error("File harus PDF atau CSV"));
        }

    }

});

module.exports = upload;