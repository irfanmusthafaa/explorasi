import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const usePostDashboard = () => {
  return useMutation({
    mutationFn: async (body) => {
      const productsResponse = await axios.post("/api/dashboard", body);

      return productsResponse;
    },
  });
};
