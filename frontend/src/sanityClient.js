import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'uojz0t7y', // Get this from your Sanity dashboard
  dataset: 'temple',
  useCdn: true,
  apiVersion: '2023-01-01'
});