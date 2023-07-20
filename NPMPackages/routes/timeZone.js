
import express from "express";
import moment from "moment-timezone";
import validateTimeZone from "../middleware/validation.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

router.get("/:pageNumber", pagination(moment.tz.names()), (req, res) => {
    let date = new Date();
    let time = {
        "hours": date.getHours(),
        "minutes": date.getMinutes(),
        "seconds": date.getSeconds()
    };
    res.render("index", {"name":Intl.DateTimeFormat().resolvedOptions().timeZone, "time": time, "time_zones": res.paginatedResults.results, "currentPage": res.paginatedResults.currentPage});
});

router.post("/", pagination(moment.tz.names()), (req, res) => {
    let timeZoneName = req.body.timeZoneName;

    let { error } = validateTimeZone({"timeZoneName": timeZoneName});
    
    if(error){
        res.status(400).send("Wrong time zone");
    }

    let timeZones = res.paginatedResults;

    let time = {
        "hours": moment.tz(timeZoneName).format("HH"),
        "minutes": moment.tz(timeZoneName).format("mm"),
        "seconds": moment.tz(timeZoneName).format("ss")
    };

    res.render("index", { "name":timeZoneName, "time": time, "time_zones": timeZones.results, "currentPage": timeZones.currentPage});
});

export default router;