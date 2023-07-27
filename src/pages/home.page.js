import "../components/post.component";
export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<home-posts></home-posts>`;
  }
}

customElements.define("home-page", HomePage);
