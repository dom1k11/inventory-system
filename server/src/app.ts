import express from 'express';
import cors from 'cors';
import InventoryRoute from './routes/inventory';
import ItemRoute from './routes/item';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', InventoryRoute);
app.use('/', ItemRoute);


export default app;
