/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import documentation from "@strapi/plugin-documentation/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import slug from "custom-slug/strapi-admin";
import strapiAdvancedUuid from "strapi-advanced-uuid/strapi-admin";
import comments from "strapi-plugin-comments/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,
  plugins: {
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    documentation: documentation,
    i18n: i18N,
    "users-permissions": usersPermissions,
    slug: slug,
    "strapi-advanced-uuid": strapiAdvancedUuid,
    comments: comments,
    "import-export-entries": importExportEntries,
  },
});
