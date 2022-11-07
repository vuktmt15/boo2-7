function ErrorHandler(err, req, res, next) {
  if (err) {
    res.redirect("back", { error: err.message });
  }
}

module.exports = ErrorHandler;
