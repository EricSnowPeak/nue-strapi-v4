module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '120e945b11fa3c6d07220050e4c74e86'),
  },
});
