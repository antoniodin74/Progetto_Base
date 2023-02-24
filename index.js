const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
//app.use('/axios',express.static(__dirname + '/node_modules/axios/dist'));
app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist'));
const principaleRoutes = require('./routes/principale');



//HANDLEBARS
const expHbs = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const handlebars = expHbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

handlebars.handlebars.registerHelper('completed', function (value) {
    if(value===1){
    return 'completato';
    }else{
    return 'non completato'; 
    } 
  });

  handlebars.handlebars.registerHelper('isEqual', function (a,b) {
    if (a == b) {
        return this;
      }
  });


/*app.all('*', (req, res, next) =>{
    console.log('sono middleware');
    next();
})*/
app.use('/principale', principaleRoutes);
app.get('/', (req, res) =>{
    res.render('index');
})
app.listen(4000, ()=> console.log('in ascolto su porta 4000'));