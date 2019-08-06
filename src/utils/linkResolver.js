exports.linkResolver = function linkResolver(doc) {
// Link Resolver is the same as in any other Prismic project
  if (doc.type === 'legal_page') {
    return '/';
  }
  return '/';
}
