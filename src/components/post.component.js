import { LitElement, html, css } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import "./postsList.component";
import "./postDetail.component";
import "./addPost.component";
import { AddPostUseCase } from "../usecases/add-post.usecase";
import { UpdatePostUseCase } from "../usecases/update-post.usecase";
import { DeletePostUseCase } from "../usecases/delete-post.usecase";

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
    this._showDetail = this._showDetail.bind(this);
    this._openAddPost = this._openAddPost.bind(this);
    this._addNewPost = this._addNewPost.bind(this);
    this._updatePost = this._updatePost.bind(this);
    this._deletePost = this._deletePost.bind(this);
  }
  async getPostsData() {
    this.posts = await AllPostsUseCase.execute();
  }

  connectedCallback() {
    super.connectedCallback();
    this.posts = [];
    this.post = null;
    this.getPostsData();
    document.addEventListener("poc:open_detail", this._showDetail);
    document.addEventListener("poc:open_add_post", this._openAddPost);
    document.addEventListener("poc:add_post", this._addNewPost);
    document.addEventListener("poc:cancel_post", this._openAddPost);
    document.addEventListener("poc:update_post", this._updatePost);
    document.addEventListener("poc:delete_post", this._deletePost);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("poc:open_detail", this._showDetail);
    document.removeEventListener("poc:open_add_post", this._openAddPost);
    document.removeEventListener("poc:add_post", this._addNewPost);
    document.removeEventListener("poc:cancel_post", this._openAddPost);
    document.removeEventListener("poc:update_post", this._updatePost);
    document.removeEventListener("poc:delete_post", this._deletePost);
  }
  _showDetail(ev) {
    this.post = ev.detail;
  }
  _openAddPost() {
    console.log("entro open add post");
    this.post = null;
  }

  async _addNewPost(ev) {
    this.posts = await AddPostUseCase.execute(this.posts, ev.detail);
    this.post = null;
  }

  async _updatePost(ev) {
    this.posts = await UpdatePostUseCase.execute(this.posts, ev.detail);
    this.post = null;
  }
  async _deletePost(ev) {
    this.posts = await DeletePostUseCase.execute(this.posts, ev.detail.id);
    this.post = null;
  }

  render() {
    return html`
      <genk-posts .posts="${this.posts}"></genk-posts>
      ${this.post === null
        ? html`<add-post></add-post>`
        : html`<post-detail .post="${this.post}"></post-detail>`}
    `;
  }
}
customElements.define("home-posts", HomePostsComponent);
