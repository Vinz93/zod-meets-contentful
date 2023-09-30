import { z } from "zod";

const StarWarsPeopleResults = z.object({
    name: z.string(),
})

export const fetchStarWarsPeople = async () => {
    const data = await fetch("https://swapi.dev/api/people/").then((res) =>
      res.json(),
    );
  
    const parsedData = StarWarsPeopleResults.parse(data);
  
    return parsedData.results;
  };
