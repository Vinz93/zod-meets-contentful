import { ContentFields } from "contentful-management";
import { ContentTypeProps } from "../types";


export function createContentTypeFixture(
    id: string,
    fields: ContentFields[] = [],
  ): ContentTypeProps {
    const ct =       {
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '<space-id>' } },
          id,
          type: 'ContentType',
          createdAt: '<created-at-date>',
          updatedAt: '<updated-at-date>',
          environment: { sys: { id: '<environment-id>', type: 'Link', linkType: 'Environment' } },
          publishedVersion: 1,
          firstPublishedAt: '<first-published-at-date>',
          createdBy: { sys: { type: 'Link', linkType: 'User', id: '<user-id>' } },
          updatedBy: { sys: { type: 'Link', linkType: 'User', id: '<user-id>' } },
          publishedCounter: 1,
          version: 2,
          publishedBy: { sys: { type: 'Link', linkType: 'User', id: '<user-id>' } },
        },
        description: '<description>',
        name: '<content-type-name>',
        displayField: '<display-field>',
        fields,
      }
    return ct
  }

export function createFieldFixture(id: string, props: Partial<ContentFields> = {}): ContentFields {
    return {
      id,
      name: 'Title',
      type: 'Symbol',
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
      ...props,
    }
  }
