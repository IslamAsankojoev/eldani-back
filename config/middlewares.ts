export default [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  {
    name: 'strapi::session',
    config: {
      key: 'eldani.session',
      rolling: true,
      renew: true,
      httpOnly: true,
      maxAge: 86400000
    },
  },
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
