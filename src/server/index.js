var path = require('path');
const express = require('express');
const analyzeUrl = require('./meaningCloudAPI.js');

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const app = express();

app.use(express.static('dist'));
// app.use(express.static('src/client'));

app.use(cors());
app.use(express.json());

console.log(__dirname);

const APIKey = process.env.API_KEY;


app.post('/url-analysis',async(req,res)=>{
    const userUrl = req.body.url;

    if(!userUrl) {
        return res.json({message:'url input is required'});
    }

    try{
        const result = await analyzeUrl(userUrl, APIKey);
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json({error:error.message})
    }

})

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, '../client/views/index.html'));
    res.sendFile('dist/index.html')
})


const PORT = 8081;
// designates what port the app will listen to for incoming requests
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

