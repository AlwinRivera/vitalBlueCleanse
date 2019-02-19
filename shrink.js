    window.onscroll = function () {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar-brand").setAttribute('style', "font-size:20px; margin-top:4px; margin-bottom:4px; width:68.281px; height:24px;");
                document.getElementById("navbar-brand").style.transition = "all .5s";
            } else {
                document.getElementById("navbar-brand").setAttribute('style', "font-size:24px; margin-bottom:0!important; width:68.281px;");
                document.getElementById("navbar-brand").style.transition = "all .5s";
            }
        }