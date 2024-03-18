import express from 'express';
import { deleteAdmin, getAdmin, getAllAdmin, updateAdmin, exportToExcel} from '../controllers/admin.controller.js';
//import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/getalladmin', getAllAdmin)
router.get('/getadmin/:id', getAdmin)
router.put('/updateadmin/:id', updateAdmin)
router.delete('/deleteadmin/:id', deleteAdmin)
router.get('/exportExcel', exportToExcel);
export default router;
