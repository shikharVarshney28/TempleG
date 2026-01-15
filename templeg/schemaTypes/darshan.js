export default {
  name: 'darshan',
  title: 'Daily Darshan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Darshan Title',
      type: 'string',
      initialValue: "Today's Divine Darshan",
    },
    {
      name: 'darshanImage',
      title: 'Todays Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blessing',
      title: 'Daily Blessing/Sankalpa',
      type: 'text',
      description: 'A short message or mantra for devotees today.',
    },
    {
      name: 'date',
      title: 'Display Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    },
  ],
};