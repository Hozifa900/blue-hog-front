import axios from "axios";

const BASE_URL = "https://zane-o.com/api/v1/statistics";

const addWbsiteViewStatistics = (action: any) => {
  return axios.post(BASE_URL, { action: action });
};

export { addWbsiteViewStatistics };
