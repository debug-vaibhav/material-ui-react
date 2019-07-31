module.exports = function (app) {
    app.use("/api/*", function (req, res, next) {
        //TODO - API token validation
        next();
    });
}