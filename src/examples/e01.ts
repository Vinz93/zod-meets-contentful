import { ContentTypeProps } from "contentful-management";
import { createContentTypeFixture, createFieldFixture } from "../utils/createFixtures";
import { cloneDeep }  from 'lodash';

async function mockFetchContentType(): Promise<ContentTypeProps> {

    const author = createContentTypeFixture('author', [createFieldFixture('name'), createFieldFixture('age')])

    const authorV2 = {
        fields: cloneDeep(author.fields)
    } as ContentTypeProps

    return authorV2
}


async function main() {
    const author = await mockFetchContentType();

    const authorId = author.sys.id;

    console.log(authorId);
}

main();
