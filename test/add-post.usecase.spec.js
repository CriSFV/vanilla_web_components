import { PostsRepository } from "../src/repositories/posts.repository";
import { AddPostUseCase } from "../src/usecases/add-post.usecase";

jest.mock("../src/repositories/posts.repository");

describe("Add post use case", () => {
  beforeEach(() => {
    PostsRepository.mockClear();
  });

  it("should execute properly", async () => {
    const POSTS = [
      {
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        content:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        id: 2,
        title: "qui est esse",
        content:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];

    const post = {
      title: "My new title",
      content: "My new content",
    };

    PostsRepository.mockImplementation(() => {
      return {
        createPost: () => {
          return {
            id: 101,
            title: post.title,
            body: post.content,
            userId: 1,
          };
        },
      };
    });

    const postsUpdated = await AddPostUseCase.execute(POSTS, post);

    expect(postsUpdated.length).toBe(POSTS.length + 1);
    expect(postsUpdated[0].title).toBe(post.title);
    expect(postsUpdated[0].content).toBe(post.content);
  });
});
