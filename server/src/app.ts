import express from 'express';
import { corsConfig } from './corsConfig';
import InventoryRoute from './routes/inventory';
import ItemRoute from './routes/item';
import CustomIdRoute from './routes/customid';
import authRoute from './routes/authentication';
import AccessRoute from './routes/access';
import UserRoute from './routes/users';
import SalesForceRoute from './routes/salesforce';


const app = express();
app.use(corsConfig);

app.use(express.json());
app.use('/', authRoute);
app.use('/', InventoryRoute);
app.use('/', ItemRoute);
app.use('/', CustomIdRoute);
app.use('/', AccessRoute);
app.use('/', UserRoute);
app.use('/', SalesForceRoute);


export default app;
