import { LitElement, html, css } from "lit";
import "../ui/post.ui";
import { commonStyles } from "./commonStyles";

export class PostsComponent extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return [
      commonStyles,
      css`
        :host {
          display: block;
        }
        .container {
          border: 1px solid black;
        }
        .button_container {
          text-align: end;
        }
        .postList {
          padding: 10px;
        }
        li {
          cursor: pointer;
        }
      `,
    ];
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
      <section class="container">
        <section class="button_container">
          <button @click=${this.openAddPost}>Add</button>
        </section>
        <section class="postList">
          <h2>Posts List</h2>
          <ol>
            ${this.posts?.map(
              (post) =>
                html`<li>
                  <p .id="${post?.id}" @click=${this.openPost}>
                    ${post?.title}
                  </p>
                </li>`
            )}
          </ol>
        </section>
      </section>
    `;
  }
}

customElements.define("genk-posts", PostsComponent);
