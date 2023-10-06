function redirectHome() {
    window.location.href = "de/"
}

function initializeWebsite() {
    console.log("Setting variables and attributes...")
    menuExpanded = 0;
    maintenanceModeEnabled = 1;
    //var element = document.getElementById("menu_content");
    //element.style.opacity = "0";
    $(function(){
        $("#sharedMaintenanceModeWall").load("../shared/maintenance_wall.html");
        $("#sharedFooter").load("../shared/footer.html");
        $("#sharedMenu").load("../shared/menu.html");
        $("#sharedLargeBanner").load("../shared/large_banner.html");
        $("#sharedMobileNavbar").load("../shared/mobile_navbar.html");
        console.log("Loaded shared content.")
    });
    console.log("initialization complete.")
}

function maintenanceMode() {
    if (maintenanceModeEnabled == 1) {
        console.log("Maintenance mode is enabled.")
        setTimeout( () =>{
            var element = document.getElementById("maintenanceModeWall")
            element.setAttribute("style", "height: 100vh;")
            var element = document.getElementById("maintenanceModeWallContent")
            element.setAttribute("style", "height: 100vh;")
            element.setAttribute("style", "visibility: visible;")
            setTimeout( () =>{
                element.style.opacity = "1";
            }, 500);
            console.log("Website content hidden.")
        }, 500)  
    }
    else {
        console.log("Maintenance mode is disabled.")
        console.log("Website content left visible")
    }
}
function removeMaintenanceModeRestriction() {
    console.log("Showing password prompt.")
    var userInput = prompt("Very secure not hard coded password:");
    if (userInput == "oerel") {
        console.log("User entered correct password.")
        setTimeout( () =>{
            var element = document.getElementById("maintenanceModeWallContent")
            element.style.opacity = "0";
            setTimeout( () =>{
                var element = document.getElementById("maintenanceModeWall")
                element.setAttribute("style", "height: 0;")
                var element = document.getElementById("maintenanceModeWallContent")
                element.setAttribute("style", "height: 0;")
                element.setAttribute("style", "visibility: hidden;")
            }, 500);
            console.log("Maintenance mode wall hidden.")
        }, 200);
    }
    else {
        console.log("User entered wrong password.")
    }
}
function menu() {
    if (menuExpanded == 0) {
        var element = document.getElementById("menu")
        element.setAttribute("style", "height: 100vh;")
        var element = document.getElementById("menuContent")
        element.setAttribute("style", "height: 100vh;")
        element.setAttribute("style", "visibility: visible;")
        setTimeout( () =>{
            element.style.opacity = "1";
        }, 250);
        menuExpanded = 1;
    }
    else {
        var element = document.getElementById("menuContent")
        element.style.opacity = "0";
        element.setAttribute("style", "height: 0;")
        element.setAttribute("style", "visibility: hidden;")
        var element = document.getElementById("menu")
        setTimeout( () =>{
            element.setAttribute("style", "height: 0;")
        }, 250);
        menuExpanded = 0;
    }
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.navbar').css('background','#191b24');
        $('.navbar_links_current').css('background-color','darkslateblue');
        $('.navbar_links_current').css('border','darkslateblue solid 10px');
        $('.navbar_links_current').css('color','white');
        $('.navbar').css('opacity','100%');
    } else {
        $('.navbar').css('background','transparent');
        $('.navbar_links_current').css('background-color','white');
        $('.navbar_links_current').css('border','white solid 10px');
        $('.navbar_links_current').css('color','black');
    }
});