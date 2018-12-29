export const mutation = {
  createUser: (_, { user }, context) =>
    context.dataSources.jsonPlaceholder.user.create(user),
  updateUser: (_, { user }, context) =>
    context.dataSources.jsonPlaceholder.user.update(user.id, user),
  deleteUser: (_, { id }, context) =>
    context.dataSources.jsonPlaceholder.user.delete(id)
};
