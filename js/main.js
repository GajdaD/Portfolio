document.addEventListener("DOMContentLoaded", function(event) {
    // Mobile menu pop out
    document.getElementById("nav_mobile_menu").addEventListener("click", animation_function)

    function animation_function() {
        document.getElementById("nav_mobile_menu").removeEventListener("click", animation_function);
        let i_1 = 0
        let i_2 = 0;
        let animation_1 = setInterval(f_animation_1, 5);
        document.getElementById("animation_mobile_menu").style.display = "block";
        document.getElementById("div_mobile_menu").style.display = "block";
        document.getElementById("nav_mobile_menu").style.display = "none";

        function f_animation_1() {
            i_1 += 2;
            document.getElementById("animation_mobile_menu").style.width = i_1 + "%";
            document.getElementById("animation_mobile_menu").style.height = i_1 + "%";
            if (i_1 >= 100) {
                i_2 += 0.04;
                document.getElementById("div_mobile_menu").style.opacity = i_2;

            }
            if (i_2 >= 1) {
                clearInterval(animation_1);
                document.getElementById("mobile_menu_img_close").addEventListener("click", animation_function_2)
            }
        }
    };
    // Mobile menu hide away - close button
    function animation_function_2() {
        document.getElementById("mobile_menu_img_close").removeEventListener("click", animation_function_2);
        let i_1 = 100;
        let i_2 = 1;
        let animation = setInterval(f_animation, 5);
        let flag = true;
        document.getElementById("animation_mobile_menu_out").style.display = "block";

        function f_animation() {

            i_2 -= 0.04;
            document.getElementById("div_mobile_menu").style.opacity = i_2;
            if (i_2 <= 0) {
                if (flag == true) {
                    document.getElementById("animation_mobile_menu").style.display = "none";
                    flag = false;
                }

                i_1 -= 2;
                document.getElementById("animation_mobile_menu_out").style.width = i_1 + "%";
                document.getElementById("animation_mobile_menu_out").style.height = i_1 + "%";
            }
            if (i_1 <= 0) {
                clearInterval(animation);
                document.getElementById("div_mobile_menu").style.display = "none";
                document.getElementById("nav_mobile_menu").style.display = "block";
                document.getElementById("animation_mobile_menu_out").style.display = "none";
                document.getElementById("nav_mobile_menu").addEventListener("click", animation_function);
            }
        }
    };
    // Mobile menu hide away - click link
    const menu_mobile_link = document.getElementsByClassName("menu_mobile_link");
    for (let i = 0; i < menu_mobile_link.length; i++) {
        menu_mobile_link[i].addEventListener("click", function() {
            document.getElementById("animation_mobile_menu").style.display = "none";
            document.getElementById("div_mobile_menu").style.display = "none";
            document.getElementById("nav_mobile_menu").style.display = "block";
            document.getElementById("nav_mobile_menu").addEventListener("click", animation_function);
            document.getElementById("div_mobile_menu").style.opacity = 0;
        });
    }
    // Scrolling window
    var scroll_stop = function(callback) {

        if (!callback || typeof callback !== 'function') return;

        let is_scrolling;
        let elem = document.getElementById("nav_mobile_center").style.width = 100 + "%";
        let elem_width = elem.slice(0, -1);

        window.addEventListener('scroll', function(event) {
            elem = document.getElementById("nav_mobile_center").style.width;
            elem_width = elem.slice(0, -1);
            if (elem_width > 70) {
                elem_width--;
                document.getElementById("nav_mobile_center").style.width = elem_width + "%";
            }

            window.clearTimeout(is_scrolling);
            is_scrolling = setTimeout(function() {
                callback();
            }, 66);
        }, false);
    };
    scroll_stop(function() {
        let animation = setInterval(f_animation, 5);

        let elem_2 = document.getElementById("nav_mobile_center").style.width;
        let elem_width_2 = elem_2.slice(0, -1);

        function f_animation() {
            elem_2 = document.getElementById("nav_mobile_center").style.width;
            elem_width_2 = elem_2.slice(0, -1);
            if (elem_width_2 < 100) {
                elem_width_2++;
                document.getElementById("nav_mobile_center").style.width = elem_width_2 + "%";
            } else {
                clearInterval(animation)
            }
        }
    });
    //Slider navigation
    function slider() {
        const elem = document.getElementsByClassName("slider_images");
        const elem_clicked = document.getElementsByClassName("slider_images_clicked");
        const elem_clicked_top = document.getElementsByClassName("slider_click_top");
        const elem_clicked_bottom = document.getElementsByClassName("slider_click_bottom");
        const tab_images = [elem[0], elem[1], elem[2]];
        const tab_images_clicked = [elem_clicked[0], elem_clicked[1], elem_clicked[2]];
        const tab_images_clicked_top = [elem_clicked_top[0], elem_clicked_top[1], elem_clicked_top[2]];
        const tab_images_clicked_bottom = [elem_clicked_bottom[0], elem_clicked_bottom[1], elem_clicked_bottom[2]];
        const tab_top_links = ["https://github.com/GajdaD/WayToFortune", "https://github.com/GajdaD/Ball-game", "https://github.com/GajdaD/Memory-game"];
        const tab_bottom_links = ["http://waytofortune.epizy.com/index.php", "https://gajdad.github.io/Ball-game/", "https://gajdad.github.io/Memory-game/"]
        var active = 0;
        const elem_count = 2;

        const slider_control_next = document.getElementById("slider_control_next");
        const slider_control_prev = document.getElementById("slider_control_prev");

        slider_control_prev.style.opacity = 0.4;
        tab_images[0].style.display = "block";

        slider_control_next.addEventListener("click", move_right)

        function move_right() {
            if (active == 0) {
                slider_control_prev.addEventListener("click", move_left);
                slider_control_prev.style.opacity = 0.9;
            }

            let elem_old = tab_images[active];
            let elem_new = tab_images[active + 1];
            let elem_old_clicked = tab_images_clicked[active];
            let elem_old_clicked_top = tab_images_clicked_top[active];
            let elem_old_clicked_bottom = tab_images_clicked_bottom[active];

            elem_old.style.display = "none";
            elem_new.style.display = "block";
            elem_old_clicked.style.display = "none";
            elem_old_clicked_top.style.display = "none";
            elem_old_clicked_bottom.style.display = "none";
            active++;
            if (active == elem_count) {
                slider_control_next.removeEventListener("click", move_right)
                slider_control_next.style.opacity = 0.4;
            }
        };

        function move_left() {
            if (active == 2) {
                slider_control_next.addEventListener("click", move_right);
                slider_control_next.style.opacity = 0.9;
            }

            let elem_old = tab_images[active];
            let elem_new = tab_images[active - 1];
            let elem_old_clicked = tab_images_clicked[active];
            let elem_old_clicked_top = tab_images_clicked_top[active];
            let elem_old_clicked_bottom = tab_images_clicked_bottom[active];

            elem_old.style.display = "none";
            elem_new.style.display = "block";
            elem_old_clicked.style.display = "none";
            elem_old_clicked_top.style.display = "none";
            elem_old_clicked_bottom.style.display = "none";
            active--;
            if (active == 0) {
                slider_control_prev.removeEventListener("click", move_left)
                slider_control_prev.style.opacity = 0.4;
            }
        };
        //Slider click
        for (let i = 0; i <= elem_count; i++) {
            tab_images[i].addEventListener("click", function() {
                tab_images[i].classList.add("slider_images_hidden");
                window.setTimeout(function() {
                    tab_images[i].style.display = "none";
                    tab_images[i].classList.remove("slider_images_hidden");
                    tab_images_clicked[i].style.display = "block";
                    tab_images_clicked_top[i].style.display = "block";
                    tab_images_clicked_bottom[i].style.display = "block";
                    tab_images_clicked_top[i].addEventListener("click", function() {
                        window.open(tab_top_links[i], '_blank');
                    })
                    tab_images_clicked_bottom[i].addEventListener("click", function() {
                        window.open(tab_bottom_links[i], '_blank');
                    })
                }, 300)

            });
        }
    }
    slider();

    function switch_light() {
        // Clicking light switches
        const switch_on = document.getElementById("img_switch_on");
        const switch_off = document.getElementById("img_switch_off");
        const p_switch = document.getElementById("p_switch");
        switch_on.addEventListener("click", f_switch_on);
        //////////change colors

        function f_switch_on() {
            switch_on.removeEventListener("click", f_switch_on);
            switch_on.style.display = "none";
            switch_off.style.display = "block";
            p_switch.innerHTML = "Włącz światło";
            switch_off.addEventListener("click", f_switch_off);
            ////////
        }

        function f_switch_off() {
            switch_off.removeEventListener("click", f_switch_off);
            switch_off.style.display = "none";
            switch_on.style.display = "block";
            p_switch.innerHTML = "Wyłącz światło";
            switch_on.addEventListener("click", f_switch_on);
            ///////
        }
    }
    switch_light();

    function scrolling_function() {
        // The checker
        const gambitGalleryIsInView = el => {
                const scroll = window.scrollY || window.pageYOffset
                const boundsTop = el.getBoundingClientRect().top + scroll

                const viewport = {
                    top: scroll,
                    bottom: scroll + window.innerHeight,
                }

                const bounds = {
                    top: boundsTop,
                    bottom: boundsTop + el.clientHeight,
                }

                return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
                    (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
            }
            // Request animation frame
        const raf =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60)
            }
            // Usage
        const tester = document.querySelector('#div_scroll_script')
        let actual_width = 0;
        let visible_height = 0;
        let flag_visible = false;
        let actual_height_percantage = 0;
        let width_part = window.innerWidth / 100;
        const scroll_boat = document.getElementById("scroll_boat");
        const handler = () => raf(() => {
            // Working when div is visible
            if (gambitGalleryIsInView(tester)) {
                if (flag_visible == false) {
                    if (window.pageYOffset < 0) {
                        visible_height = window.pageYOffset + 100;
                    } else {
                        visible_height = window.pageYOffset + tester.getBoundingClientRect().top - window.innerHeight + 100;
                    }
                    flag_visible = true;
                }
                actual_height_percantage = (((window.pageYOffset - visible_height) / window.innerHeight) * 100);
                actual_width = width_part * actual_height_percantage;
                scroll_boat.style.left = actual_width + "px";

            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    scrolling_function();

    function balloon_script() {
        const elem_balloons = document.getElementsByClassName("script_ballon_img");
        const elem_balloon_p = document.getElementById("script_ballon_p");
        const elem_balloon_bg = document.getElementsByClassName("div_balloon_bg");
        const tab_balloons = [elem_balloons[0], elem_balloons[1], elem_balloons[2]];

        tab_balloons[0].addEventListener("click", f_click_balloon);
        let balloon_click = 0;

        function f_click_balloon() {
            switch (balloon_click) {
                case 0:
                    {
                        tab_balloons[0].classList.add("script_ballon_img_larger_0");
                        elem_balloon_p.style.display = "none";
                        balloon_click++;
                        break;
                    }
                case 1:
                    {
                        tab_balloons[0].classList.add("script_ballon_img_larger_1");
                        balloon_click++;
                        break;
                    }
                case 2:
                    {
                        tab_balloons[0].classList.add("script_ballon_img_larger_2");
                        balloon_click++;
                        break;
                    }
                case 3:
                    {
                        tab_balloons[0].classList.add("script_ballon_img_larger_3");
                        balloon_click++;
                        break;
                    }
                case 4:
                    {
                        tab_balloons[0].classList.add("script_ballon_img_larger_4");
                        balloon_click++;
                        break;
                    }
                case 5:
                    {
                        elem_balloon_bg[0].style.display = "block";
                        elem_balloon_bg[0].classList.add("div_balloon_bg_larger");
                        tab_balloons[0].style.display = "none";
                        balloon_click++;
                        setTimeout(function() {
                            elem_balloon_bg[0].classList.add("div_balloon_bg_slide_down");
                        }, 1000);
                        break;

                    }


            }

        }
    }
    balloon_script();
});