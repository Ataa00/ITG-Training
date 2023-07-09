
import express from "express";
import moment from "moment-timezone";
import validateTimeZone from "../middleware/validation"

const router = express.Router();

router.get("/", (req, res) => {
    let time_zones = moment.tz.names();
    let date = new Date();
    let time = {
        "houres": date.getHours(),
        "minutes": date.getMinutes(),
        "seconds": date.getSeconds()
    };
    res.render("index", {"name":Intl.DateTimeFormat().resolvedOptions().timeZone, "time": time, "time_zones": time_zones});
});

router.post("/", (req, res) => {
    let timeZoneName = req.body.timeZoneName;

    let { error } = validateTimeZone({"timeZoneName": timeZoneName});

    if(error){
        res.status(400).send("Wrong time zone");
        return;
    }

    let time_zones = moment.tz.names();
    let time = {
        "houres": moment.tz(timeZoneName).format("hh"),
        "minutes": moment.tz(timeZoneName).format("mm"),
        "seconds": moment.tz(timeZoneName).format("ss")
    };
    res.render("index", { "name":timeZoneName, "time": time, "time_zones": time_zones});
});

export default router;