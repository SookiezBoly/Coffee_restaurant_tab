import { createElement } from '/src/scripts/elementCreation.js';
import { navBarElem, iconsElem, cartElem } from '/src/scripts/ressourcesHTML.js';


const createHeader = () =>{
    // logo
    const imgLogo = createElement('img', {src:'/src/images/logo.png', alt:'logo'},'');
    const aLogo = createElement('a',{href : '#', class : 'logo'}, imgLogo);

    //nav
    const aNavBar = [];
    for(let i = 0; i < navBarElem.length; i++){
        aNavBar[i] = createElement('a', {href: `${navBarElem[i].href}`}, `${navBarElem[i].name}`);
    }
    const navbar = createElement('nav', {class: 'navbar'}, ...aNavBar);

    //icons
    const aIcons = [];
    for(let i = 0; i < iconsElem.length; i++){
        aIcons[i] = createElement('div', {class:`${iconsElem[i].class}`, id:`${iconsElem[i].id}`}, '');
    }
    const icons = createElement('nav', {class: 'icons'}, ...aIcons); 

    //search-form
    const inputSearch = createElement('input', {type:'search', id:'search-box', placeholder:'search here..'}, '');
    const label = createElement('label', {class:'fas fa-search', for:'search-box'}, '');
    const searchForm = createElement('div', {class:'search-form'}, inputSearch, label);
    
    //cart items container
    const cartItem = [];
    for(let i = 0; i < cartElem.length; i++){
        const divPrix = [], h3 = [], divContent = [], imgCart = [], spanCart = []

        spanCart[i] = createElement('span', {class:'fas fa-times'}, '');
        imgCart[i] = createElement('img', {src:`${cartElem[i].src}`}, '');
        divPrix[i] = createElement('div', {class:'price'}, `${cartElem[i].prix}`);
        h3[i] = createElement('h3', {}, `${cartElem[i].titre}`);
        divContent[i] = createElement('div', {class:'content'}, h3[i], divPrix[i]);
            
        cartItem[i] = createElement('div', {class:'cart-item'}, spanCart[i], imgCart[i], divContent[i]);
    }
    
    //button checkout
    const checkoutBtn = createElement('a', {class:'btn', href:'#'}, 'Checkout Now');

    const cartItemContainer = createElement('div', {class:'cart-items-container'}, ...[...cartItem, checkoutBtn]);
    const header = createElement('header', {class : 'header'}, ...[aLogo, navbar, icons, searchForm, cartItemContainer]); 
    document.body.appendChild(header)
}

export{ createHeader };