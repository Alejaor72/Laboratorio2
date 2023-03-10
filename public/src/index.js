import * as components from "./components/index.js"
import data from "./components/data.js";
import data2 from "./components/data2.js";
import data3 from "./components/data3.js";

class AppContainer2 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    
    render(){
       
        data2.forEach((e) => {
            this.shadowRoot.innerHTML += `
            <product-2 product="${e.product}" brand="${e.brand} image="${e.image}" ></product-2>
            `   
        });
    }
}
customElements.define('app-container2', AppContainer2);


class AppContainer3 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    
    render(){
       
        data3.forEach((e) => {
            this.shadowRoot.innerHTML += `
            <flash-sales product="${e.product}" price="${e.price} deal="${e.deal}" image="${e.image}" ></flash-sales>
            `   
        });
    }
}


customElements.define('app-container3', AppContainer3);