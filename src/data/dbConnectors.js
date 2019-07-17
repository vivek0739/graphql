import mongoose, { Mongoose } from "mongoose";

//Mongo connection

Mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true
});

export const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  }
});

const Contacts = mongoose.model("contacts", ContactSchema);

export { Contacts };
