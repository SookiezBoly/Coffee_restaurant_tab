import { createElement } from '/src/scripts/elementCreation.js';
import { menuElem } from '/src/scripts/ressourcesHTML.js';

const createMenu = () => {
    const h1 = createElement('h1', {class:'heading'},
                                                     'our ', createElement('span', {}, 'menu') );

    const boxes = [];
    for(let i = 0; i < menuElem.length; i++){
        const img = [], h3 = [], div = [], a = []; 

        img[i] = createElement('img', {src: `${menuElem[i].src}`, alt:''}, '');
        h3[i] = createElement('h3', {}, `${menuElem[i].titre}`);
        div[i] = createElement('div', {class:'price'},
                                                      `${menuElem[i].prix} `, createElement('span', {}, `${menuElem[i].remise}`) );
        a[i] = createElement('a', {href:'#', class:'btn'}, 'add to cart');
        boxes[i] = createElement('div', {class:'box'}, img[i], h3[i], div[i], a[i]);
    }

    const boxContainer = createElement('div', {class:'box-container'}, ...boxes);
    const menu = createElement('section', {class:'menu', id:'menu'}, h1, boxContainer)

    return menu;
}

export{ createMenu };