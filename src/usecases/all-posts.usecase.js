import { Post } from "../model/post";
import { PostsRepository } from "../repositories/posts.repository";

export class AllPostsUseCase {
  static async execute() {
    const repository = new PostsRepository();
    const posts = await repository.getAllPosts();
    return posts.map(
      (post) =>
        new Post({
          id: post.id,
          title: post.title,
          content: post.body,
        })
    );
  }
}
