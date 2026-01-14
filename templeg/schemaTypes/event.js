// schemas/event.js
export default {
  name: 'event',
  title: 'Temple Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'e.g., Maha Shivratri Pooja'
    },
    {
      name: 'purpose',
      title: 'Purpose of Event',
      type: 'text', // Allows for long descriptions
      description: 'Explain why this event is being held and its significance.'
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      initialValue: 'Main Temple Hall'
    },
    {
      name: 'startTime',
      title: 'Start Date & Time',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      }
    },
    {
      name: 'endTime',
      title: 'End Date & Time',
      type: 'datetime',
      description: 'The event will automatically hide from the website after this time.'
    },
    {
      name: 'image',
      title: 'Event Poster/Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}