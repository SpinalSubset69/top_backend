const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

const validateDates = {
  validateRange: (fecha) => {
    const fechaSplit = fecha.split("-");
    const date = new Date();

    if (fechaSplit[2] >= date.getFullYear()) {
      if (fechaSplit[1] >= date.getMonth()) {
        if (fechaSplit[0] >= date.getDate()) {
          return true;
        }
      }
    }

    return false;
  },
};

export default validateDates;
