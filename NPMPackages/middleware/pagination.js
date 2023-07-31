
export default (model) => {
    return (req, res, next) => {
        const page = parseInt(req.params.pageNumber) || parseInt(req.body.pageNumber);

        const limit = 10;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {}

        if (startIndex > 0){
            results.prevPage = page - 1;
        }
        if (endIndex < model.length){
            results.nextPage = page + 1;
        }

        results.currentPage = page

        results.results = model.slice(startIndex, endIndex);

        res.paginatedResults = results;
        next();
    }
}