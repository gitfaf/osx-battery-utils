'use strict';

const osxBattery = require('osx-battery');

const isCharging = osxBattery().then(battery => battery.isCharging);
const getAmperage = osxBattery().then(battery => battery.amperage);

module.exports = {
    raw: osxBattery,
    amperage: getAmperage,
    isCharging: isCharging
};
