const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull} = require('graphql');
const {parks} = require('../data');
const ParkObjectType = require('./ParkObjectType');

const StateObjectType = new GraphQLObjectType({
    name: 'State',
    description: 'A Specific State',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        parks: {
            type: GraphQLList(ParkObjectType),
            resolve: (state) => parks.filter(park => state.id === park.stateId)
        }
    })
});

module.exports = StateObjectType;