export default {
  // ...
  "schemas-to-ts": {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      commonInterfacesFolderName: "schemas-to-ts",
      verboseLogs: false,
      alwaysAddEnumSuffix: false,
    },
  },
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  transformer: {
    enabled: true,
    config: {
      plugins: {
        ids: {
          'slugify': true,
        }
      },
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {
        postResponseTransform: (ctx) => {
          ctx.body = ctx.body.data;
        },
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        product: {
          field: 'slug',
          references: 'name',
        },
      },
    },
  },

};
