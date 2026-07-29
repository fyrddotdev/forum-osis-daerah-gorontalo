import {defineType, defineArrayMember} from 'sanity'

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2 (Sub-Judul)', value: 'h2'},
        {title: 'H3 (Anak Sub-Judul)', value: 'h3'},
        {title: 'Kutipan / Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet List', value: 'bullet'},
        {title: 'Numbered List', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      name: 'image',
      title: 'Gambar Sisipan',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption / Keterangan Gambar',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text (Deskripsi Gambar)',
        },
      ],
    }),
  ],
})
