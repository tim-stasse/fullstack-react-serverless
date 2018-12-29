export const mutation = {
  putUser: (_, { user }, context) =>
    user.id
      ? context.dataSources.jsonPlaceholder.user.update(user.id, user)
      : context.dataSources.jsonPlaceholder.user.create(user),
  deleteUser: (_, { id }, context) =>
    context.dataSources.jsonPlaceholder.user.delete(id)
};
