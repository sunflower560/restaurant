

const hss = document.getElementById("hs")

function hs () {
    window.scrollBy({
        top: 1030,
        left: 0,
        behavior: "smooth"
    });
}

hss.onclick = hs



const br = document.getElementById("br")

function br1 () {
    window.scrollBy({
       top: 1610,
       left: 0,
       behavior: "smooth"
    });
}

br.onclick = br1


const men = document.getElementById("menu")

function menu1 () {
    window.scrollBy({
        top: 3250,
        left: 0,
        behavior: "smooth"
    });
}
men.onclick = menu1




const men2 = document.getElementById("menus")

function menu2 () {
    window.scrollBy({
        top: 4100,
        left: 0,
        behavior: "smooth"
    });
}
men2.onclick = menu2


const history = document.getElementById("history")

function hs2 () {
    window.scrollBy({
        top: 1900,
        left: 0,
        behavior: "smooth"
    });
}

history.onclick = hs2




const bron = document.getElementById("bron")

function br2 () {
    window.scrollBy({
        top: 2600,
        left: 0,
        behavior: "smooth"
    });
}

bron.onclick = br2


// Анимация при скролле
let animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset< (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.lefr + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300)
}
// ====

const burger = document.getElementById('burger');
const menu = document.getElementById('menu-brg')

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
