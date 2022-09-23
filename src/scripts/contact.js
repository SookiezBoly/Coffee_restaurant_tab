import { createElement } from '/src/scripts/elementCreation.js';
import { mapElem } from '/src/scripts/ressourcesHTML.js';


const createConctact = () =>{
    const h1 = createElement('h1', {class:'heading'},
                                                     createElement('span', {}, 'products'), ' us');

    const map =  createElement('iframe', {class:'map',
                                        allowfullscreen:"",
                                        loading:"lazy",
                                        referrerpolicy:"no-referrer-when-downgrade",
                                        src : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10502.677230827012!2d2.3426175467853367!3d48.845446168578434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ef6ff7f46f%3A0x50b82c368941a90!2sParis%205e%20Arrondissement%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1663334680616!5m2!1sfr!2sfr'}, '')
    
    const h3 = createElement('h3', {}, 'get in touch');
    const inputBoxName = createElement('div', {class:'inputBox'}, createElement('span', {class:'fas fa-user'}, ''),
                                                                  createElement('input', {type:'text', placeholder:'name'}, '')
                                                                );
    const inputBoxEmail = createElement('div', {class:'inputBox'}, createElement('span', {class:'fas fa-envelope'}, ''),
                                                                   createElement('input', {type:'email', placeholder:'email'}, '')
                                                                );                                                        
    const inputBoxPhone = createElement('div', {class:'inputBox'}, createElement('span', {class:'fas fa-phone'}, ''),
                                                                createElement('input', {type:'number', placeholder:'number'}, '')
                                                                );
                                        
    const form = createElement('form', {action:''}, h3, inputBoxName, inputBoxEmail, inputBoxPhone);
    const row = createElement('div', {class:'row'}, map, form);
    const contacts = createElement('section', {class:'contact', id:'contact'}, h1, row);

    return contacts;
}

export{ createConctact };