import { PostsRepository } from "../repositories/posts.repository";

export class UpdatePostUseCase {
  static async execute(posts = [], postModel) {
    const repository = new PostsRepository();
    const postUpdated = await repository.updatePost(postModel);
    const postModelUpdated = {
      id: postUpdated.id,
      title: postUpdated.title,
      content: postUpdated.body,
    };

    return posts.map((post) =>
      post.id === postModelUpdated.id
        ? (post = postModelUpdated)
        : (post = post)
    );
  }
}
