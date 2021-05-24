import express from "express";
import {
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get("/:id([0-9a-f]{24})", watch);
viedoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
viedoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
viedoRouter.route("/upload").get(getUpload).post(postUpload);

export default viedoRouter;
