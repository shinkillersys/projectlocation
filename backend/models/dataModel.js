import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
  {
    thietBi: { type: String, required: true },
    vitri: { type: String, required: true },
    ngay: { type: String, required: true },
    gioden: { type: String, required: true },
    giodi: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Data = mongoose.model('Data', dataSchema);
export default Data;
