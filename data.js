const states = [
    {
        id: 1,
        name: 'California'
    },
    {
        id: 2,
        name: 'Hawaii'
    },
    {
        id: 3,
        name: 'Colorado'
    },
    {
        id: 4,
        name: 'Arizona'
    }
];

const parks = [
    {
        id: 1,
        name: 'Yosemite National Park',
        stateId: 1
    },
    {
        id: 2,
        name: 'Sequoia National Park',
        stateId: 1
    },
    {
        id: 3,
        name: 'Rocky Mountain National Park',
        stateId: 3
    },
    {
        id: 4,
        name: 'Grand Canyon National Park',
        stateId: 4
    },
    {
        id: 5,
        name: 'Haleakala National Park',
        stateId: 2
    },
];

module.exports = { states, parks }