const setError = (code, message) => { // es el helper mas comun, donde va el setError
    const error = new Error();
    error.code = code;
    error.message = message;
    return error;
  };
  module.exports = setError;
  