import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Load environment variables
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2023-10-09';
const useCdn = true;
const token = process.env.REACT_APP_SANITY_TOKEN;

// Create a configuration object for Sanity
const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token, // Use the token loaded from the environment variable
};

// Create the Sanity client with the configuration
export const client = new SanityClient(sanityConfig);

// Create an image URL builder using the client
const builder = imageUrlBuilder(client);

// Define a function to generate image URLs
export const urlFor = (source) => builder.image(source);
