import { LitElement, html, css } from "lit";

export class AddPostComponent extends LitElement {
  //   static get styles() {
  //     return css`
  //       .container {
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: center;
  //         align-items: center;
  //         border: 1px solid black;
  //       }
  //     `;
  //   }
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
          <label for="title">Title</label>
          <input type="text" id="title" name="title" .value="${this.title}" />
          <label for="body">Body</label>
          <textarea id="body" name="body" .value="${this.body}"></textarea>
          <button @click=${this.addPost}>Add</button>
          <button @click=${this.cancelPost}>Cancel</button>
        </form>
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("add-post", AddPostComponent);
