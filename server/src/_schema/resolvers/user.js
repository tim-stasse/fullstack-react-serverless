export const user = {
  albums: ({ id }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.album.list({ userId: id }),
  posts: ({ id }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.post.list({ userId: id }),
  todos: ({ id }, _, context) =>
    context.dataSources.jsonPlaceholder.resources.todo.list({ userId: id })
};
