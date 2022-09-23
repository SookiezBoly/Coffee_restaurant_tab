import { createElement } from '/src/scripts/elementCreation.js';
import { reviewElem } from '/src/scripts/ressourcesHTML.js';

const createReview = () =>{
    const h1 = createElement('h1', {class:'heading'},
                                                     `customer's `, createElement('span', {}, 'review') );

    const boxes = [];

    for(let i = 0; i < reviewElem.length; i++){
        const imgQuote = [], image = [], p = [], h3 = [], ratingStars = [],  i_tag = [];

        imgQuote[i] = createElement('img', {src:'/src/images/quote-img.png', class:'quote', alt:''}, '');
        p[i] = createElement('p', {}, `${reviewElem[i].comment}`);
        image[i] = createElement('img', {src:`${reviewElem[i].src}`, class:'user', alt:''}, '');
        h3[i] = createElement('h3', {}, `${reviewElem[i].titre}`);

        for(let j = 0; j < 4; j++){
            i_tag[j] = createElement('i', {class:'fas fa-star'}, '');
        }
        ratingStars[i] = createElement('div', {class:'stars'}, ...[...i_tag],
                                                                             createElement('i', {class:'fas fa-star-half-alt'}, '') );

        boxes[i] = createElement('div', {class:'box'}, imgQuote[i], p[i], image[i], h3[i], ratingStars[i]);
    }
     
    const boxContainer = createElement('div', {class:'box-container'}, ...boxes);
    const review = createElement('section', {class:'review', id:'review'}, h1, boxContainer);

    return review;
}

export{ createReview };