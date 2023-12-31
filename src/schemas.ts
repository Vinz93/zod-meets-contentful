// Generated by ts-to-zod
import { z } from "zod";

export const metaLinkPropsSchema = z.object({
  type: z.string(),
  linkType: z.string(),
  id: z.string(),
});

export const sysLinkSchema = z.object({
  sys: metaLinkPropsSchema,
});

export const basicMetaSysPropsSchema = z.object({
  type: z.string(),
  id: z.string(),
  version: z.number(),
  createdBy: sysLinkSchema.optional(),
  createdAt: z.string(),
  updatedBy: sysLinkSchema.optional(),
  updatedAt: z.string(),
});

export const itemSchema = z.object({
  type: z.string(),
  linkType: z.string().optional(),
});

export const contentFieldsSchema = itemSchema.extend({
  id: z.string(),
  name: z.string(),
  required: z.boolean(),
  localized: z.boolean(),
  disabled: z.boolean().optional(),
  omitted: z.boolean().optional(),
  deleted: z.boolean().optional(),
  apiName: z.string().optional(),
  items: itemSchema.optional(),
});

export const contentTypePropsSchema = z.object({
  sys: basicMetaSysPropsSchema.and(
    z.object({
      space: sysLinkSchema,
      environment: sysLinkSchema,
      firstPublishedAt: z.string().optional(),
      publishedCounter: z.number().optional(),
      publishedVersion: z.number().optional(),
    })
  ),
  name: z.string(),
  description: z.string(),
  displayField: z.string(),
  fields: z.array(contentFieldsSchema),
});
