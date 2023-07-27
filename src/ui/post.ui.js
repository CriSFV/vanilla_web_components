import { LitElement, css, html } from "lit";

export class PostUI extends LitElement {
  // static get styles() {
  //   return css`
  //     :host {
  //       border: 1px solid black;
  //     }
  //   `;
  // }

  static get properties() {
    return {
      post: { type: Object, attribute: true },
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <span>Title</span>
      <p id="title">${this.post?.title}</p>
      <span>Body</span>
      <p id="description">${this.post?.content}</p>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("post-ui", PostUI);
