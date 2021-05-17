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
viedoRouter.get("/:id(\\d+)/edit", getEdit);
viedoRouter.post("/:id(\\d+)/edit", postEdit);

export default viedoRouter;
