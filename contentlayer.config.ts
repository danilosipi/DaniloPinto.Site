import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    status: { type: 'string', required: true },
    coverImage: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projetos/${project.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Project],
});
