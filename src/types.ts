export interface MetaLinkProps {
    type: string;
    linkType: string;
    id: string;
}
export interface SysLink {
    sys: MetaLinkProps;
}

export interface BasicMetaSysProps {
    type: string;
    id: string;
    version: number;
    createdBy?: SysLink;
    createdAt: string;
    updatedBy?: SysLink;
    updatedAt: string;
}

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
    // metadata?: ContentTypeMetadata;
};

export interface Item {
    type: string;
    linkType?: string;
    // validations?: ContentTypeFieldValidation[];
}


// removed the default values, because `ts-to-zod` does not support generics
//     allowedResources?: ContentTypeAllowedResources[];
//     items?: Item;
export interface ContentFields extends Item {
    id: string;
    name: string;
    required: boolean;
    localized: boolean;
    disabled?: boolean;
    omitted?: boolean;
    deleted?: boolean;
    apiName?: string;
    items?: Item;
}
