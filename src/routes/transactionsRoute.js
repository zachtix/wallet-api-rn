import express from "express";
import {
  createTransaction,
  deleteTransactionById,
  getSummaryByUserId,
  getTransactionsByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:user_id", getTransactionsByUserId);
router.post("/", createTransaction);
router.delete("/:id", deleteTransactionById);
router.get("/summary/:user_id", getSummaryByUserId);

export default router;
