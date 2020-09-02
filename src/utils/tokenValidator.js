const jwt = require('jsonwebtoken');


  const validateToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    let result;

    if (authorizationHeader) {
      const token = req.headers.authorization.split(' ')[1];
      const options = {
        expiresIn: 'expiry',
        issuer: 'issuer'
      };

      try {
        result = jwt.verify(token, "secret", options);
        req.decoded = result;
        next();
      } catch (err) {
        next(err)
      }
    } else {

      next(Error("Token is not valid"))
    }
  }

  export default validateToken;
