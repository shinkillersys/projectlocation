import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Data from '../models/dataModel.js';
import { generateToken, isAdmin, isAuth } from '../utils.js';

const dataRouter = express.Router();

dataRouter.get(
    '/listData',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const datas = await Data.find({});
      res.send(datas);
    })
  );

  export default dataRouter;