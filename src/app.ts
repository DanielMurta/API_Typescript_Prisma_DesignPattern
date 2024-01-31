/* eslint-disable linebreak-style */
import Express from 'express';
import UserController from './controllers/UserController';
import PostController from './controllers/PostController';


const app = Express();
const port = 3000;

app.use(Express.json());

app.get('/', (req, res)=> {
  res.send({massage: 'Hello world'});
});

app.post('/createUser', UserController.createUser)
app.post('/createPost', PostController.createPost)
app.get('/listPost/:id', PostController.ListPost)
app.put('/updatePost', PostController.UpdatePost)
app.delete('/deletePost/:id', PostController.DeletePost)

app.listen(port, ()=> {
  console.log('Running');
});
