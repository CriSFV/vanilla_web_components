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
    console.log(this.posts);
  }

  openPost(ev) {
    const post = this.posts.find((post) => post.id === parseInt(ev.target.id));
    const sendPost = new CustomEvent("poc:open_detail", {
      bubbles: true,
      composed: true,
      detail: post,
    });
    this.dispatchEvent(sendPost);
  }

  render() {
    return html`
      <section>
        <button @click>Add</button>
        <h2>Posts List</h2>
        <ul>
          ${this.posts?.map(
            (post) =>
              html`<li>
                <p .id="${post?.id}" @click=${this.openPost}>${post?.title}</p>
              </li>`
          )}
        </ul>
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
