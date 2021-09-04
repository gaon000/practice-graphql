const graphql = require('graphql');

const { GraphQLObjecType, GraphQLString } = graphql;

const BookType = new GraphQLObjecType({
  name: 'Book',
  field: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})