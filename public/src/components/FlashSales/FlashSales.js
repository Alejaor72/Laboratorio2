class MyFlashSales extends HTMLElement {

    static get observedAttributes(){
        return ['product', 'price', 'image', 'deal'];

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
        <link rel="stylesheet" href="./src/components/FlashSales/FlashSales.css">
        <div class= "flashSales">
        <img src="${this.image}" alt="">
        <p class="product">${this.product}</p>
        <p class="price">${this.price}</p>
        <p class="deal">${this.deal}</p>
        </div>
        `;
        }
}

customElements.define('flash-sales', MyFlashSales);
export default MyFlashSales;