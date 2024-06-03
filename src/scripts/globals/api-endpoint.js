import CONFIG from "./config";

const API_ENDPOINT = {
  DAFTAR_WISATA: `${CONFIG.BASE_URL}/wisata`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
