import { LitElement, html } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import "../ui/post.ui";

export class PostsComponent extends LitElement {
  constructor() {
    super();
    // this.openPost = this.openPost.bind(this);
  }
  static get properties() {
    return {
      posts: { type: Array },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.posts = await AllPostsUseCase.execute();
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
      <ul>
        ${this.posts?.map(
          (post) =>
            html`<li>
              <p id="${post?.id}" @click="${this.openPost}">${post?.title}</p>
            </li>`
        )}
      </ul>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
