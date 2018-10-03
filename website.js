/*Javascript to do
-Header text transition in on page load
*/

function remove(){
    document.body.classList.remove('fade-out');
    document.getElementById("line1").classList.remove("titleFade");
    document.getElementById("line2").classList.remove("titleFade");
    document.getElementById("line3").classList.remove("titleFade");
    document.getElementById("titleUnderline").classList.remove("titleFade");
}

function main(){
    remove();
};

main();
