import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqQuestion extends Schema.Component {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'question';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

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
      'faq.question': FaqQuestion;
      'property.size': PropertySize;
    }
  }
}
