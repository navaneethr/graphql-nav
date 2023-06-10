const {GraphQLObjectType, GraphQLList} = require("graphql");
const {parks, states} = require("../data");
const StateObjectType = require("./StateObjectType");
const ParkObjectType = require("./ParkObjectType");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        parks: {
            type: GraphQLList(ParkObjectType),
            description: "List of National Parks",
            resolve: () => parks
        },
        states: {
            type: GraphQLList(StateObjectType),
            description: "List of States",
            resolve: () => states
        }
    })
})

module.exports = RootQueryType;