const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const SEO_ENDPOINT = (slug: string) =>
  `/seo-meta/getSeoMetaData?slug=${slug}`;


const SERVICES_ENDPOINT = () => { return `api/v1/service/getAllServices` };

const SERVICE_CATEGORIES_ENDPOINT = () => { return `api/v1/servicesCtegory/getAllServiceCategories` };

// const SERVICES_ENDPOINT = `${baseUrll}/service/getAllServices`;
// const SERVICE_CATEGORIES_ENDPOINT = `${baseUrl}/service-category/getAllServiceCategories`;

export { SERVICES_ENDPOINT,SERVICE_CATEGORIES_ENDPOINT,SEO_ENDPOINT };



// export { SEO_ENDPOINT }