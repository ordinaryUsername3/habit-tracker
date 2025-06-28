const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.isOperational ? err.message : 'Something went wrong.',
        ...(process.env.NODE_ENV !== 'production' && {stack: err.stack}),
    });
}

module.exports = errorHandler;