import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1ikOtTmfhlpdvqqhA2EvGJgDCtrDMA1RL2Du7CNM-DU",
  },
});
