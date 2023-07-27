import { LitElement, html, css } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import "./postsList.component";
import "./postDetail.component";
import "./addPost.component";

export class HomePostsComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 1fr 2fr;
      }
    `;
  }
  static get properties() {
    return {
      posts: { type: Array },
      post: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.posts = await AllPostsUseCase.execute();
    document.addEventListener("poc:open_detail", this.handleEvent);
  }

  handleEvent(ev) {
    if (ev.type === "poc:open_detail") {
      console.log("desde componente", ev.detail);
      this.post = ev.detail;
    }
  }

  render() {
    return html`
      <genk-posts .posts="${this.posts}"></genk-posts>
      <add-post></add-post>
      <post-detail .post="${this.post}"></post-detail>
    `;
  }
}

customElements.define("home-posts", HomePostsComponent);
