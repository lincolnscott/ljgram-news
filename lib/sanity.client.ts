import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; //production
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; //2021-11-16

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, //if vercel, set to true
});
