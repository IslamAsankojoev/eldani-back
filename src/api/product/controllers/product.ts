/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product"
  // ,
  // ({ strapi }) => ({
  //   async find(ctx) {
  //     return super.find(ctx).then((strapiCollection) => {
  //       return strapiCollection.data.map((item) => {
  //         return {
  //           id: item.id,
  //           ...item.attributes,
  //         };
  //       });
  //     });
  //   },
  //   async findOne(ctx) {
  //     return super.findOne(ctx).then((strapiItem) => {
  //       return {
  //         id: strapiItem.data.id,
  //         ...strapiItem.data.attributes,
  //       };
  //     });
  //   },
  //   async create(ctx) {
  //     return super.create({
  //       ...ctx,
  //       request: {
  //         ...ctx.request,
  //         body: {
  //           "data": {
  //             ...ctx.request.body,
  //           },
  //         },
  //       },
  //     })
  //   },
  // })
);


