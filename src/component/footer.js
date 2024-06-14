class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: #fff;
                    padding: 10px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
                p {
                    margin: 0;
                    text-align : center;
                }
            </style>
            <footer>
                <p>Ikram Syauqi&copy; 2024 Notes App</p>
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
