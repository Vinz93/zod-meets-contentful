import { Entry, createClient } from "contentful-management"
import { z } from "zod"

const SPACE_ID = "yhmd12r8k2ai"
// will be expired soon
const CMA_TOKEN = ""


export const PhoneFieldsSchema = z.object({
    brand: z.object({
        "en-US": z.string(),
    }),
    price: z.object({
        "en-US": z.number(),
    }),
})

export const PhoneResultsSchema = z.object({
    fields:(PhoneFieldsSchema),
}).array();

export type PhoneResults = z.infer<typeof PhoneResultsSchema>;


export const fetchProducts = async () => {
    const CMAClient = createClient({
        accessToken: CMA_TOKEN,
    })

    const space = await CMAClient.getSpace(SPACE_ID);
    const environment = await space.getEnvironment("master");
    const products = await environment.getEntries({
        content_type: "phone",
    });

    return products.items;
}



function groupPhoneByBrand(phones: PhoneResults) {
    const result = phones.reduce((acc: Record<string, number>, phone) => {
        const brand = phone.fields.brand['en-US'].toLowerCase();
        if (!acc[brand]) {
            acc[brand] = 0;
        }
        acc[brand]++;
        return acc;
    }, {})
    console.dir(result, { depth: null })
}

async function main(){
    const phones = await fetchProducts();
    // console.dir(phones, { depth: null })
    const checkResult = PhoneResultsSchema.safeParse(phones);

    if(checkResult.success) {
        console.log("Phones are valid");
        const parsed = PhoneResultsSchema.parse(phones);
        groupPhoneByBrand(parsed);
    } else {
        console.log("Phones response is invalid");
        const formatted = checkResult.error.format();
        console.dir(formatted, { depth: null });
    }
}

main();


// Actual potential problem
// imagine that you are implementing some app relying on some dat
// you use a CMA token to fetch data from contentful
// and  then you realize that draft entries break your code
