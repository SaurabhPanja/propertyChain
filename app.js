var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
  res.render('index');
});

app.post('/send',function (req,res) {
  res.send(req.body.key + "This key will in generating data from back-end form matic network");
  //solidity takes over
});

app.get('/show/:id',function(req,res){
  res.render('show',{
    steel : "The Real Steel",
    sand : "The Sand Paper Gate",
    cement : "Ambuja Cement",
    Tiles : "Kajaria Tiles",
    Namak : "Desh ka namak",
    country : "India",
    life : "cool"
  });
});

app.get('/new',function(req,res){
  res.render('new');
});

app.get('/progress',function (req,res) {
  res.render('progress');
});

app.get('/qrcodegen',function(req,res){
  res.render('qrcode');
});

app.get('/newShow',function(req,res){
  res.render('newShow');
});

app.listen(8080,function(){
  console.log('Server chal raha hai be');
});
