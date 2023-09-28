import { BasicMetaSysProps, ContentTypeFieldValidation, ContentTypeMetadata, KeyValueMap, SysLink } from "contentful-management";

export type ContentTypeProps = {
    sys: BasicMetaSysProps & {
        space: SysLink;
        environment: SysLink;
        firstPublishedAt?: string;
        publishedCounter?: number;
        publishedVersion?: number;
    };
    name: string;
    description: string;
    /** Field used as the main display field for Entries */
    displayField: string;
    /** All the fields contained in this Content Type */
    fields: ContentFields[];
    metadata?: ContentTypeMetadata;
};

interface Item {
    type: string;
    linkType?: string;
    validations?: ContentTypeFieldValidation[];
}
interface ContentTypeAllowedResources {
    type: string;
    source: string;
    contentTypes: string[];
}
export interface ContentFields<T = KeyValueMap> extends Item {
    id: string;
    name: string;
    required: boolean;
    localized: boolean;
    disabled?: boolean;
    omitted?: boolean;
    deleted?: boolean;
    items?: Item;
    apiName?: string;
    defaultValue?: T;
    allowedResources?: ContentTypeAllowedResources[];
}
