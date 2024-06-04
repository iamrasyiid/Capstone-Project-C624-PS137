import API_ENDPOINT from "../globals/api-endpoint";

class WisataDbSource {
  static async daftarWisata() {
    const response = await fetch(API_ENDPOINT.DAFTAR_WISATA);
    const responseJson = await response.json();
    return responseJson.destinations;
  }

  static async trendingWisata() {
    const response = await fetch(API_ENDPOINT.DAFTAR_WISATA);
    const responseJson = await response.json();
    const destinations = responseJson.destinations;

    const trendingDestinations = destinations.filter((dest) => {
      const title = dest.title.toLowerCase();
      return ["danau toba", "raja ampat", "pulau derawan"].some(
        (trendingTitle) => title.includes(trendingTitle)
      );
    });

    return trendingDestinations;
  }

  static async berandaWisata() {
    const response = await fetch(API_ENDPOINT.DAFTAR_WISATA);
    const responseJson = await response.json();
    const destinations = responseJson.destinations;

    const berandaDestinations = destinations.filter((dest) => {
      const title = dest.title.toLowerCase();
      return [
        "pulau we",
        "bukittinggi",
        "pulau maratua",
        "pulau randayan",
        "pulau kakaban",
        "labuan bajo",
      ].some((berandaTitle) => title.includes(berandaTitle));
    });

    return berandaDestinations;
  }

  static async detailWisata(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(response);
    return responseJson.destination;
  }
}

export default WisataDbSource;
