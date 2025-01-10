
const { validationResult } = require("express-validator");
const Region = require("../models/regionMasterModel");
// region/create
exports.createRegion = async(req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const { regionName } = req.body;
    const region = await Region.create({regionName:regionName});
    res.status(201).json({
      message: "Region created successfully",
      region: region
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};