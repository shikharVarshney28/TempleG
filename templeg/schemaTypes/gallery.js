// schemas/gallery.js
export default {
  name: 'gallery',
  title: 'Temple Gallery Upload',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Album / Event Title',
      type: 'string',
      description: 'e.g., Ganesh Chaturthi 2025 or Daily Shringar',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Select Category',
      type: 'string',
      options: {
        list: [
          { title: 'Ganesh Chaturthi', value: 'Ganesh Chaturthi' },
          { title: 'Sankashti Special', value: 'Sankashti Special' },
          { title: 'Daily Abhishek', value: 'Daily Abhishek' },
          { title: 'Temple Architecture', value: 'Temple Architecture' },
          { title: 'Spiritual Events', value: 'Spiritual Events' },
          { title: 'Bhandara (Prasad)', value: 'Bhandara (Prasad)' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mediaList',
      title: 'Upload Photos & Videos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Brief description of this specific image'
            }
          ]
        },
        {
          type: 'file',
          title: 'Video File',
          name: 'videoFile',
          options: {
            accept: 'video/*'
          }
        }
      ],
      options: {
        layout: 'grid' 
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mediaList.0' // Shows the first image as the thumbnail in Sanity Studio
    }
  }
}