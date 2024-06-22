import app from "..";
import { Request, Response, Router } from 'express';

const router = Router();


router.get('/', (req: Request, res: Response) => {

    res.send("Hey there!")

});

export default router