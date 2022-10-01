const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = require("../config/s3");
const test = require("../node-mailer");
//aws.config.loadFromPath(__dirname + "/../config/s3.json");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "runble",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      let emailService = new test();
      emailService.errorAlertSend(file.originalname);
      emailService.errorAlertSend(file.location);
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});
module.exports = upload;
