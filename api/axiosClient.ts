import axios from "axios";

const instanse = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export default instanse;
