import axios from "axios";

export class PostsRepository {
  async getAllPosts() {
    return await (
      await axios.get("https://jsonplaceholder.typicode.com/posts")
    ).data;
  }

  async createPost(post) {
    const postDto = {
      title: post.title,
      body: post.content,
      userId: 1,
    };
    return (
      await axios.post("https://jsonplaceholder.typicode.com/posts", postDto)
    ).data;
  }

  async deletePost(postId) {
    return await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }

  async updatePost(post) {
    const postDto = {
      id: post.id,
      title: post.title,
      body: post.content,
      userId: 1,
    };
    return await (
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        postDto
      )
    ).data;
  }
}
