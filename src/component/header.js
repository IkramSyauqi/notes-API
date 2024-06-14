class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #333;
                    color: #fff;
                    padding: 10px;
                }
                h1 {
                    margin: 0;
                    text-align : center;
                }
            </style>
            <header>
                <h1>Notes App</h1>
            </header>
        `;
    }
}

customElements.define('app-header', Header);
