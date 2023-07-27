import { LitElement, html, css } from "lit";
import { commonStyles } from "./commonStyles";

export class PostDetailComponent extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      post: { type: Object },
    };
  }
  static get styles() {
    return [commonStyles, css``];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <section class="container">
        <h3>Posts Detail</h3>
        <form>
          <label for="title"
            >Title
            <input
              type="text"
              id="title"
              name="title"
              .value="${this.post?.title}"
          /></label>
          <label for="body"
            >Body
            <textarea
              id="body"
              name="body"
              rows="5"
              .value="${this.post?.content}"
            ></textarea>
          </label>
          <div class="buttons_container">
            <button @click=${this.cancelPost}>Cancel</button>
            <button @click=${this.updatePost}>Update</button>
            <button @click=${this.deletePost}>Delete</button>
          </div>
        </form>
      </section>
    `;
  }
}

customElements.define("post-detail", PostDetailComponent);
