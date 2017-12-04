/*JS For Parallax*/
$(document).ready(function () {

    /*Begin JS For Parallax*/
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
     /*End JS For Parallax*/

     /* ****************************/

    /*Begin JS For Time Interval*/
    var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo-1").innerHTML = days + "&nbsp;&nbsp;" + hours + "&nbsp;&nbsp;&nbsp;"
            + minutes + "&nbsp;&nbsp;" + seconds + "&nbsp;&nbsp;";

        document.getElementById("demo-2").innerHTML = days + "&nbsp;&nbsp;" + hours + "&nbsp;&nbsp;&nbsp;"
            + minutes + "&nbsp;&nbsp;" + seconds + "&nbsp;&nbsp;";
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo-1").innerHTML = "EXPIRED";
            document.getElementById("demo-2").innerHTML = "EXPIRED";
        }
    }, 1000);
    /*End JS For Time Interval*/



});

/*JS For Parallax*/
$(function(){
    $('.parascroll').parascroll();

});
/*JS For Parallax*/
