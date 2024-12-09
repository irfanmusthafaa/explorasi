import { delay, http, HttpResponse } from "msw";
import featureCeiDaily from "./jsons/feature-cei.json";

export const handlers = [
  http.post(`api/dashboard`, async () => {
    await delay(2000);
    return HttpResponse.json(featureCeiDaily);
  }),
];
