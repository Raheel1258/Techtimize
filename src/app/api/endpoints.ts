const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const SEO_ENDPOINT = (slug: string) =>
  `${baseUrl}seo-meta/getSeoMetaData?slug=${slug}`;

export const apiEndpoints = {
  chatBot: "/api/v1/ask",
};

// export {
//     SEO_ENDPOINT,
// };
