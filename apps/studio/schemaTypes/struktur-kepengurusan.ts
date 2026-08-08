import {defineType, defineField, defineArrayMember} from 'sanity'

export const strukturKepengurusan = defineType({
  name: 'strukturKepengurusan',
  title: 'Struktur Kepengurusan',
  type: 'document',
  fields: [
    defineField({
      name: 'angkatan',
      title: 'Tahun Angkatan / Periode',
      type: 'number',
      description:
        'Contoh: Jika dilantik pada tahun 2026, maka gunakan 2026 ( tanpa strip tahun 2027 )',
      validation: (Rule) => Rule.required().min(2026).max(3000),
    }),
    defineField({
      name: 'bidang',
      title: 'Bidang / Divisi',
      type: 'string',
      options: {
        list: [
          {title: 'Badan Pengurus Harian', value: 'bph'},
          {title: 'Keagamaan', value: 'keagamaan'},
          {title: 'Hubungan Masyarakat & Kominfo', value: 'hubmaskominfo'},
          {title: 'Kajian Strategis', value: 'kajianstrategis'},
          {title: 'Organisasi & Kelembagaan', value: 'organisasikelembagaan'},
          {title: 'Pengembangan Sumber Daya Manusia', value: 'psdm'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anggotaList',
      title: 'Daftar Anggota / Pengurus',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'anggota',
          title: 'Anggota',
          fields: [
            defineField({
              name: 'nama',
              title: 'Nama Lengkap',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'jabatan',
              title: 'Jabatan',
              description:
                'Contoh: Koordinator, Anggota, Ketua Umum, Wakil Ketua Umum, dan sebagainya.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'sekolah',
              title: 'Asal Sekolah',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'foto',
              title: 'Foto Profil',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'instagram',
              title: 'Username Instagram',
              type: 'string',
            }),
            defineField({
              name: 'tiktok',
              title: 'Username TikTok',
              type: 'string',
            }),
            defineField({
              name: 'website',
              title: 'Personal Website',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'nama',
              subtitle: 'jabatan',
              media: 'foto',
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      bidang: 'bidang',
      angkatan: 'angkatan',
    },
    prepare(selection) {
      const {bidang, angkatan} = selection
      const bidangLabel: Record<string, string> = {
        bph: 'Badan Pengurus Harian',
        keagamaan: 'Keagamaan',
        hubmaskominfo: 'Humas & Kominfo',
        kajianstrategis: 'Kajian Strategis',
        organisasikelembagaan: 'Organisasi & Kelembagaan',
        psdm: 'PSDM',
      }
      return {
        title: bidangLabel[bidang] || bidang || 'Bidang',
        subtitle: angkatan ? `Angkatan ${angkatan}` : '',
      }
    },
  },
})
