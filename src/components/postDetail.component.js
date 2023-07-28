import { LitElement, html, css } from "lit";
import { commonStyles } from "./commonStyles";

export class PostDetailComponent extends LitElement {
  constructor() {
    super();
    this.post = {};
  }
  static get properties() {
    return {
      post: { type: Object },
    };
  }
  static get styles() {
    return [commonStyles];
  }

  connectedCallback() {
    super.connectedCallback();
  }
  updatePost(e) {
    e.preventDefault();
    const title = this.shadowRoot?.querySelector("#title").value;
    const body = this.shadowRoot?.querySelector("#body").value;
    const sendPost = new CustomEvent("poc:update_post", {
      bubbles: true,
      composed: true,
      detail: { id: this.post.id, title: title, content: body },
    });
    this.dispatchEvent(sendPost);
  }
  deletePost(e) {
    e.preventDefault();
    const sendPost = new CustomEvent("poc:delete_post", {
      bubbles: true,
      composed: true,
      detail: { id: this.post.id },
    });
    this.dispatchEvent(sendPost);
  }
  cancelPost(e) {
    e.preventDefault();
    const cancelPost = new CustomEvent("poc:open_add_post", {
      bubbles: true,
      composed: true,
      detail: { cancel: true },
    });
    this.dispatchEvent(cancelPost);
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
