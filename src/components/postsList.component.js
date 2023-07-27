import { LitElement, html, css } from "lit";
import "../ui/post.ui";

export class PostsComponent extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      section {
        border: 1px solid black;
      }
    `;
  }
  static get properties() {
    return {
      posts: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  openPost(ev) {
    console.log(ev.target);
    const post = this.posts.find((post) => post.id === parseInt(ev.target.id));
    const sendPost = new CustomEvent("poc:open_detail", {
      bubbles: true,
      composed: true,
      detail: post,
    });
    this.dispatchEvent(sendPost);
  }

  openAddPost() {
    const sendPost = new CustomEvent("poc:open_add_post", {
      bubbles: true,
      composed: true,
      detail: { open_add: true },
    });
    this.dispatchEvent(sendPost);
  }

  render() {
    return html`
      <section>
        <button @click=${this.openAddPost}>Add</button>
        <h2>Posts List</h2>
        <ol>
          ${this.posts?.map(
            (post) =>
              html`<li>
                <p .id="${post?.id}" @click=${this.openPost}>${post?.title}</p>
              </li>`
          )}
        </ol>
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
