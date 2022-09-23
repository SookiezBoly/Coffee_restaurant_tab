import { createHeader } from './scripts/header.js';
import { createHome } from './scripts/home.js';
import { createAbout } from './scripts/about.js';
import { createMenu } from './scripts/menu.js';
import { createProducts } from './scripts/products.js';
import { createReview } from './scripts/review.js';
import { createConctact } from './scripts/contact.js';
import { createBlog } from './scripts/blog.js';


createHeader();
document.body.appendChild(createHome());

let tabSwitch = (anchor, chooseTab) => {

    const allTagAnchor = document.getElementsByTagName('a');

    for(let i = 0; i < allTagAnchor.length; i++){
        if(allTagAnchor[i].getAttribute('href') === `#${anchor}`){
            document.querySelector("body").lastElementChild.remove();
            if(document.querySelector("body").lastElementChild.id !== `${anchor}`){
                document.body.append(chooseTab);
            }
        }
    }
}
 

function events(){
    
    const homePage = () => { tabSwitch('home', createHome()) }  ;
    const aboutPage = () => { tabSwitch('about', createAbout()) }  ;
    const menuPage = () => { tabSwitch('menu', createMenu()) }  ;
    const productsPage = () => { tabSwitch('products', createProducts()) }  ;
    const reviewPage = () => { tabSwitch('review', createReview()) }  ;
    const contactPage = () => { tabSwitch('contact', createConctact()) }  ;
    const blogPage = () => { tabSwitch('blogs', createBlog()) }  ;


    document.querySelector('[href="#home"]').addEventListener('click', homePage);
    document.querySelector('[href="#about"]').addEventListener('click', aboutPage);
    document.querySelector('[href="#menu"]').addEventListener('click', menuPage);
    document.querySelector('[href="#products"]').addEventListener('click', productsPage);
    document.querySelector('[href="#review"]').addEventListener('click', reviewPage);
    document.querySelector('[href="#contact"]').addEventListener('click', contactPage);
    document.querySelector('[href="#blogs"]').addEventListener('click', blogPage);

    const cartItem = document.querySelector('.cart-items-container');
    const searcForm = document.querySelector('.search-form');


    document.querySelector('#cart-btn').onclick = () =>{
        cartItem.classList.toggle('active');
        searcForm.classList.remove('active');
    }

    document.querySelector('#search-btn').onclick = () =>{
        searcForm.classList.toggle('active');
        cartItem.classList.remove('active');
    }

    window.onscroll = () =>{
        cartItem.classList.remove('active');
        searcForm.classList.remove('active');
    }
}


events();
