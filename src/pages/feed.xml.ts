import rss from "@astrojs/rss";
import Markdoc from "@markdoc/markdoc";
import type { APIContext } from "astro";
import { getPublishedPosts } from "../lib/collections";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "../lib/seo";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  const items = posts.map((post) => {
    const ast = Markdoc.parse(post.body ?? "");
    const content = Markdoc.transform(ast);
    const html = Markdoc.renderers.html(content);

    return {
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}`,
      content: html,
      categories: [post.data.category, ...post.data.tags],
    };
  });

  if (!context.site) {
    throw new Error("Site URL is required for RSS feed generation");
  }

  return rss({
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    site: context.site,
    items,
  });
}
