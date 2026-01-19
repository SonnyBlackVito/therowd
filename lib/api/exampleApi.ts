import axiosInstance from '@/lib/axios';

export interface ExampleResponse {
  id: string;
  name: string;
}

export const exampleApi = {
  getExample: async (): Promise<ExampleResponse[]> => {
    const response = await axiosInstance.get<ExampleResponse[]>('/example');
    return response.data;
  },

  getExampleById: async (id: string): Promise<ExampleResponse> => {
    const response = await axiosInstance.get<ExampleResponse>(`/example/${id}`);
    return response.data;
  },

  // POST request
  createExample: async (data: Partial<ExampleResponse>): Promise<ExampleResponse> => {
    const response = await axiosInstance.post<ExampleResponse>('/example', data);
    return response.data;
  },

  // PUT request
  updateExample: async (id: string, data: Partial<ExampleResponse>): Promise<ExampleResponse> => {
    const response = await axiosInstance.put<ExampleResponse>(`/example/${id}`, data);
    return response.data;
  },

  // DELETE request
  deleteExample: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/example/${id}`);
  },
};

