import { Phone } from ".";

export function groupPhoneByBrand(phones: Phone[]) {
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
