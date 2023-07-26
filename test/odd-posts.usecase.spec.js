import { OddPostsUseCase } from "../src/usecases/odd-posts.usecase";

describe("Odd posts use case", () => {
  it("should execute properly", () => {
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
      {
        id: 3,
        title: "qui est esse",
        content:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];

    const oddPosts = OddPostsUseCase.execute(POSTS);

    expect(oddPosts[0].id).toBe(1);
    expect(oddPosts[1].id).toBe(3);
  });
});
