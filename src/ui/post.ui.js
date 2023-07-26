import { LitElement, html } from "lit";

export class PostUI extends LitElement {
  static get properties() {
    return {
      post: { type: Object, attribute: true },
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<p id="${this.post?.id}">${this.post?.title}</p>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("post-ui", PostUI);
