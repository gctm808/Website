/*Javascript to do
-smooth page scroll
-Header text transition in on page load
*/
const scrollOffset = 20;
const blog = document.getElementById("blogBookmark");
const blogLink = document.getElementById("blogLink");


function blogScroll(){
    blog.scrollIntoView({ 
        behavior: 'smooth' 
    });
};


function main(){
    blogLink.addEventListener("click", blogScroll());
};

main();