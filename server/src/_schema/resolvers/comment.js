export const comment = {
  post: ({ postId }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.post.getById(postId)
};
