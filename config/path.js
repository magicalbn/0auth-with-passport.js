
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const path = dev?`http://localhost:${port}`:'https://passportjs-0auth.onrender.com'

module.exports = path;
 