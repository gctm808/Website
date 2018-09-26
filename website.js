/*Javascript to do
-smooth page scroll
-social bar change color on hover
-portfolio icons size increase on hover
-borders glow on hover
-Header text transition in on page load

//-Create const link to header underline

const titleUnderline = document.getElementById("titleUnderline");


function addGlow(){
    titleUnderline.classList.add("glow");
    setTimeout(function(){titleUnderline.classList.remove("glow")}, 1000);
    console.log("hover");
}

function main(){
    titleUnderline.addEventListener("mouseover", addGlow());
}

main();

const blog = document.getElementById("blogBookmark");
const blogLink = document.getElementById("blogLink");

function scrollToBlog() {
    blogBookmark.scrollIntoView({
        behavior: "smooth"
    })
};

function main(){
    blogLink.addEventListener("click", scrollToBlog());
}

main();*/