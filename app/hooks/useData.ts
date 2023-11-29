// hooks/useData.ts
import { useEffect, useState } from "react";

interface Props {
  id: string;
  services: string;
  budget: number;
  pages: number;
  message: string;
  email: string;
}

export const useData = () => {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data"); // Assuming the API route is at /api/data
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          console.error("Error fetching data:", result.error);
        }
      } catch (error:any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return data;
};
