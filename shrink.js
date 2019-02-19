    window.onscroll = function () {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navigation").setAttribute('style', "background-color: #2c86c7!important;");
                document.getElementById("navigation").style.transition = "all .5s";
            } else {
                document.getElementById("navigation").setAttribute('style', "background-color: #fff!important;");
                document.getElementById("navigation").style.transition = "all .5s";
            }
        }