export const mutation = {
  createUser: (_, { user: { id, ...user } }, context) =>
    context.dataSources.jsonPlaceholder.user.create(id, user)
};
