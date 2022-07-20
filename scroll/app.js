// set date
const year = document.getElementById('date');
year.innerText = new Date().getFullYear();

// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksContainerHeight.height);
    // console.log(linksHeight.height);

    if(linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
    linksContainer.classList.add('show-links');
})

//fixed navbar

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    // console.log(window.pageYOffset);
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight);
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        // console.log(`navHeight: ${navHeight}`);
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        // console.log(`linksContainerHeight: ${linksContainerHeight}`)
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        // console.log(`element.offsetTop: ${element.offsetTop}`);
        // console.log(`position: ${position}`);

        if (!fixedNav){
            position = position - navHeight;
        } 

        if (navHeight > 82) {
            position = position + linksContainerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})