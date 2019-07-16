document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("nav_mobile_menu").addEventListener("click", function() {
        document.getElementById("div_mobile_menu").style.display = "block";
        document.getElementById("nav_mobile_menu").style.display = "none";
    });
    document.getElementById("mobile_menu_img_close").addEventListener("click", function() {
        document.getElementById("div_mobile_menu").style.display = "none";
        document.getElementById("nav_mobile_menu").style.display = "block";
    });
    let menu_mobile_link = document.getElementsByClassName("menu_mobile_link");
    for (let i = 0; i < menu_mobile_link.length; i++) {
        menu_mobile_link[i].addEventListener("click", function() {
            document.getElementById("div_mobile_menu").style.display = "none";
            document.getElementById("nav_mobile_menu").style.display = "block";
        });
    }
});