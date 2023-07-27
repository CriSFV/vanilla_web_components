import { LitElement, html, css } from "lit";

export class AddPostComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: black solid 2px;
      }
      p {
        color: var(--color-poc, white);
      }
      ::slotted(p) {
        color: red;
      }
    `;
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

  render() {
    return html`
      <h1>Add Post</h1>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
        <label for="body">Body</label>
        <textarea id="body" name="body"></textarea>
        <button type="submit">Add</button>
      </form>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("add-post", AddPostComponent);
