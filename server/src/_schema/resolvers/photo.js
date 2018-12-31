export const photo = {
  album: ({ albumId }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.album.getById(albumId)
};
