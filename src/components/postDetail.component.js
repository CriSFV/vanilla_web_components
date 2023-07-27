import { LitElement, html } from "lit";
import "../ui/post.ui";

export class PostDetailComponent extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      post: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <h3>Posts Detail</h3>
      <ul>
        <post-ui .post="${this.post}"></post-ui>
      </ul>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("post-detail", PostDetailComponent);
