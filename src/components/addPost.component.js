import { LitElement, html } from "lit";
import { commonStyles } from "./commonStyles";

export class AddPostComponent extends LitElement {
  constructor() {
    super();
    this.titlePost = "";
    this.bodyPost = "";
  }
  static get styles() {
    return [commonStyles];
  }
  static get properties() {
    return {
      titlePost: { type: String },
      bodyPost: { type: String },
    };
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
    this.titlePost = "";
    this.bodyPost = "";
    this.dispatchEvent(sendPost);
  }

  cancelPost(e) {
    e.preventDefault();
    this.titlePost = "";
    this.bodyPost = "";
  }

  render() {
    return html`
      <section class="container">
        <h3>Add Post</h3>
        <form>
          <label for="title"
            >Title
            <input
              type="text"
              id="title"
              name="title"
              .value="${this.titlePost}"
              @input=${(e) => (this.titlePost = e.target.value)}
          /></label>
          <label for="body"
            >Body
            <textarea
              id="body"
              name="body"
              rows="5"
              .value="${this.bodyPost}"
              @input=${(e) => (this.bodyPost = e.target.value)}
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
