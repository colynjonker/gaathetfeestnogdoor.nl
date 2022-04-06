import axios from "axios";

export const fetcher = (url: string): Promise<any> =>
    axios(url).then((res) => res.data);
