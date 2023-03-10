class MyProduct2 extends HTMLElement {

    static get observedAttributes(){
        return ['product', 'brand', 'image'];

    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML= `
        <link rel="stylesheet" href="./src/components/Products2/Products2.css">
        <div class= "producto2">
        <img src="${this.image}" alt="">
        <h1>${this.brand}</h1>
        <h2>${this.product}</h2>
        </div>
        `;
        }
}

customElements.define('product-2', MyProduct2);
export default MyProduct2;