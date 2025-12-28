/**
 * SEO and JSON-LD utilities for structured data generation.
 */

/** Author information constants */
const AUTHOR = {
  name: "Tony Burns",
  url: "https://tbhb.dev",
  sameAs: [
    "https://github.com/tbhb",
    "https://bsky.app/profile/tonyburns.net",
    "https://www.linkedin.com/in/tonyhburns/",
  ],
} as const;

/** Site name used in structured data */
export const SITE_NAME = "Tony Burns";

/** Default site description */
export const DEFAULT_DESCRIPTION =
  "Software engineer writing about crafting developer tools and interesting problems.";

/**
 * Generates WebSite schema for the homepage.
 * @param siteUrl - The base URL of the site
 * @returns WebSite JSON-LD object
 */
export function generateWebSiteSchema(siteUrl: string): object {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${siteUrl}#person`,
    },
  };
}

/**
 * Generates Person schema for the site author.
 * @param siteUrl - The base URL of the site
 * @returns Person JSON-LD object
 */
export function generatePersonSchema(siteUrl: string): object {
  return {
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: AUTHOR.name,
    url: AUTHOR.url,
    sameAs: AUTHOR.sameAs,
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  slug: string;
}

/**
 * Generates BlogPosting schema for blog posts.
 * @param post - Post data including title, description, dates, tags, and slug
 * @param siteUrl - The base URL of the site
 * @returns BlogPosting JSON-LD object
 */
export function generateBlogPostingSchema(
  post: BlogPostingInput,
  siteUrl: string,
): object {
  const postUrl = `${siteUrl}/writing/${post.slug}`;

  return {
    "@type": "BlogPosting",
    "@id": postUrl,
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.publishedAt.toISOString(),
    ...(post.updatedAt && { dateModified: post.updatedAt.toISOString() }),
    author: {
      "@id": `${siteUrl}#person`,
    },
    publisher: {
      "@id": `${siteUrl}#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
  };
}

interface WebPageInput {
  title: string;
  description: string;
  pathname: string;
}

/**
 * Generates WebPage schema for static pages.
 * @param page - Page data including title, description, and pathname
 * @param siteUrl - The base URL of the site
 * @returns WebPage JSON-LD object
 */
export function generateWebPageSchema(
  page: WebPageInput,
  siteUrl: string,
): object {
  const pageUrl = new URL(page.pathname, siteUrl).href;

  return {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
    author: {
      "@id": `${siteUrl}#person`,
    },
  };
}
