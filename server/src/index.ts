import express from 'express';
import cors from 'cors';
import { messagesRoute, usersRoute } from 'routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const routes = [...messagesRoute, ...usersRoute];
routes.forEach(({ method, route, handler }) => {
  typeof handler === 'object'
    ? app[method](route, ...handler)
    : app[method](route, handler);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`server app listening at http://localhost:${port}`);
});
