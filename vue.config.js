// sets the development server for front-end to 4000
// ...because default setting is on 8080
module.exports = {
  devServer: {
    proxy: "http://localhost:4000",
  },
};
