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
        <h1 class="title">${this.brand}</h1>
        <h2 class="name">${this.product}</h2>
        </div>
        `;
        }
    
}

customElements.define('my-product1', MyProduct1);
export default MyProduct1;

