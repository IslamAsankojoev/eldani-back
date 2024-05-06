export default [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "global::TokenPlacer",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "img-src": ["*"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      header: "*",
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true,
      expose: ["WWW-Authenticate", "Server-Authorization"],
      maxAge: 3600,
      optionsSuccessStatus: 204,
    },
  },
];
