export default {
  name: 'darshan',
  title: 'Daily Darshan',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Display Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'deities',
      title: 'Deity Darshan List',
      type: 'array',
      description: 'Add as many deities as you want for today',
      of: [
        {
          type: 'object',
          name: 'deityEntry',
          fields: [
            {
              name: 'deityName',
              title: 'Deity Name',
              type: 'string',
              placeholder: 'e.g., Lord Ganesha, Shiv Parvati',
            },
            {
              name: 'image',
              title: 'Darshan Photo',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'blessing',
              title: 'Specific Blessing/Mantra',
              type: 'string',
            }
          ]
        }
      ]
    }
  ],
};