import express from 'express';
import cors from 'cors';
import "dotenv/config"
import router from './Routes/routes';

const port = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.listen(port, () => console.log(`listening on port ${port}`))

export default app;