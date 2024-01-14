import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemAttribute extends Schema.Component {
  collectionName: 'components_item_attributes';
  info: {
    displayName: 'attribute';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface ItemProperty extends Schema.Component {
  collectionName: 'components_item_properties';
  info: {
    displayName: 'Property';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<['color', 'weight', 'height', 'size']>;
    value: Attribute.String;
  };
}

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

export interface ListProperty extends Schema.Component {
  collectionName: 'components_list_properties';
  info: {
    displayName: 'Property';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.attribute': ItemAttribute;
      'item.property': ItemProperty;
      'list.character-item': ListCharacterItem;
      'list.property': ListProperty;
    }
  }
}
