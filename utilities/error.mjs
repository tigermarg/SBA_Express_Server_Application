//Error Handling Middleware
export default function error(status, msg) {
    var error = new Error(msg);
    error.status = status;
    return error;
  }
  