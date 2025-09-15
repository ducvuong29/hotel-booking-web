import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    _id: { type: String, requried: true },
    username: { type: String, requried: true },
    email: { type: String, requried: true },
    image: { type: String, requried: true },
    role: { type: String, enum: ["user", "hotelOwner"], default: "user" },
    recentSearchedCities: [{ type: String, requried: true }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;