import { createElement } from '/src/scripts/elementCreation.js';

const createAbout = () => {

    const h1 = createElement('h1', {class:'heading'},
                                                    createElement('span', {}, 'about'), ' us');

    const h3 = createElement('h3', {}, 'what makes our coffee special ?');
    const p1 = createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus saepe officia, at incidunt illum illo cumque omnis libero vel doloribus nostrum. Consequatur porro atque voluptas iure corrupti molestias. Quam!');
    const p2 = createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam necessitatibus nesciunt, sint qui voluptatem sit dolorum suscipit laboriosam soluta mollitia natus voluptatibus magni commodi obcaecati optio nostrum est quos?');
    const a = createElement('a', {href:'#', class:'btn'}, 'learn more');
    const image = createElement('div', {class:'image'}, 
                                                       createElement('img', {src:'/src/images/about-img.jpeg', alt:''}, '') );

    const divContent = createElement('div', {class:'content'}, h3, p1, p2, a);

    const row = createElement('div', {class:'row'}, image, divContent);
    const about = createElement('section', {class:'about', id:'about'}, h1, row)

    return about;
}

export{ createAbout }