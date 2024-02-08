var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Cadastro de Clientes', action:"/new" });
});

router.post('/new', function(req,res,next){
  render.redirect('/?new=true')
})

module.exports = router;
