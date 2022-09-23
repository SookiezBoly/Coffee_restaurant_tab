
const navBarElem = [{href:'#home', name:'Home'},
                    {href:'#about', name:'About'},
                    {href:'#menu', name:'Menu'},
                    {href:'#products', name:'Products'},
                    {href:'#review', name:'Review'},
                    {href:'#contact', name:'Contact'},
                    {href:'#blogs', name:'Blog'}];

const iconsElem = [{class:'fas fa-search', id:'search-btn'},
                   {class:'fas fa-shopping-cart', id:'cart-btn'},
                   {class:'fas fa-bars', id:'menu-btn'}];

const cartElem = [{src:'/src/images/cart-item-1.png', titre:'cart item 01', prix:'$15.99/'},
                  {src:'/src/images/cart-item-2.png', titre:'cart item 02', prix:'$15.99/'},
                  {src:'/src/images/cart-item-3.png', titre:'cart item 03', prix:'$15.99/'},
                  {src:'/src/images/cart-item-4.png', titre:'cart item 04', prix:'$15.99/'}];

const menuElem = [{src:'/src/images/menu-1.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'},
                  {src:'/src/images/menu-2.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'},
                  {src:'/src/images/menu-3.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'},
                  {src:'/src/images/menu-4.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'},
                  {src:'/src/images/menu-5.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'},
                  {src:'/src/images/menu-6.png', titre:'tasty and healthy', prix: '$15.99', remise:'20.99'}];

const productsElem = [{src:'/src/images/product-1.png', titre:'fresh coffee', prix:'$15.99', remise:'20.99'},
                      {src:'/src/images/product-2.png', titre:'fresh coffee', prix:'$15.99', remise:'20.99'},
                      {src:'/src/images/product-3.png', titre:'fresh coffee', prix:'$15.99', remise:'20.99'}];

const reviewElem = [{src:'/src/images/pic-1.png', titre:'John deo',
                    comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, officia modi. Quis nostrum architecto officiis accusamus, omnis eaque ipsam officia id excepturi placeat? Veritatis sunt repellendus esse placeat natus ullam!'},
                    {src:'/src/images/pic-2.png', titre:'Marm deo',
                    comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, officia modi. Quis nostrum architecto officiis accusamus, omnis eaque ipsam officia id excepturi placeat? Veritatis sunt repellendus esse placeat natus ullam!'},
                    {src:'/src/images/pic-3.png', titre:'Frugal deo',
                    comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, officia modi. Quis nostrum architecto officiis accusamus, omnis eaque ipsam officia id excepturi placeat? Veritatis sunt repellendus esse placeat natus ullam!'}];


const mapElem = {
                    class : 'map',
                    src : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10502.677230827012!2d2.3426175467853367!3d48.845446168578434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ef6ff7f46f%3A0x50b82c368941a90!2sParis%205e%20Arrondissement%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1663334680616!5m2!1sfr!2sfr',
                    allowfullscreen:"",
                    loading:"lazy",
                    referrerpolicy:"no-referrer-when-downgrade"
                }

const blogElem = [{src:'/src/images/blog-1.jpeg', titre:'tasty and refreshing coffee', name:'by EtnoPolino / 16 sept, 2022',
                   comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis ullam, ad eaque, accusamus excepturi tempore possimus soluta mollitia alias distinctio corporis praesentium placeat aut! Perferendis possimus temporibus pariatur omnis.'},
                  {src:'/src/images/blog-2.jpeg', titre:'Nasty and refreshing coffee', name:'by EtnoPolino / 20 sept, 2022',
                   comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis ullam, ad eaque, accusamus excepturi tempore possimus soluta mollitia alias distinctio corporis praesentium placeat aut! Perferendis possimus temporibus pariatur omnis.'},
                  {src:'/src/images/blog-3.jpeg', titre:'Ugly and refreshing coffee', name:'by EtnoPolino / 25 sept, 2022',
                   comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis ullam, ad eaque, accusamus excepturi tempore possimus soluta mollitia alias distinctio corporis praesentium placeat aut! Perferendis possimus temporibus pariatur omnis.'}];



export { navBarElem, iconsElem, cartElem, menuElem, productsElem, reviewElem, mapElem, blogElem };