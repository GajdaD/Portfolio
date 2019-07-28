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
            slider_control_next.style.color = "#F5F5F5"
            slider_control_next.style.backgroundColor = "#333333"
            slider_control_prev.style.color = "#F5F5F5"
            slider_control_prev.style.backgroundColor = "#333333"
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
            slider_control_next.style.color = "#F5F5F5"
            slider_control_next.style.backgroundColor = "#333333"
            slider_control_prev.style.color = "#F5F5F5"
            slider_control_prev.style.backgroundColor = "#333333"
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
                    slider_control_next.style.color = "#333333"
                    slider_control_next.style.backgroundColor = "#F5F5F5"
                    slider_control_prev.style.color = "#333333"
                    slider_control_prev.style.backgroundColor = "#F5F5F5"
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
        const el_main = document.getElementsByTagName("main");
        const el_header = document.getElementsByTagName("header");
        const el_animation_mobile_menu = document.getElementById("animation_mobile_menu");
        const el_animation_mobile_menu_out = document.getElementById("animation_mobile_menu_out");
        const el_div_info = document.getElementsByClassName("div_info");
        const el_div_inset = document.getElementsByClassName("div_inset");
        const el_ul_menu = document.getElementById("ul_menu");
        const el_a_menu = document.getElementsByClassName("first_color");
        const el_div_skills = document.getElementsByClassName("div_skills");
        const el_slider_control_prev = document.getElementById("slider_control_prev");
        const el_slider_control_next = document.getElementById("slider_control_next");
        const el_div_contact_left = document.getElementById("div_contact_left");
        const el_div_contact_right = document.getElementById("div_contact_right");
        const el_footer = document.getElementsByTagName("footer");
        const el_mobile_menu_title_span = document.getElementById("mobile_menu_title_span");
        const el_mobile_menu_close = document.getElementById("mobile_menu_close");
        const el_div_mobile_menu_center = document.getElementById("div_mobile_menu_center");
        const el_ul_menu_mobile = document.getElementById("ul_menu_mobile");
        const el_a_menu_mobile = document.getElementsByClassName("a_menu_mobile");

        switch_on.addEventListener("click", f_switch_on);

        function f_switch_on() {
            switch_on.removeEventListener("click", f_switch_on);
            switch_on.style.display = "none";
            switch_off.style.display = "block";
            p_switch.innerHTML = "Włącz światło";

            el_main[0].style.backgroundColor = "#666666";
            el_header[0].style.backgroundColor = "#666666";
            el_animation_mobile_menu.style.backgroundColor = "#666666";
            el_animation_mobile_menu_out.style.backgroundColor = "#666666";
            for (let i = 0; i < el_div_info.length; i++) {
                el_div_info[i].style.backgroundColor = "#333333";
                el_div_info[i].style.color = "#FFFFFF";
                // el_div_info[i].style.borderColor = "#FFFFFF";
            }
            for (let i = 0; i < el_div_inset.length; i++) {
                el_div_inset[i].style.backgroundColor = "#333333";
                el_div_inset[i].style.color = "#F5F5F5";
                // el_div_inset[i].style.borderColor = "#FFFFFF";
            }
            el_ul_menu.style.backgroundColor = "#FFFFFF";
            for (let i = 0; i < el_a_menu.length; i++) {
                el_a_menu[i].classList.add("second_color");
            }
            for (let i = 0; i < el_div_skills.length; i++) {
                el_div_skills[i].style.borderColor = "#FFFFFF";
            }
            el_slider_control_prev.style.borderColor = "#FFFFFF";
            el_slider_control_next.style.borderColor = "#FFFFFF";
            el_div_contact_left.style.borderColor = "#FFFFFF";
            el_div_contact_right.style.borderColor = "#FFFFFF";
            el_footer[0].style.color = "#333333";
            el_mobile_menu_title_span.style.backgroundColor = "#666666";
            el_mobile_menu_close.style.backgroundColor = "#666666";
            el_div_mobile_menu_center.style.backgroundColor = "#333333";
            el_ul_menu_mobile.style.backgroundColor = "#333333";
            el_ul_menu_mobile.style.color = "#FFFFFF";
            for (let i = 0; i < el_a_menu_mobile.length; i++) {
                el_a_menu_mobile[i].style.color = "#FFFFFF";
            }

            switch_off.addEventListener("click", f_switch_off);
        }

        function f_switch_off() {
            switch_off.removeEventListener("click", f_switch_off);
            switch_off.style.display = "none";
            switch_on.style.display = "block";
            p_switch.innerHTML = "Wyłącz światło";

            el_main[0].style.backgroundColor = "#F5F5F5";
            el_header[0].style.backgroundColor = "#F5F5F5";
            el_animation_mobile_menu.style.backgroundColor = "#F5F5F5";
            el_animation_mobile_menu_out.style.backgroundColor = "#F5F5F5";
            for (let i = 0; i < el_div_info.length; i++) {
                el_div_info[i].style.backgroundColor = "#FFFFFF";
                el_div_info[i].style.color = "#666666";
            }
            for (let i = 0; i < el_div_inset.length; i++) {
                el_div_inset[i].style.backgroundColor = "#FFFFFF";
                el_div_inset[i].style.color = "#666666";
            }
            el_ul_menu.style.backgroundColor = "#333333";
            for (let i = 0; i < el_a_menu.length; i++) {
                el_a_menu[i].classList.remove("second_color");
            }
            for (let i = 0; i < el_div_skills.length; i++) {
                el_div_skills[i].style.borderColor = "#333333";
            }
            el_slider_control_prev.style.borderColor = "#333333";
            el_slider_control_next.style.borderColor = "#333333";
            el_div_contact_left.style.borderColor = "#333333";
            el_div_contact_right.style.borderColor = "#333333";
            el_footer[0].style.color = "#FFFFFF";
            el_mobile_menu_title_span.style.backgroundColor = "#F5F5F5";
            el_mobile_menu_close.style.backgroundColor = "#F5F5F5";
            el_div_mobile_menu_center.style.backgroundColor = "#FFFFFF";
            el_ul_menu_mobile.style.backgroundColor = "#FFFFFF";
            el_ul_menu_mobile.style.color = "#333333";
            for (let i = 0; i < el_a_menu_mobile.length; i++) {
                el_a_menu_mobile[i].style.color = "#333333";
            }

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
        const elem_balloon_bg = document.getElementsByClassName("div_balloon_bg");
        const tab_balloons = [elem_balloons[0], elem_balloons[1], elem_balloons[2]];
        const tab_colors = ["#00a551", "#3270eb", "#6a6a6a"];
        let balloon_run = 0;

        tab_balloons[0].addEventListener("click", f_click_balloon);
        let balloon_click = 0;

        function f_click_balloon() {
            switch (balloon_click) {
                case 0:
                    {
                        tab_balloons[balloon_run % 3].classList.add("script_ballon_img_larger_0");
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        setTimeout(function() {
                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        balloon_click++;
                        break;
                    }
                case 1:
                    {
                        tab_balloons[balloon_run % 3].classList.add("script_ballon_img_larger_1");
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        setTimeout(function() {
                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        balloon_click++;
                        break;
                    }
                case 2:
                    {
                        tab_balloons[balloon_run % 3].classList.add("script_ballon_img_larger_2");
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        setTimeout(function() {
                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        balloon_click++;
                        break;
                    }
                case 3:
                    {
                        tab_balloons[balloon_run % 3].classList.add("script_ballon_img_larger_3");
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        setTimeout(function() {
                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        balloon_click++;
                        break;
                    }
                case 4:
                    {
                        tab_balloons[balloon_run % 3].classList.add("script_ballon_img_larger_4");
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        setTimeout(function() {
                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        balloon_click++;
                        break;
                    }
                case 5:
                    {
                        elem_balloon_bg[0].style.display = "block";
                        //elem_balloon_bg[0].style.width = window.innerWidth + "px";
                        elem_balloon_bg[0].classList.add("div_balloon_bg_larger");

                        document.getElementsByClassName
                        tab_balloons[balloon_run % 3].style.display = "none";
                        tab_balloons[balloon_run % 3].removeEventListener("click", f_click_balloon);
                        tab_balloons[balloon_run % 3].classList.remove("script_ballon_img_larger_0", "script_ballon_img_larger_1", "script_ballon_img_larger_2", "script_ballon_img_larger_3", "script_ballon_img_larger_4")
                        elem_balloon_bg[0].style.backgroundColor = tab_colors[balloon_run % 3];
                        balloon_click = 0;
                        balloon_run++;
                        setTimeout(function() {
                            elem_balloon_bg[0].classList.add("div_balloon_bg_slide_down");
                            tab_balloons[balloon_run % 3].style.display = "block";

                            tab_balloons[balloon_run % 3].addEventListener("click", f_click_balloon);
                        }, 300);
                        setTimeout(function() {
                            elem_balloon_bg[0].style.display = "none";
                            elem_balloon_bg[0].classList.remove("div_balloon_bg_larger", "div_balloon_bg_slide_down");
                        }, 900);
                        break;
                    }
            }
        }
    }
    balloon_script();
});