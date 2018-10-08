const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementsByClassName("menuLink");
var menuOpen = false;

function addResponsiveness(){
    mobileMenu.addEventListener("click", function(){
        if(menuOpen == false){
            document.getElementById("menuLink1").classList.remove("menuLink");
            document.getElementById("menuLink2").classList.remove("menuLink");
            document.getElementById("menuLink3").classList.remove("menuLink");
            document.getElementById("menuLink4").classList.remove("menuLink");
            document.getElementById("menuLink5").classList.remove("menuLink");
            menuOpen = true;
        } else {
            document.getElementById("menuLink1").classList.add("menuLink");
            document.getElementById("menuLink2").classList.add("menuLink");
            document.getElementById("menuLink3").classList.add("menuLink");
            document.getElementById("menuLink4").classList.add("menuLink");
            document.getElementById("menuLink5").classList.add("menuLink");
            menuOpen = false;
        }
    })
}

function remove(){
    document.body.classList.remove('fade-out');
    document.getElementById("line1").classList.remove("titleFade");
    document.getElementById("line2").classList.remove("titleFade");
    document.getElementById("line3").classList.remove("titleFade");
    document.getElementById("titleUnderline").classList.remove("titleFade");
}

function main(){
    remove();
    addResponsiveness();
};

main();
