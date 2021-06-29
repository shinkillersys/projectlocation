import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
  {
    Device: { type: String, required: true },
    Location: { type: String, required: true },
    Date: { type: String, required: true },
    Time_Start: { type: String, required: true },
    Time_End: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Data = mongoose.model('Data', dataSchema);
export default Data;
