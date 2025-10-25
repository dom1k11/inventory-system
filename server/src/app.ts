import express from 'express';
import cors from 'cors';
import InventoryRoute from './routes/inventory';
import ItemRoute from './routes/item';
import CustomIdRoute from './routes/customid';
import authRoute from './routes/authentication';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', InventoryRoute);
app.use('/', ItemRoute);
app.use('/', CustomIdRoute);
app.use('/', authRoute);





export default app;
