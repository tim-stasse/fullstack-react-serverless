import { album } from './album';
import { comment } from './comment';
import { mutation } from './mutation';
import { photo } from './photo';
import { post } from './post';
import { query } from './query';
import { todo } from './todo';
import { user } from './user';

export const resolvers = {
  Album: album,
  Comment: comment,
  Mutation: mutation,
  Photo: photo,
  Post: post,
  Query: query,
  Todo: todo,
  User: user
};
