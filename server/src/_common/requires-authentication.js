import { AuthenticationError } from 'apollo-server-lambda';

export const requiresAuthentication = resolver => (
  parent,
  args,
  context,
  info
) => {
  if (!context.token) {
    throw new AuthenticationError('Authentication required');
  }

  return resolver(parent, args, context, info);
};
