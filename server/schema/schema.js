const graphql = require('graphql');

const { GraphQLObjecType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjecType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjecType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args){
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});