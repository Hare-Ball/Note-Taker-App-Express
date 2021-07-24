const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.use(express.static('public'));

app.use("/api", apiRoutes);//added apiroutes above html
app.use("/", htmlRoutes);//call apis above html

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("listening on port: ", port)
});
