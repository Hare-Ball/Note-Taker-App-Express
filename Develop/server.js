const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended:true,
}));

app.use(express.static('public'));

app.use(apiRoutes);//added apiroutes above html

app.use(htmlRoutes)//call apis above html

const port = 3001;
app.listen(port,()=>{
    console.log("listening on port: ", port)
});
