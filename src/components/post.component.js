import { LitElement, html, css } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import "./postsList.component";
import "./postDetail.component";
import "./addPost.component";
import { AddPostUseCase } from "../usecases/add-post.usecase";

export class HomePostsComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 10px;
      }
    `;
  }
  static get properties() {
    return {
      posts: { type: Array },
      post: { type: Object },
    };
  }
  constructor() {
    super();
    this.posts = [];
    this.post = null;
    this._showDetail = this._showDetail.bind(this);
    this._openAddPost = this._openAddPost.bind(this);
    this._addNewPost = this._addNewPost.bind(this);
  }
  async getPostsData() {
    this.posts = await AllPostsUseCase.execute();
  }

  connectedCallback() {
    super.connectedCallback();
    this.getPostsData();
    document.addEventListener("poc:open_detail", this._showDetail);
    document.addEventListener("poc:open_add_post", this._openAddPost);
    document.addEventListener("poc:add_post", this._addNewPost);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("poc:open_detail", this._showDetail);
    document.removeEventListener("poc:open_add_post", this._openAddPost);
    document.removeEventListener("poc:add_post", this._addNewPost);
  }
  _showDetail(ev) {
    this.post = ev.detail;
  }
  _openAddPost() {
    this.post = null;
  }
  _addNewPost(ev) {
    AddPostUseCase.execute(this.posts, ev.detail);
  }

  render() {
    return html`
      <genk-posts .posts="${this.posts}"></genk-posts>
      ${this.post === null
        ? html`<add-post></add-post>`
        : html`<post-detail .post="${this.post}"></post-detail>`}
    `;
  }
  //   createRenderRoot() {
  //     return this;
  //   }
}
customElements.define("home-posts", HomePostsComponent);
