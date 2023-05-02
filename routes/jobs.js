const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  updateJob,
  createjob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createjob);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
