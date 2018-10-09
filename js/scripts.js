(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const c = document.getElementById("current-time");

        function updateTime() {
            var d = new Date(),
                hours = d.getHours(),
                minutes = d.getMinutes(),
                sepClass = (d.getSeconds() % 2 === 0) ? "" : "trans",
                sep = "<span class='" + sepClass + "'>:</span>",
                am_pm = (hours > 12) ? "PM" : "AM";

            if (hours > 12) {
                hours -= 12;
            } else if (hours === 12) {
                hours = 12;
            }
            
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;

            c.innerHTML = hours + sep + minutes + " " + am_pm;
        }

        setInterval(updateTime, 1000);

    });

}());