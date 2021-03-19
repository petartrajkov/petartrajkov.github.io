                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();

                    //>=, not <=
                    if (scroll >= 100) {
                        //clearHeader, not clearheader - caps H
                        $(".navbar-inverse, #logo").addClass("black");
                    }
                    else {
                        $(".navbar-inverse, #logo").removeClass("black");
                    }
                }); //missing );


                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();

                    //>=, not <=
                    if (scroll >= 100) {
                        //clearHeader, not clearheader - caps H
                        $(".navbar-inverse .navbar-nav>li>a").addClass("invertmenu");
                    }
                    else {
                        $(".navbar-inverse .navbar-nav>li>a").removeClass("invertmenu");
                    }
                }); //missing );

                $(window).scroll(function () {
                        var scroll = $(window).scrollTop();

                        //>=, not <=
                        if (scroll >= 100) {
                            //clearHeader, not clearheader - caps H
                            $("#logo").addClass("logosize");
                        }
                        else {
                            $("#logo").removeClass("logosize");
                        }
                    }); //missing );