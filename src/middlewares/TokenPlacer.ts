module.exports = () => {
  return async (ctx, next) => {
    const cookies = ctx.request.header.cookie || false;
    if (cookies) {
      let token = cookies
        .split(";")
        .find((c) => c.trim().startsWith("token="))
      if(token) {
        token = token.split("=")[1];
      } 
      if (token) {
        ctx.request.header.authorization = `Bearer ${token}`;
      }
    }
    await next();
  };
};