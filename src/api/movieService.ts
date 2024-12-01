import apiClient from "./client";
import { Movie } from "../types/movie";

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<Movie[]>("/movies");
    if (response.status === 200) {
      console.log("Response:", response.data);
      return response.data;
    } else {
      throw new Error(`Error: Unexpected status code ${response.status}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching movies:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
