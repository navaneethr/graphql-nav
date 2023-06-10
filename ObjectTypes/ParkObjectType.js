const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull} = require('graphql');
const {states} = require('../data');

const ParkObjectType = new GraphQLObjectType({
    name: 'Park',
    description: 'A Specific Park',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        state: {
            type: GraphQLString,
            resolve: (park) => states.find(state => state.id === park.stateId)?.name
        },
        stateId: {type: GraphQLNonNull(GraphQLInt)},
    })
});

module.exports = ParkObjectType;
