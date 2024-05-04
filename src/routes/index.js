import { Router } from "express";
import usersRouter from "./usersRouter.js";
import vehiclesRouter from "./vehiclesRouter.js";
import driver from "./driverRoutes.js"

const router = Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});


// Here we define the routes
router.use("/users", usersRouter);
router.use("/vehicles", vehiclesRouter);
router.use("/driver", driver);
// router.use("drivers", driversRouter);
// router.use("trips", tripsRouter);
// router.use("freights", authRouter);

export default router;
