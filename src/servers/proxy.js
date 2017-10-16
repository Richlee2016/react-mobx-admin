

module.exports = {
    context: [
        '/movie_api/list'
    ],
    options: {
        target: "http://localhost:3006/",
        changeOrigin: true,
    }
};