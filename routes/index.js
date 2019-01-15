const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', limits:{fileSize : 3 * 1024 *1024,} });
const fs = require('fs');
var app = express();

router.post('/uploaddufichier', upload.array('monfichier', 3), function (req, res, next) {
  console.log('hello')
  for(let i = 0; i < req.files.length; i++){
  fs.rename(req.files[i].path, 'public/images/' + req.files[i].originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
}
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/monupload', function(req, res, next){

});
module.exports = router;
