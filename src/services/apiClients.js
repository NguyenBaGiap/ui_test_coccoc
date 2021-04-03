import request from '../utilities/Axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const simpleGetRequest = async (url, searchParam) => {
  const urlObj = new URL(`${BASE_URL}/${url}`);

  if (searchParam) {
    urlObj.search = searchParam;
  }
  const response = await request(urlObj.toString(), {
    method: 'get',
  });

  if (response.status === 200) {
    return response.data;
  }
  return null;
};
