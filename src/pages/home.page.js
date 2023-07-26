export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `This is the home`;
  }
}

customElements.define("home-page", HomePage);
