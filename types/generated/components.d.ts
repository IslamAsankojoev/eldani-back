import type { Schema, Attribute } from '@strapi/strapi';

export interface PropertySize extends Schema.Component {
  collectionName: 'components_property_sizes';
  info: {
    displayName: 'size';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    file: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'property.size': PropertySize;
    }
  }
}
