import Vehicle from "../models/vehicleModel.js";

export const addVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    const createVehicle = await vehicle.save();
    res.json(createVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllVehicles = async (req, res) => {
  try {
    const vehicle = await Vehicle.find(req.query);
    res.status(200).json({ vehicle, nbHits: vehicle.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSpecificVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle) {
      res.status(200).send(vehicle);
    } else {
      res.status(401).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const updateVehicle = await Vehicle.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateVehicle) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updateVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteVehcle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (vehicle) {
      res.status(200).send({ message: "Vehicle deleted successfully" });
    } else {
      return next(errorHandler(404, "Vehicle not found!"));
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
