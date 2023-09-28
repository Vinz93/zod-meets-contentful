import { ContentTypeProps } from "contentful-management";
import { createContentTypeFixture, createFieldFixture } from "../utils/createFixtures";
import { cloneDeep }  from 'lodash';
import { contentTypePropsSchema } from "../schemas";

async function mockFetchContentType(): Promise<ContentTypeProps> {

    const author = createContentTypeFixture('author', [createFieldFixture('name'), createFieldFixture('age')])

    const authorV2 = {
        fields: cloneDeep(author.fields)
    } as ContentTypeProps

    return author
}


async function main() {
    const author = await mockFetchContentType();

    const parsedAuthor = contentTypePropsSchema.parse(author);


   // we can be sure that author will have a sys.id property 
    const authorId = parsedAuthor.sys.id;

    console.log(authorId);
}

main();
