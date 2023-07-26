export class OddPostsUseCase {
  static execute(posts = []) {
    return posts.filter((post) => post.id % 2 !== 0);
  }
}
