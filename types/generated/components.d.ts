import type { Schema, Attribute } from '@strapi/strapi';

export interface ListCharacterItem extends Schema.Component {
  collectionName: 'components_list_character_items';
  info: {
    displayName: 'properties';
    description: '';
  };
  attributes: {
    width: Attribute.String;
    height: Attribute.String;
    code: Attribute.String;
    country: Attribute.String;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.character-item': ListCharacterItem;
    }
  }
}
