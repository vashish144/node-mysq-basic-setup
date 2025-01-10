const express=require('express');
const { body } = require('express-validator');
const {createRegion}=require('../controllers/regionMasterController')
const router=express.Router();

// region/create
router.post(
    "/create",
    [body("regionName").trim().not().isEmpty(),
    // body("regionName").custom(async (value, { req }) => {
    //   const { regionName } = req.body;
    //   const regionDocument = await regionMasterModel.findOne({ regionName });
    //   if (regionDocument) {
    //     throw new Error(
    //       "Region already exists. Please enter a different region name."
    //     );
    //   }
    //   return true;
    // }),
  ],
    createRegion
  );

  module.exports=router;