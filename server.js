const express = require("express");
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {GraphQLSchema} = require('graphql');
const RootObjectType = require('./ObjectTypes/RootObjectType');
const RootMutationType = require('./ObjectTypes/RootMutationType');

const app = express();

const schema = new GraphQLSchema({
    query: RootObjectType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(3000, () => console.log('running'))