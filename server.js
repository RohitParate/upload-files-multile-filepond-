const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()

app.use(fileUpload());
var cors = require('cors')

app.use(cors())

app.post('/upload',(req, res) =>{
    // console.log(req.files.filepond);
    const files = req.files.filepond;
    console.log(files);
    // files.map((file) => {
    //     file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    //             if(err){
    //                 console.log(err);
    //                 return res.status(500).send(err);
    //             }
    //             res.json({filename : file.name, filepath:'/uploads/${file.name'}) 
    //         });
    // })
    files.mv(`${__dirname}/client/${files.name}`, err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        // res.json({filename : files.name, filepath:'/${file.name'}) 
    });
    res.send('uploaded');
});

app.listen(5000, () => console.log('server started...'));
