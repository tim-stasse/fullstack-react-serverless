export const todo = {
  user: ({ userId }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.user.getById(userId)
};
