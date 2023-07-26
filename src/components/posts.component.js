import { LitElement, html } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import "./../ui/post.ui";

export class PostsComponent extends LitElement {
  static get properties() {
    return {
      posts: { type: Array },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.posts = await AllPostsUseCase.execute();
  }

  render() {
    return html`
      <h1>Posts</h1>
      <ul>
        ${this.posts?.map(
          (post) => html`<li><post-ui .post="${post}"></post-ui></li>`
        )}
      </ul>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
