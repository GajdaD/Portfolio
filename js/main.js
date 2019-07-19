document.addEventListener("DOMContentLoaded", function(event) {
    // Mobile menu pop out
    document.getElementById("nav_mobile_menu").addEventListener("click", animation_function)

    function animation_function() {
        document.getElementById("nav_mobile_menu").removeEventListener("click", animation_function);
        let i_1 = 0
        let i_2 = 0;
        let animation_1 = setInterval(f_animation_1, 4);
        document.getElementById("animation_mobile_menu").style.display = "block";
        document.getElementById("div_mobile_menu").style.display = "block";
        document.getElementById("nav_mobile_menu").style.display = "none";

        function f_animation_1() {
            i_1++;
            document.getElementById("animation_mobile_menu").style.width = i_1 + "%";
            document.getElementById("animation_mobile_menu").style.height = i_1 + "%";
            if (i_1 >= 100) {
                i_2 += 0.02;
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
        let animation = setInterval(f_animation, 4);
        let flag = true;
        document.getElementById("animation_mobile_menu_out").style.display = "block";

        function f_animation() {

            i_2 -= 0.02;
            document.getElementById("div_mobile_menu").style.opacity = i_2;
            if (i_2 <= 0) {
                if (flag == true) {
                    document.getElementById("animation_mobile_menu").style.display = "none";
                    flag = false;
                }

                i_1--;
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
    const elem = document.getElementsByClassName("slider_images");
    const elem_clicked = document.getElementsByClassName("slider_images_clicked");
    const tab_images = [elem[0], elem[1], elem[2]];
    const tab_images_clicked = [elem_clicked[0], elem_clicked[1], elem_clicked[2]];
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
            slider_control_prev.style.opacity = 0.8;
        }

        let elem_old = tab_images[active];
        let elem_new = tab_images[active + 1];
        let elem_old_clicked = tab_images_clicked[active];

        elem_old.style.display = "none";
        elem_new.style.display = "block";
        elem_old_clicked.style.display = "none";
        active++;
        if (active == elem_count) {
            slider_control_next.removeEventListener("click", move_right)
            slider_control_next.style.opacity = 0.4;
        }
    };

    function move_left() {
        if (active == 2) {
            slider_control_next.addEventListener("click", move_right);
            slider_control_next.style.opacity = 0.8;
        }

        let elem_old = tab_images[active];
        let elem_new = tab_images[active - 1];
        let elem_old_clicked = tab_images_clicked[active];

        elem_old.style.display = "none";
        elem_new.style.display = "block";
        elem_old_clicked.style.display = "none";
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
            }, 300)


        });
    }

});