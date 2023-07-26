import { Post } from "../model/post";
import { PostsRepository } from "../repositories/posts.repository";

export class AddPostUseCase {
  static async execute(posts, post) {
    const repository = new PostsRepository();
    const newPostApi = await repository.createPost(post);
    const newPostModel = new Post({
      id: newPostApi.id,
      title: newPostApi.title,
      content: newPostApi.body,
    });

    return [newPostModel, ...posts];
  }
}
