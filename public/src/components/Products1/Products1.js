class MyProduct1 extends HTMLElement {

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

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML= `
        <link rel="stylesheet" href="./src/components/Products1/Products1.css">
        <div class= "productos1">
        <img src="${this.image}" alt="holi">
        <div class= "textos">
        <p class="title">${this.brand}</p>
        <p class="name">${this.product}</p>
        </div>
        </div>
        `;
        }
    
}

customElements.define('my-product1', MyProduct1);
export default MyProduct1;

