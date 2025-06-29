const sendResponse = (res, statusCode, message, data = null) => {
    const response = {
        success: true,
        message: message,
    }

    if (data) response.data = data;
    res.status(statusCode).json(response);
}

module.exports = sendResponse;