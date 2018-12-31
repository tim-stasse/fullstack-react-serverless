export const album = {
  user: ({ userId }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.user.getById(userId),
  photos: ({ id }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.photo.list({ albumId: id })
};
