const resolvers = {
    Query: {
        // returns an array of tracks
        // matches the field name
        tracksForHome: (_parent, _args, {dataSources}, _info) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({authorId}, _args, {dataSources}, _info) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    },
};

module.exports = resolvers;