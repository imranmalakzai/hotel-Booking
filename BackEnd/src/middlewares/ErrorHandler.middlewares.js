import ApiError from "../utils/errorHandler.js";
const errorHandlerMiddlewares = (err, req, res, next) => {
  try {
    if (err instanceof ApiError) {
      return req
        .status(err.statusCode || 500)
        .json({ ...err, message: err.message });
    }
    return req
      .status(err.statusCode || 500)
      .json({ ...err, message: err.message });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ ...error, message: error?.message });
  }
};

export default errorHandlerMiddlewares;
