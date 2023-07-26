import { PostsRepository } from "../src/repositories/posts.repository";
import { AllPostsUseCase } from "../src/usecases/all-posts.usecase";
import { POSTS } from "./fixtures/posts";

jest.mock("../src/repositories/posts.repository");

describe("All posts use case", () => {
  beforeEach(() => {
    PostsRepository.mockClear();
  });

  it("should get all posts", async () => {
    PostsRepository.mockImplementation(() => {
      return {
        getAllPosts: () => {
          return POSTS;
        },
      };
    });

    const posts = await AllPostsUseCase.execute();

    expect(posts.length).toBe(100);

    expect(posts[0].title).toBe(POSTS[0].title);
    expect(posts[0].content).toBe(POSTS[0].body);
  });
});
