document.addEventListener("DOMContentLoaded", function(event) {
    // Mobile menu pop out
    document.getElementById("nav_mobile_menu").addEventListener("click", mobileMenuPopUp)

    function mobileMenuPopUp() {
        document.getElementById("nav_mobile_menu").removeEventListener("click", mobileMenuPopUp);
        let width = 0
        let opacity = 0;
        document.getElementById("animation_mobile_menu").style.display = "block";
        document.getElementById("div_mobile_menu").style.display = "block";
        document.getElementById("nav_mobile_menu").style.display = "none";

        const menuAnimation = () => {
            width += 2.5;
            document.getElementById("animation_mobile_menu").style.width = width + "%";
            document.getElementById("animation_mobile_menu").style.height = width + "%";
            if (width >= 100) {
                opacity += 0.04;
                document.getElementById("div_mobile_menu").style.opacity = opacity;
            }
            if (opacity < 1) {
                requestAnimationFrame(menuAnimation)
            } else {
                document.getElementById("mobile_menu_img_close").addEventListener("click", mobileMenuShiftAway)
            }
        }
        menuAnimation();
    };
    // Mobile menu shift away - close button
    function mobileMenuShiftAway() {
        document.getElementById("mobile_menu_img_close").removeEventListener("click", mobileMenuShiftAway);
        let width = 100;
        let opacity = 1;
        let flag = true;
        document.getElementById("animation_mobile_menu_out").style.display = "block";
        const menuAnimation = () => {
            opacity -= 0.04;
            document.getElementById("div_mobile_menu").style.opacity = opacity;
            if (opacity <= 0) {
                if (flag == true) {
                    document.getElementById("animation_mobile_menu").style.display = "none";
                    flag = false;
                }

                width -= 2.5;
                document.getElementById("animation_mobile_menu_out").style.width = width + "%";
                document.getElementById("animation_mobile_menu_out").style.height = width + "%";
            }
            if (width > 0) {
                requestAnimationFrame(menuAnimation)

            } else {
                document.getElementById("div_mobile_menu").style.display = "none";
                document.getElementById("nav_mobile_menu").style.display = "block";
                document.getElementById("animation_mobile_menu_out").style.display = "none";
                document.getElementById("nav_mobile_menu").addEventListener("click", mobileMenuPopUp);
            }
        }
        menuAnimation();
    };
    // Mobile menu shift away - click link
    function mobileMenuShiftAwayLink() {
        const elementMenuMobileLink = document.getElementsByClassName("menu_mobile_link");
        for (let i = 0; i < elementMenuMobileLink.length; i++) {
            elementMenuMobileLink[i].addEventListener("click", function() {
                document.getElementById("animation_mobile_menu").style.display = "none";
                document.getElementById("div_mobile_menu").style.display = "none";
                document.getElementById("nav_mobile_menu").style.display = "block";
                document.getElementById("nav_mobile_menu").addEventListener("click", mobileMenuPopUp);
                document.getElementById("div_mobile_menu").style.opacity = 0;
            });
        }
    }
    mobileMenuShiftAwayLink();

    // Scrolling window
    let scrollStop = function(callback) {

        if (!callback || typeof callback !== 'function') return;

        let isScrolling;
        let elementMobileNav = document.getElementById("nav_mobile_center").style.width = 100 + "%";
        let mobileNavWidth = elementMobileNav.slice(0, -1);

        window.addEventListener('scroll', function() {
            elementMobileNav = document.getElementById("nav_mobile_center").style.width;
            mobileNavWidth = elementMobileNav.slice(0, -1);
            if (mobileNavWidth > 70) {
                mobileNavWidth--;
                document.getElementById("nav_mobile_center").style.width = mobileNavWidth + "%";
            }

            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                callback();
            }, 66);
        }, false);
    };
    scrollStop(function() {
        let elementMobileNav = document.getElementById("nav_mobile_center").style.width;
        let mobileNavWidth = elementMobileNav.slice(0, -1);

        const animation = () => {
            elementMobileNav = document.getElementById("nav_mobile_center").style.width;
            mobileNavWidth = elementMobileNav.slice(0, -1);
            if (mobileNavWidth < 100) {
                mobileNavWidth++;
                document.getElementById("nav_mobile_center").style.width = mobileNavWidth + "%";
                requestAnimationFrame(animation)
            }
        }
        animation();

    });
    //Slider navigation
    function slider() {
        const ElementSlider = document.getElementsByClassName("slider_images");
        const elementClick = document.getElementsByClassName("slider_images_clicked");
        const elementClickTop = document.getElementsByClassName("slider_click_top");
        const elementClickBottom = document.getElementsByClassName("slider_click_bottom");
        const tableImages = [ElementSlider[0], ElementSlider[1], ElementSlider[2]];
        const tableImagesClick = [elementClick[0], elementClick[1], elementClick[2]];
        const tableImagesClickTop = [elementClickTop[0], elementClickTop[1], elementClickTop[2]];
        const tableImagesClickBottom = [elementClickBottom[0], elementClickBottom[1], elementClickBottom[2]];
        const tableTopLinks = ["https://github.com/GajdaD/Ball-game", "https://github.com/GajdaD/Memory-game", "https://github.com/GajdaD/WayToFortune"];
        const tableBottomLinks = ["https://gajdad.github.io/Ball-game/", "https://gajdad.github.io/Memory-game/", "http://waytofortune.epizy.com/index.php"]
        let activeSlide = 0;
        const countElements = 2; // 0,1,2

        const elementSliderControlNext = document.getElementById("slider_control_next");
        const elementSliderControlPrev = document.getElementById("slider_control_prev");

        elementSliderControlPrev.style.opacity = 0.4;
        tableImages[0].style.display = "block";

        elementSliderControlNext.addEventListener("click", sliderMoveRight)

        function sliderMoveRight() {
            if (activeSlide === 0) {
                elementSliderControlPrev.addEventListener("click", sliderMoveLeft);
                elementSliderControlPrev.style.opacity = 0.9;
            }

            let elementOld = tableImages[activeSlide];
            let elementNew = tableImages[activeSlide + 1];
            let elementOldClicked = tableImagesClick[activeSlide];
            let elementOldClickedTop = tableImagesClickTop[activeSlide];
            let elementOldClickedBottom = tableImagesClickBottom[activeSlide];

            elementOld.style.display = "none";
            elementNew.style.display = "block";
            elementOldClicked.style.display = "none";
            elementOldClickedTop.style.display = "none";
            elementOldClickedBottom.style.display = "none";
            elementSliderControlNext.style.color = "#F5F5F5"
            elementSliderControlNext.style.backgroundColor = "#333333"
            elementSliderControlPrev.style.color = "#F5F5F5"
            elementSliderControlPrev.style.backgroundColor = "#333333"
            activeSlide++;
            if (activeSlide === countElements) {
                elementSliderControlNext.removeEventListener("click", sliderMoveRight)
                elementSliderControlNext.style.opacity = 0.4;
            }
        };

        function sliderMoveLeft() {
            if (activeSlide === 2) {
                elementSliderControlNext.addEventListener("click", sliderMoveRight);
                elementSliderControlNext.style.opacity = 0.9;
            }

            let elementOld = tableImages[activeSlide];
            let elementNew = tableImages[activeSlide - 1];
            let elementOldClicked = tableImagesClick[activeSlide];
            let elementOldClickedTop = tableImagesClickTop[activeSlide];
            let elementOldClickedBottom = tableImagesClickBottom[activeSlide];

            elementOld.style.display = "none";
            elementNew.style.display = "block";
            elementOldClicked.style.display = "none";
            elementOldClickedTop.style.display = "none";
            elementOldClickedBottom.style.display = "none";
            elementSliderControlNext.style.color = "#F5F5F5"
            elementSliderControlNext.style.backgroundColor = "#333333"
            elementSliderControlPrev.style.color = "#F5F5F5"
            elementSliderControlPrev.style.backgroundColor = "#333333"
            activeSlide--;
            if (activeSlide === 0) {
                elementSliderControlPrev.removeEventListener("click", sliderMoveLeft)
                elementSliderControlPrev.style.opacity = 0.4;
            }
        };
        //Slider click
        for (let i = 0; i <= countElements; i++) {
            tableImages[i].addEventListener("click", function() {
                tableImages[i].classList.add("slider_images_hidden");
                window.setTimeout(function() {
                    elementSliderControlNext.style.color = "#333333"
                    elementSliderControlNext.style.backgroundColor = "#F5F5F5"
                    elementSliderControlPrev.style.color = "#333333"
                    elementSliderControlPrev.style.backgroundColor = "#F5F5F5"
                    tableImages[i].style.display = "none";
                    tableImages[i].classList.remove("slider_images_hidden");
                    tableImagesClick[i].style.display = "block";
                    tableImagesClickTop[i].style.display = "block";
                    tableImagesClickBottom[i].style.display = "block";
                    tableImagesClickTop[i].addEventListener("click", function() {
                        window.open(tableTopLinks[i], '_blank');
                    })
                    tableImagesClickBottom[i].addEventListener("click", function() {
                        window.open(tableBottomLinks[i], '_blank');
                    })
                }, 300)
            });
        }
    }
    slider();

    function switchLight() {
        // Clicking light switches
        const elementSwitchOn = document.getElementById("img_switch_on");
        const elementSwitchOff = document.getElementById("img_switch_off");
        const elementPSwitch = document.getElementById("p_switch");
        const elementMain = document.getElementsByTagName("main");
        const elementHeader = document.getElementsByTagName("header");
        const elementAnimationMobileMenuIn = document.getElementById("animation_mobile_menu");
        const elementAnimationMobileMenuOut = document.getElementById("animation_mobile_menu_out");
        const elementsDivInfo = document.getElementsByClassName("div_info");
        const elementsDivInset = document.getElementsByClassName("div_inset");
        const elementUlMenu = document.getElementById("ul_menu");
        const elementsAMenu = document.getElementsByClassName("first_color");
        const elementsDivSkills = document.getElementsByClassName("div_skills");
        const elementSliderControlPrev = document.getElementById("slider_control_prev");
        const elementSliderControlNext = document.getElementById("slider_control_next");
        const elementDivContactLeft = document.getElementById("div_contact_left");
        const elementDivContactRight = document.getElementById("div_contact_right");
        const elementFooter = document.getElementsByTagName("footer");
        const elementMobileMenuTitleSpan = document.getElementById("mobile_menu_title_span");
        const elementMobileMenuClose = document.getElementById("mobile_menu_close");
        const elementDivMobileMenuCenter = document.getElementById("div_mobile_menu_center");
        const elementUlMenuMobile = document.getElementById("ul_menu_mobile");
        const elementsAMenuMobile = document.getElementsByClassName("a_menu_mobile");

        elementSwitchOn.addEventListener("click", functionSwitchOn);

        function functionSwitchOn() {
            elementSwitchOn.removeEventListener("click", functionSwitchOn);
            elementSwitchOn.style.display = "none";
            elementSwitchOff.style.display = "block";
            elementPSwitch.innerHTML = "Włącz światło";

            elementMain[0].style.backgroundColor = "#666666";
            elementHeader[0].style.backgroundColor = "#666666";
            elementAnimationMobileMenuIn.style.backgroundColor = "#666666";
            elementAnimationMobileMenuOut.style.backgroundColor = "#666666";
            for (let i = 0; i < elementsDivInfo.length; i++) {
                elementsDivInfo[i].style.backgroundColor = "#333333";
                elementsDivInfo[i].style.color = "#FFFFFF";
            }
            for (let i = 0; i < elementsDivInset.length; i++) {
                elementsDivInset[i].style.backgroundColor = "#333333";
                elementsDivInset[i].style.color = "#F5F5F5";
            }
            elementUlMenu.style.backgroundColor = "#FFFFFF";
            for (let i = 0; i < elementsAMenu.length; i++) {
                elementsAMenu[i].classList.add("second_color");
            }
            for (let i = 0; i < elementsDivSkills.length; i++) {
                elementsDivSkills[i].style.borderColor = "#FFFFFF";
            }
            elementSliderControlPrev.style.borderColor = "#FFFFFF";
            elementSliderControlNext.style.borderColor = "#FFFFFF";
            elementDivContactLeft.style.borderColor = "#FFFFFF";
            elementDivContactRight.style.borderColor = "#FFFFFF";
            elementFooter[0].style.color = "#333333";
            elementMobileMenuTitleSpan.style.backgroundColor = "#666666";
            elementMobileMenuClose.style.backgroundColor = "#666666";
            elementDivMobileMenuCenter.style.backgroundColor = "#333333";
            elementUlMenuMobile.style.backgroundColor = "#333333";
            elementUlMenuMobile.style.color = "#FFFFFF";
            for (let i = 0; i < elementsAMenuMobile.length; i++) {
                elementsAMenuMobile[i].style.color = "#FFFFFF";
            }

            elementSwitchOff.addEventListener("click", functionSwitchOff);
        }

        function functionSwitchOff() {
            elementSwitchOff.removeEventListener("click", functionSwitchOff);
            elementSwitchOff.style.display = "none";
            elementSwitchOn.style.display = "block";
            elementPSwitch.innerHTML = "Wyłącz światło";

            elementMain[0].style.backgroundColor = "#F5F5F5";
            elementHeader[0].style.backgroundColor = "#F5F5F5";
            elementAnimationMobileMenuIn.style.backgroundColor = "#F5F5F5";
            elementAnimationMobileMenuOut.style.backgroundColor = "#F5F5F5";
            for (let i = 0; i < elementsDivInfo.length; i++) {
                elementsDivInfo[i].style.backgroundColor = "#FFFFFF";
                elementsDivInfo[i].style.color = "#666666";
            }
            for (let i = 0; i < elementsDivInset.length; i++) {
                elementsDivInset[i].style.backgroundColor = "#FFFFFF";
                elementsDivInset[i].style.color = "#666666";
            }
            elementUlMenu.style.backgroundColor = "#333333";
            for (let i = 0; i < elementsAMenu.length; i++) {
                elementsAMenu[i].classList.remove("second_color");
            }
            for (let i = 0; i < elementsDivSkills.length; i++) {
                elementsDivSkills[i].style.borderColor = "#333333";
            }
            elementSliderControlPrev.style.borderColor = "#333333";
            elementSliderControlNext.style.borderColor = "#333333";
            elementDivContactLeft.style.borderColor = "#333333";
            elementDivContactRight.style.borderColor = "#333333";
            elementFooter[0].style.color = "#FFFFFF";
            elementMobileMenuTitleSpan.style.backgroundColor = "#F5F5F5";
            elementMobileMenuClose.style.backgroundColor = "#F5F5F5";
            elementDivMobileMenuCenter.style.backgroundColor = "#FFFFFF";
            elementUlMenuMobile.style.backgroundColor = "#FFFFFF";
            elementUlMenuMobile.style.color = "#333333";
            for (let i = 0; i < elementsAMenuMobile.length; i++) {
                elementsAMenuMobile[i].style.color = "#333333";
            }

            elementSwitchOn.addEventListener("click", functionSwitchOn);
        }
    }
    switchLight();

    function scrollingFunction() {
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
        const element = document.querySelector('#div_scroll_script')
        let actualWidth = 0;
        let visibleHeight = 0;
        let flagIsVisible = false;
        let actualHeightPercantage = 0;
        let widthPart = window.innerWidth / 100;
        const elementBoat = document.getElementById("scroll_boat");
        const handler = () => raf(() => {
            // Working when div is visible
            if (gambitGalleryIsInView(element)) {
                if (flagIsVisible == false) {
                    if (window.pageYOffset < 0) {
                        visibleHeight = window.pageYOffset + 100;
                    } else {
                        visibleHeight = window.pageYOffset + element.getBoundingClientRect().top - window.innerHeight + 100;
                    }
                    flagIsVisible = true;
                }
                actualHeightPercantage = (((window.pageYOffset - visibleHeight) / window.innerHeight) * 100);
                actualWidth = widthPart * actualHeightPercantage;
                elementBoat.style.left = actualWidth + "px";

            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    scrollingFunction();

    function balloonsFunction() {
        const elementsBalloons = document.getElementsByClassName("script_ballon_img");
        const elementsBalloonsBg = document.getElementsByClassName("div_balloon_bg");
        const tableBalloons = [elementsBalloons[0], elementsBalloons[1], elementsBalloons[2]];
        const tableColors = ["#00a551", "#3270eb", "#6a6a6a"];
        let balloonRun = 0;

        tableBalloons[0].addEventListener("click", functionClickBalloon);
        let balloonClick = 0;

        function functionClickBalloon() {
            switch (balloonClick) {
                case 0:
                    {
                        tableBalloons[balloonRun % 3].classList.add("script_ballon_img_larger_0");
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        setTimeout(function() {
                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        balloonClick++;
                        break;
                    }
                case 1:
                    {
                        tableBalloons[balloonRun % 3].classList.add("script_ballon_img_larger_1");
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        setTimeout(function() {
                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        balloonClick++;
                        break;
                    }
                case 2:
                    {
                        tableBalloons[balloonRun % 3].classList.add("script_ballon_img_larger_2");
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        setTimeout(function() {
                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        balloonClick++;
                        break;
                    }
                case 3:
                    {
                        tableBalloons[balloonRun % 3].classList.add("script_ballon_img_larger_3");
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        setTimeout(function() {
                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        balloonClick++;
                        break;
                    }
                case 4:
                    {
                        tableBalloons[balloonRun % 3].classList.add("script_ballon_img_larger_4");
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        setTimeout(function() {
                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        balloonClick++;
                        break;
                    }
                case 5:
                    {
                        elementsBalloonsBg[0].style.display = "block";
                        elementsBalloonsBg[0].classList.add("div_balloon_bg_larger");
                        tableBalloons[balloonRun % 3].style.display = "none";
                        tableBalloons[balloonRun % 3].removeEventListener("click", functionClickBalloon);
                        tableBalloons[balloonRun % 3].classList.remove("script_ballon_img_larger_0", "script_ballon_img_larger_1", "script_ballon_img_larger_2", "script_ballon_img_larger_3", "script_ballon_img_larger_4")
                        elementsBalloonsBg[0].style.backgroundColor = tableColors[balloonRun % 3];
                        balloonClick = 0;
                        balloonRun++;
                        setTimeout(function() {
                            elementsBalloonsBg[0].classList.add("div_balloon_bg_slide_down");
                            tableBalloons[balloonRun % 3].style.display = "block";

                            tableBalloons[balloonRun % 3].addEventListener("click", functionClickBalloon);
                        }, 300);
                        setTimeout(function() {
                            elementsBalloonsBg[0].style.display = "none";
                            elementsBalloonsBg[0].classList.remove("div_balloon_bg_larger", "div_balloon_bg_slide_down");
                        }, 900);
                        break;
                    }
                default:
                    {
                        balloonClick = 0;
                    }
            }
        }
    }
    balloonsFunction();
});