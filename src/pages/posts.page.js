import "./../components/posts.component";

export class PostsPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <genk-posts></genk-posts>
    `;
  }
}

customElements.define("posts-page", PostsPage);
