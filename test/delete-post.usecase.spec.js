import { PostsRepository } from "../src/repositories/posts.repository";
import { DeletePostUseCase } from "../src/usecases/delete-post.usecase";

jest.mock("../src/repositories/posts.repository");

describe("Delete use case", () => {
  beforeEach(() => {
    PostsRepository.mockClear();
  });

  it("should execute properly", async () => {
    PostsRepository.mockImplementation(() => {
      return {
        deletePost: () => {},
      };
    });

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

    const postId = 1;

    const updatePosts = await DeletePostUseCase.execute(POSTS, postId);

    expect(updatePosts.length).toBe(POSTS.length - 1);
    expect(updatePosts[0].id).toBe(2);
  });
});
