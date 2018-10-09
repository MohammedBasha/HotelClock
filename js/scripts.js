(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const c = document.getElementById("current-time");

        function updateTime() {
            var d = new Date(),
                hours = d.getHours(),
                sep = (d.getSeconds() % 2 === 0)? ":" : " ";

            if (hours > 12) hours -= 12;

            c.innerHTML = hours + sep + d.getMinutes();
        }

        setInterval(updateTime, 1000);

    });

}());