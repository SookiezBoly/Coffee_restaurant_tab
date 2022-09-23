import { createElement } from '/src/scripts/elementCreation.js';
import { blogElem } from '/src/scripts/ressourcesHTML.js';

const createBlog = () =>{
    const h1 = createElement('h1', {class:'heading'},
                                                     'our ', createElement('span', {}, 'blogs') );
    
    const boxes = [];

    for(let i = 0; i < blogElem.length; i++){
        const div = [], image = [];

        image[i] = createElement('div', {class:'image'}, createElement('img', {src:`${blogElem[i].src}`}, '') );

        div[i] = createElement('div', {class:'content'}, createElement('a', {href:'#', class:'title'}, `${blogElem[i].titre}`),
                                                         createElement('span', {}, `${blogElem[i].name}`),
                                                         createElement('p', {}, `${blogElem[i].comment}`), 
                                                         createElement('a', {href:'#', class:'btn'}, 'read more') );
    
        boxes[i] = createElement('div', {class:'box'}, image[i], div[i]);
    }
                                                     
    const boxContainer = createElement('div', {class:'box-container'}, ...boxes);
    const blog = createElement('section', {class:'blogs', id:'blogs'}, h1, boxContainer);

    return blog;
}

export{ createBlog }