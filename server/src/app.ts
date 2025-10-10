import express from 'express';
import cors from 'cors';
import InventoryRoute from './routes/inventory';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', InventoryRoute);

export default app;
