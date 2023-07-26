import { LitElement, html } from "lit";

export class PostUI extends LitElement {
  static get properties() {
    return {
      post: { type: Object },
    };
  }

  render() {
    return html`<p id="title">${this.post?.title}</p>
      <div id="content">${this.post?.content}</div>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("post-ui", PostUI);
