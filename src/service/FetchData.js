export default class FetchData {

  baseUrl = 'https://api.pexels.com/v1/curated?per_page=199';

  getResource = async (url) => {

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f9170000100000157203fb497314b9590ad4313b3fe39c3'
      }});

    if (!response.ok) {
      throw new Error (`An error occurred with status ${response.status}`);
    }

    return await response.json();
  };

  getImages = async () => await this.getResource(this.baseUrl);
}