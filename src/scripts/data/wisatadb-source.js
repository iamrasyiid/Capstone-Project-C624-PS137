import API_ENDPOINT from "../globals/api-endpoint";

class WisataDbSource {
  static async daftarWisata() {
    const response = await fetch(API_ENDPOINT.DAFTAR_WISATA);
    const responseJson = await response.json();
    return responseJson.destinations;
  }

  static async detailWisata(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(response);
    return responseJson.destination;
  }
}

export default WisataDbSource;
