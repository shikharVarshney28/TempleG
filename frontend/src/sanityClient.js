// import { createClient } from '@sanity/client';

// export const client = createClient({
//   projectId: 'uojz0t7y', // Get this from your Sanity dashboard
//   dataset: 'temple',
//   useCdn: true,
//   apiVersion: '2023-01-01'
// });

// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'uojz0t7y', // Get this from your Sanity dashboard
  dataset: 'temple',
  useCdn: true, // इसे true रखें ताकि Sanity का सुपर-फ़ास्ट Edge Network इस्तेमाल हो
  apiVersion: '2026-03-01',
});

// इमेज बिल्डर सेटअप करें
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}