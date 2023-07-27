import { LitElement, html, css } from "lit";
import { commonStyles } from "./commonStyles";

export class AddPostComponent extends LitElement {
  static get styles() {
    return [
      commonStyles,
      css`
        .container {
          min-height: 200px;
          border: 1px solid black;
          padding: 10px;
        }
        .container form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }
        label {
          display: grid;
          grid-template-columns: 1fr 4fr;
        }
      `,
    ];
  }
  static get properties() {
    return {
      title: { type: Object },
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
    this.title = this.renderRoot?.querySelector("#title").value;
    this.body = this.renderRoot?.querySelector("#body").value;
    const sendPost = new CustomEvent("poc:add_post", {
      bubbles: true,
      composed: true,
      detail: { title: this.title, content: this.body },
    });
    this.dispatchEvent(sendPost);
  }
  cancelPost(e) {
    e.preventDefault();
    this.title = "";
    this.body = "";
    console.log("cancel");
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
            <textarea id="body" name="body" .value="${this.body}"></textarea>
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
