import slugify from 'slugify'

export default function createSlug(string = '') {
  return slugify(string, {
    lower: true,
    remove: /[\\.,:/"()]/g,
    replacement: '_',
  })
}
