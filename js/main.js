document.addEventListener("DOMContentLoaded", function(event) {
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
            if (i_1 > 100) {
                i_2 += 0.02;
                document.getElementById("div_mobile_menu").style.opacity = i_2;

            }
            if (i_1 > 150) {
                clearInterval(animation_1);
                document.getElementById("animation_mobile_menu").style.display = "none";
                document.getElementById("mobile_menu_img_close").addEventListener("click", animation_function_2)
            }

        }

    };

    function animation_function_2() {
        document.getElementById("mobile_menu_img_close").removeEventListener("click", animation_function_2);
        let i_1 = 100;
        let i_2 = 1;
        let animation = setInterval(f_animation, 4);
        document.getElementById("animation_mobile_menu_out").style.display = "block";

        function f_animation() {

            i_2 -= 0.02;
            document.getElementById("div_mobile_menu").style.opacity = i_2;
            if (i_2 <= 0) {
                i_1--;
                document.getElementById("animation_mobile_menu_out").style.width = i_1 + "%";
                document.getElementById("animation_mobile_menu_out").style.height = i_1 + "%";
            }
            if (i_1 <= 0) {
                clearInterval(animation);
                document.getElementById("div_mobile_menu").style.display = "none";
                document.getElementById("nav_mobile_menu").style.display = "block";
                document.getElementById("animation_mobile_menu_out").style.display = "none";
                document.getElementById("nav_mobile_menu").addEventListener("click", animation_function)
            }
        }
    };
    let menu_mobile_link = document.getElementsByClassName("menu_mobile_link");
    for (let i = 0; i < menu_mobile_link.length; i++) {
        menu_mobile_link[i].addEventListener("click", function() {
            document.getElementById("div_mobile_menu").style.display = "none";
            document.getElementById("nav_mobile_menu").style.display = "block";
        });
    }
});
//https://icons8.com/icons
//https://www.w3schools.com/css/css3_gradients.asp
//https://www.rafalrebacz.pl/2016/06/10/shadow-cien-w-css/
//https://cssanimation.rocks/pl/portal/
//https://www.w3schools.com/css/css3_animations.asp