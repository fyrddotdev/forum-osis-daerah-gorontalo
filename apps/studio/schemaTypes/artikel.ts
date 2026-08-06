import {defineField, defineType} from 'sanity'

export const artikelSchema = defineType({
  name: 'artikel',
  title: 'Artikel Majalah',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
      validation: (Rule) => Rule.required().error('Judul wajib diisi!'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori Artikel',
      type: 'string',
      options: {
        list: [
          {title: 'Berita Sekolah', value: 'berita'},
          {title: 'Prestasi', value: 'prestasi'},
          {title: 'Program Kerja', value: 'proker'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto Sampul Utama (Header)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption / Sumber Foto Sampul',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ringkasan',
      title: 'Ringkasan Singkat (Lead Excerpt)',
      description: 'Tampil di card preview artikel (1-2 kalimat singkat).',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'penulis',
      title: 'Nama Penulis',
      type: 'string',
      initialValue: 'Redaksi OSIS',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Isi Konten Artikel',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'penulis',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {
        ...selection,
        subtitle: author ? `Oleh: ${author}` : '',
      }
    },
  },
})
