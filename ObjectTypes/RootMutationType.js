const {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const {parks, states} = require("../data");
const StateObjectType = require("./StateObjectType");
const ParkObjectType = require("./ParkObjectType");

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addPark: {
            type: ParkObjectType,
            description: "Adds a National Park",
            args: {
                name: GraphQLNonNull(GraphQLString),
                stateId: GraphQLNonNull(GraphQLInt)
            },
            resolve: (parent, args) => {
                const park = {
                    id: parks.length + 1,
                    name: args.name,
                    stateId: args.stateId
                }
                parks.push(park)
                return park;
            }
        },
        addState: {
            type: StateObjectType,
            description: "Adds a State",
            args: {
                name: GraphQLNonNull(GraphQLString),
            },
            resolve: (parent, args) => {
                const state = {
                    id: states.length + 1,
                    name: args.name,
                }
                states.push(state)
                return state;
            }
        },
    })
})

module.exports = RootMutationType;