var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs'); 

/* GET home page. */
/*router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { title: 'Coucou le monde !', sayHello: 'Hello buddy' });
});*/

router.get('/monupload', function(req, res, next) {
  res.render('index');
});

router.post('/monupload', upload.array('monfichier'), function(req, res, next) {
  // traitement du formulaire 
    fs.rename(req.files[10].path, 'tmp/' + req.files[10].originalname, function(){});
  
    if ((req.files[10].mimetype == 'image/png') && (req.files[10].size < 3145728)){
      fs.rename('tmp/' + req.files[10].originalname, 'public/images/' + req.files[10].originalname, function(){});
      
      res.send('Success');
    }else{
      
      fs.unlink(req.files[10].path, function(){});
        res.send('Erreur');	
      }
  
});

module.exports = router;

/*block content
h1= title
p Welcome to #{title}
form(method='POST' enctype='multipart/form-data' action='uploaddufichier')
input(type='file' name='monfichier' multiple='' accept='image/*')
button.btn(type='submit')  Envoyer */