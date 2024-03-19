const express = require("express");
const cors = require("cors");
const cookeParser = require('cookie-parser');




const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

const SAMPLE_SECRET = "abcdfefgh1234";

app.use(cors({
    origin: true, // Allow requests from any origin
    credentials: true // Allow credentials (cookies)
}));

app.use(cookeParser())

app.get("/", (req, res)=>{
    res.send("Hello World!!")
})


app.get("/jwt", (req, res) => {
    const unsigned_data = {
        name: "John Doe",
        job: "Student",
        id: 1,
    }
    const token = jwt.sign(unsigned_data, SAMPLE_SECRET)



    return res.send({ data: token })
})


app.get("/test", (req, res)=> {
    const cookieValue = req.cookies.jwt_cxookie;
    // console.log('reqq', req.headers.cookie)

    const verified = jwt.verify(cookieValue, SAMPLE_SECRET);

    console.log('req', cookieValue, verified)
    
    res.send("Success")
})


app.post("/post_test", (req, res)=> {
    const cookieValue = req.cookies.jwt_cxookie;
    console.log('reqq', cookieValue, req.cookies)

    const verified = jwt.verify(cookieValue, SAMPLE_SECRET);

    console.log('req', cookieValue, verified)
    
    res.send("Success")
})

app.listen(PORT, () => {
    console.log(`Server Running in ${PORT}`);
})