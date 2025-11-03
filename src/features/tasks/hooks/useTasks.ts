import { API_BASE_URL } from "@/constants/API";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(API_BASE_URL);
      return res.data;
    },
  });
};
