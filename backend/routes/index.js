import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  createPegawai,
  getAllPegawai,
  getPegawaiById,
  updatePegawai,
  deletePegawai
} from "../controllers/PegawaiController.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.post('/pegawai', createPegawai); // Create a new Pegawai
router.get('/pegawai', getAllPegawai); // Get all Pegawai
router.get('/pegawai/:id', getPegawaiById); // Get a single Pegawai by ID
router.put('/pegawai/:id', updatePegawai); // Update a Pegawai by ID
router.delete('/pegawai/:id', deletePegawai); // Delete a Pegawai by ID

export default router;
