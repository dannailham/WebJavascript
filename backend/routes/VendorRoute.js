import express from "express";
import { getVendors,
         getVendorById,
         createVendor,
         deleteVendor } from "../controller/VendorController.js";

const router = express.Router();

router.get('/vendors', getVendors);
router.get('/vendors/:id', getVendorById);
router.post('/vendors', createVendor);
router.delete('/vendors/:id', deleteVendor);

export default router;