import { z } from "zod";

const StarWarsPeople = z.object({
    name: z.string(),
})

const StarWarsPeopleResults = z.object({
    results: z.array(StarWarsPeople),
})

export const fetchStarWarsPeople = async () => {
    const data = await fetch("https://swapi.dev/api/people/").then((res) =>
      res.json(),
    );
  
    const parsedData = StarWarsPeopleResults.parse(data);
  
    return parsedData.results;
  };

  export const fetchProducts = async () => {
    const CMAClient = createClient({
        accessToken: CMA_TOKEN,
    })

    const space = await CMAClient.getSpace(SPACE_ID);
    const environment = await space.getEnvironment("master");
    const products = await environment.getEntries({
        content_type: "product",
    });

    return products.items;
}
