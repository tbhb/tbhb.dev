import { type CollectionEntry, getCollection } from "astro:content";
import { normalizeTag } from "./tags";

export type Post = CollectionEntry<"posts">;
export type Page = CollectionEntry<"pages">;
export type Category = CollectionEntry<"categories">;

/**
 * Returns all published (non-draft) posts, sorted by publishedAt date descending.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => {
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}

/**
 * Returns published posts filtered by category.
 */
export async function getPostsByCategory(
  category: "essays" | "notes" | "tutorials",
): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}

/**
 * Returns published posts filtered by tag.
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  const normalizedSearchTag = normalizeTag(tag);
  return posts.filter((post) =>
    post.data.tags.map((t) => normalizeTag(t)).includes(normalizedSearchTag),
  );
}

/**
 * Returns a Map of all tags with their post counts.
 */
export async function getAllTags(): Promise<Map<string, number>> {
  const posts = await getPublishedPosts();
  const tagCounts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const normalized = normalizeTag(tag);
      const count = tagCounts.get(normalized) ?? 0;
      tagCounts.set(normalized, count + 1);
    }
  }

  return tagCounts;
}

/**
 * Returns all categories with their post counts.
 */
export async function getAllCategories(): Promise<
  Array<{
    category: Category;
    postCount: number;
  }>
> {
  const [categories, posts] = await Promise.all([
    getCollection("categories"),
    getPublishedPosts(),
  ]);

  return categories.map((category) => {
    const postCount = posts.filter(
      (post) => post.data.category === category.data.slug,
    ).length;

    return { category, postCount };
  });
}
