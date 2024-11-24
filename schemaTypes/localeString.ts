import {defineField, defineType} from 'sanity'

const languages = [
  {id: 'no', title: 'Norsk', isDefault: true},
  {id: 'en', title: 'English'},
]

/**
 * Defines a string type with language support
 * It uses all supported languages to generate fields for each language
 */
export default defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
    },
  ],
  fields: languages.map((lang) => {
    return defineField({
      title: lang.title,
      name: lang.id,
      // Comment out the fieldset to make AI Assist work
      fieldset: 'translations',
      type: 'string',
      hidden: ({document}) => {
        return false
      },
    })
  }),
})
