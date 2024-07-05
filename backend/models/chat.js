import mongoose, { Schema, model } from "mongoose";

const chatSchema = Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const chatModel = model("Chat", chatSchema);

export default chatModel;
