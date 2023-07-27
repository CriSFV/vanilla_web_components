import { LitElement, html, css } from "lit";
import { commonStyles } from "./commonStyles";

export class AddPostComponent extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return [commonStyles];
  }
  static get properties() {
    return {
      title: { type: String },
      body: { type: String },
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.title = "";
    this.body = "";
  }

  addPost(e) {
    e.preventDefault();
    const title = this.shadowRoot?.querySelector("#title").value;
    const body = this.shadowRoot?.querySelector("#body").value;
    const sendPost = new CustomEvent("poc:add_post", {
      bubbles: true,
      composed: true,
      detail: { title: title, content: body },
    });
    this.dispatchEvent(sendPost);
    this.title = "";
    this.body = "";
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
        <h3>Add Post</h3>
        <form>
          <label for="title"
            >Title
            <input type="text" id="title" name="title" .value="${this.title}"
          /></label>
          <label for="body"
            >Body
            <textarea
              id="body"
              name="body"
              rows="5"
              .value="${this.body}"
            ></textarea>
          </label>
          <div class="buttons_container">
            <button @click=${this.addPost}>Add</button>
            <button @click=${this.cancelPost}>Cancel</button>
          </div>
        </form>
      </section>
    `;
  }
}

customElements.define("add-post", AddPostComponent);
