import Express from "express";
const app = Express();
const port = 3000

app.use(Express.json());

app.get('/', (req, res)=> {
    res.send('Hello world')
})

app.listen(port, ()=> {
    console.log('Running')
})
