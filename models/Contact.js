// models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "user",
  },
  number: {
    type: Number, // Fixed: Capital 'N' in Number
    required: true,
  },
  email: {
    type: String,
    required: true,
    default: "abc@gmail.com",
  },
});

// Prevent duplicate model declaration in Next.js hot reload
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
