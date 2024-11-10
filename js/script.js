
const toggleMobileNav = ()=>{
    const navMenu =  document.getElementById('nav-menu');
    navMenu.style.left == '-316px' ? navMenu.style.left='16px' :  navMenu.style.left == '-316px'
}

const navBtn = document.getElementById('mobile-nav-icon');
navBtn.addEventListener('click', toggleMobileNav)
