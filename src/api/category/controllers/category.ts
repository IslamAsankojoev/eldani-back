/**
 * category controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::category.category', ({strapi})=>({
  async find(ctx) {
    return super.find(ctx).then((items) => {
      return items.data.map((item) => {
        return {
          id: item.id,
          ...item.attributes
        }
      });
    });
  }
}));