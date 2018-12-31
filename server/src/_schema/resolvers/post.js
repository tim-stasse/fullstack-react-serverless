export const post = {
  user: ({ userId }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.user.getById(userId),
  comments: ({ id }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.comment.list({
      commentId: id
    })
};
