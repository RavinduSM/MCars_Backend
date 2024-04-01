import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    year: { type: Number, required: true },
    vehicleModel: { type: String, required: true },
    bodyType: { type: String, required: true },
    image: { type: String, required: false },
    transmission: { type: String, required: true },
    driveTrain: { type: String, required: true },
    engine: { type: String, required: true },
    fuelType: { type: String, required: true },
    fuelEconomy: { type: Number },
    trim: { type: String },
    mileage: { type: Number, required: true },
    interiorColor: { type: String },
    exteriorColor: { type: String, required: true },
    price: { type: Number, required: true },
    vehicleCondition: { type: String, required: true },
    vehicleBrand: { type: String, required: true },
    engineCapacity: { type: Number, required: true },
    vehicleOptions: [
      {
        centerLock: Boolean,
        powerShutters: Boolean,
        powerMirrors: Boolean,
        abs: Boolean,
      },
    ],
    additionalInformation: { type: String },
  },
  {
    timeStamps: true,
  }
);

const vehicle = mongoose.model("Vehicle", vehicleSchema);
export default vehicle;
