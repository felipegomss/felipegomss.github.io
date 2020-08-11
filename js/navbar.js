function myFunction() {
    var x = document.getElementById("myTopnav");
    var m = document.getElementById("main");
    if (x.className === "topnav" || m.className === "main") {
        x.className += " responsive";
        m.className += " responsive";
    } else {
        x.className = "topnav";
        m.className = " main";
    }
}