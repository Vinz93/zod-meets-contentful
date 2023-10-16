import { createClient } from "contentful-management";
import 'dotenv/config'

export type Phone = {
    sys: {
        id: string;
    };
    fields: {
        brand: {
            'en-US': string;
        };
        model: {
            'en-US': string;
        };
        price: {
            'en-US': number;
        };
    };
}

type PhoneResults = {
    items: Phone[];
};


async function fetchPhones(): Promise<PhoneResults> {
    const CMA_TOKEN = process.env.CMA_TOKEN!;
    const SPACE_ID = process.env.SPACE_ID!;
    
    const CMAClient = createClient({
        accessToken: CMA_TOKEN,
    })

    const space = await CMAClient.getSpace(SPACE_ID);
    const environment = await space.getEnvironment("master");
    const phones = await environment.getEntries({
        content_type: "phone",
    }) as unknown as PhoneResults;

    return phones
}

 


async function main(){
    const phones = await fetchPhones();

    groupPhoneByBrand(phones.items);
}

main();



    // if(parsedResponse.success) {
    //     console.log("Phones are valid");
    //     groupPhoneByBrand(parsed);
    // } else {
    //     console.log("Phones response is invalid");
    //     const formatted = checkResult.error.format();
    //     console.dir(formatted, { depth: null });
    // }
