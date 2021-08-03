import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, //unique는 다른 user와 중복되지않고 한명만 가지게 하는 요소
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("Users password:", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hash password:", this.password);
});
const User = mongoose.model("User", userSchema);
export default User;
