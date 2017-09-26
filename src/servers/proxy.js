

module.exports = {
    context: [
        '/movie_api/list'
    ],
    options: {
        target: "http://localhost:3000/",
        changeOrigin: true,
    }
};