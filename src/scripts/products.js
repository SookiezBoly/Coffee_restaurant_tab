import { createElement } from '/src/scripts/elementCreation.js';
import { productsElem } from '/src/scripts/ressourcesHTML.js';

const createProducts = () => {
    const h1 = createElement('h1', {class:'heading'},
                                                     'our ', createElement('span', {}, 'products') );

    const boxes = [];

    for(let i = 0; i < productsElem.length; i++){
        const divContent = [], icons = [], image = [], h3 = [], ratingStars = [], price = [], i_tag = [], a1 = [], a2 = [], a3 = [];
        
        //icons
        for(let k = 0; k < 3; k++){
            a1[k] = createElement('a', {href:'#', class:'fas fa-shopping-cart'}, '');
            a2[k] = createElement('a', {href:'#', class:'fas fa-heart'}, '');
            a3[k] = createElement('a', {href:'#', class:'fas fa-eye'}, '');
            icons[k] = createElement('div', {class:'icons'}, a1[k], a2[k], a3[k]);
        }

        //image
        image[i] = createElement('div', {class:'image'},
                                                        createElement('img', {src:`${productsElem[i].src}`, alt:''}, ''))

        // content
        h3[i] = createElement('h3', {}, `${productsElem[i].titre}`);
        for(let j = 0; j < 4; j++){
            i_tag[j] = createElement('i', {class:'fas fa-star'}, '');
        }
        ratingStars[i] = createElement('div', {class:'stars'}, ...[...i_tag],
                                                                             createElement('i', {class:'fas fa-star-half-alt'}, '') );

        //price
        price[i] = createElement('div', {class:'price'},
                                                        `${productsElem[i].prix} `, createElement('span', {}, `${productsElem[i].remise}`));
      
        divContent[i] = createElement('div', {class:'content'}, h3[i], ratingStars[i], price[i]);

        //boxes
        boxes[i] = createElement('div', {class:'box'}, icons[i], image[i], divContent[i]);
    }

    const boxContainer = createElement('div', {class:'box-container'}, ...boxes);
    const products = createElement('section', {class:'products', id:'products'}, h1, boxContainer);

    return products;
}


export{ createProducts };