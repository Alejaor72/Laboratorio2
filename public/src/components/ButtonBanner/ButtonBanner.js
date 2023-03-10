class MyButtons extends HTMLElement {

    static get observedAttributes(){
        return [];
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
        <div class= "buttons">
        <button>Free Standard Shipping to Colombia with any US$ 119 purchase</button>
        <button>Download YS app & Get 50 YS</button>
        <button>Free Gifts & Premiums</button>
        </div>
        `;
        }
    
}

customElements.define('my-buttons', MyButtons);
export default MyButtons;
