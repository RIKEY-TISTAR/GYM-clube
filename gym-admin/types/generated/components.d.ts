import type { Schema, Attribute } from '@strapi/strapi';

export interface UiBenefits extends Schema.Component {
  collectionName: 'components_ui_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.benefits': UiBenefits;
    }
  }
}
