const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const SEO_ENDPOINT = (slug: string) => `/seo-meta/getSeoMetaData?slug=${slug}`;

export { SEO_ENDPOINT };

export const GET_ALL_SERVICES_ENDPOINT = `${baseUrl}/api/v1/servicesCtegory/getAllServiceCategories`;
export const GET_ALL_PROJECTS_ENDPOINT = `${baseUrl}/api/v1/projects/getAllProjects`;
export const GET_ALL_WHY_US_ENDPOINT = `${baseUrl}/api/v1/whyUs/getAllWhyUs`;
export const GET_ALL_SUCCESS_STORIES_ENDPOINT = `${baseUrl}/api/v1/successStories/getAllSuccessStories`;
export const GET_ALL_EXPERTS_ENDPOINT = `${baseUrl}/api/v1/hireUsExpertData/getAllHireUsExpertData`;
export const GET_ALL_HIRING_TYPES_ENDPOINT = `${baseUrl}/api/v1/hireUsHiringType/getAllHireUsHiringType`;
