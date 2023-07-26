import { Post } from "../src/model/post";
import { PostsRepository } from "../src/repositories/posts.repository";
import { UpdatePostUseCase } from "../src/usecases/update-post.usecase";

jest.mock("../src/repositories/posts.repository");

describe("Update post use case", () => {
  beforeEach(() => {
    PostsRepository.mockClear();
  });

  it("should executing properly", async () => {
    const post = new Post({
      id: 1,
      content: "Content updated",
      title: "Title updated",
    });

    PostsRepository.mockImplementation(() => {
      return {
        updatePost: () => {
          return {
            id: post.id,
            title: post.title,
            body: post.content,
            userId: 1,
          };
        },
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

    const postsUpdated = await UpdatePostUseCase.execute(POSTS, post);

    expect(postsUpdated.length).toBe(2);
    expect(postsUpdated[0].title).toBe(post.title);
    expect(postsUpdated[0].content).toBe(post.content);
  });
});
