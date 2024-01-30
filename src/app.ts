/* eslint-disable linebreak-style */
import Express from 'express';
import UserController from './controllers/UserController';


const app = Express();
const port = 3000;

app.use(Express.json());

app.get('/', (req, res)=> {
  res.send({massage: 'Hello world'});
});

app.post('/createUser', UserController.createUser)

app.listen(port, ()=> {
  console.log('Running');
});
