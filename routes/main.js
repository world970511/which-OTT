import express from 'express';
var router = express.Router();
import multer from 'multer';

var storage = multer.diskStorage({
  // 2
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});
var upload = multer({ dest: 'uploadedFiles/' }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2

router.get('/', function (req, res) {
  res.render('upload');
});

router.post('/uploadFile', upload.single('attachment'), function (req, res) {
  // 4
  res.render('confirmation', { file: req.file, files: null });
});

router.post(
  '/uploadFileWithOriginalFilename',
  uploadWithOriginalFilename.single('attachment'),
  function (req, res) {
    // 5
    res.render('confirmation', { file: req.file, files: null });
  },
);

router.post('/uploadFiles', upload.array('attachments'), function (req, res) {
  // 6
  res.render('confirmation', { file: null, files: req.files });
});

router.post(
  '/uploadFilesWithOriginalFilename',
  uploadWithOriginalFilename.array('attachments'),
  function (req, res) {
    // 7
    res.render('confirmation', { file: null, files: req.files });
  },
);

export default router;
