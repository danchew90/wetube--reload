import express from "express";
import {
  watch,
  deleteVideo,
  upload,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get("/:id(\\d+)", watch);
viedoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default viedoRouter;
