import multer from "multer";

export const storage = multer.diskStorage({

    destination: (req, file , cb) => {
        cb(null , './uploads');
    },

    filename: (req, file , cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random(cb(null, file.fieldname + '-' + uniqueName)));
    }
});

