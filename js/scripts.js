(function () {
    "use strict";
    
    document.addEventListener("DOMContentLoaded", function () {
        const c = document.getElementById("current-time");
        var d = new Date(),
            hours = d.getHours();
        
        if (hours > 12) hours -= 12;
        c.innerHTML = hours + ":" + d.getMinutes();
    });

}());