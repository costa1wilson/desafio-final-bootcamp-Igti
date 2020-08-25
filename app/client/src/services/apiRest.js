import axios from "axios";
const api = "http://localhost:3001/api/transaction";
async function insert(body) {
  const res = await axios.post(`${api}/add/`, body);
  return await res.data;
}
async function get(body) {
  const res = await axios.get(`${api}/receita/`);
  return await res.data;
}

export { insert, get };
