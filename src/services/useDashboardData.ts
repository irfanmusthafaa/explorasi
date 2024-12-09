// src/hooks/usePostDashboard.ts
import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

// Tipe untuk body request
interface DashboardRequestBody {
  roleUser: string;
  layer: string;
}

export const useDashboardPost = (  options?: UseMutationOptions<unknown, Error, DashboardRequestBody> 
): UseMutationResult<unknown, Error, DashboardRequestBody> => {
  return useMutation<unknown, Error, DashboardRequestBody>({
    mutationFn: async (body: DashboardRequestBody) => {
      const response = await axios.post("/api/dashboard", body);
      return response.data.data; 
    },
    ...options, 
  });
};



// // src/hooks/usePostDashboard.ts
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

// // Tipe untuk body request
// interface DashboardRequestBody {
//   roleUser: string;
//   layer: string;
// }

// // Hook untuk melakukan POST request
// export const useDashboardPost = (options?: any) => {
//   return useMutation({
//     mutationFn: async (body: DashboardRequestBody) => {
//       const response = await axios.post("/api/dashboard", body);
//       return response.data.data; // Mengembalikan data dari respons API
//     },
//     ...options, // Menambahkan opsi tambahan seperti onSuccess, onError, dll
//   });
// };
