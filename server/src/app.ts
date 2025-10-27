import express from 'express';
import cors from 'cors';
import InventoryRoute from './routes/inventory';
import ItemRoute from './routes/item';
import CustomIdRoute from './routes/customid';
import authRoute from './routes/authentication';
import AccessRoute from './routes/access';
import UserRoute from './routes/users';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', authRoute);
app.use('/', InventoryRoute);
app.use('/', ItemRoute);
app.use('/', CustomIdRoute);
app.use('/', AccessRoute);
app.use('/', UserRoute);

export default app;
