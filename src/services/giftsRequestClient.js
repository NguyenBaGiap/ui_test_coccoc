import { simpleGetRequest } from "./apiClients";

export class GiftsRequestClient {
  fetchGifts = async (param) => {
    return await simpleGetRequest("gifts", param);
  };
}
