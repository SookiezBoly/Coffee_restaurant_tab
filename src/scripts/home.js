import { createElement } from '/src/scripts/elementCreation.js';

const createHome = () =>{
    const h3 = createElement('h3', {}, 'Fresh coffee in the morning');
    const p = createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, minus tempore. Deleniti, repudiandae quos suscipit autem, harum recusandae nostrum, aspernatur aliquid asperiores officia aperiam soluta commodi officiis molestiae aliquam perspiciatis!');
    const a = createElement('a', {href:'', class:'btn'}, 'get yours now');
    const divContent = createElement('div', {class:'content'}, h3, p, a);
    const home = createElement('section', {class:'home', id:'home'}, divContent);

    return home;
}

export{ createHome };