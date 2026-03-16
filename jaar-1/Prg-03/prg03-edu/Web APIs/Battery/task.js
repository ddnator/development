window.addEventListener('load', init);

//Global vars
let targetStatus;
let targetRemaining;

function init() {

    targetStatus = document.getElementById('target-status');
    targetRemaining = document.getElementById('target-remaining');
    getBatteryStatus();
}

function getBatteryStatus() {
    if (typeof navigator.getBattery === "undefined") {
        targetStatus.innerHTML = 'Battery API not supported.';
        return;
    }

    navigator.getBattery().then((battery) => {
        showBatteryStatus(battery);
        battery.addEventListener('levelchange', () => showBatteryStatus(battery));
    });
}

/**
 * Show the status to the user based on the actual battery status
 *
 * @param battery
 */
function showBatteryStatus(battery) {
    console.log(battery)
}
