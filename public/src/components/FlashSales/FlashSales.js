class MyProduct extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    
    static get observedAttributes(){
        return ['product', 'brand', 'price'];
    }
}