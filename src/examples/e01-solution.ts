import { ContentTypeProps } from "contentful-management";
import { createContentTypeFixture, createFieldFixture } from "../utils/createFixtures";
import { cloneDeep }  from 'lodash';
import { contentTypePropsSchema } from "../schemas";

async function getContentType(): Promise<ContentTypeProps> {
    const author = createContentTypeFixture('author', [createFieldFixture('name'), createFieldFixture('age')])
    // mutation to the fields property
    const authorV2 = {
        fields: cloneDeep(author.fields)
    } as ContentTypeProps

    return authorV2
}


async function main() {
    const author = await getContentType();

    const parsedAuthor = contentTypePropsSchema.parse(author);


   // we can be sure that author will have a sys.id property 
    const authorId = parsedAuthor.sys.id;

    console.log(authorId);
}

main();
