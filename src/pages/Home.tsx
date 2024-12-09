// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { useDashboardPost } from "../services/useDashboardData";

const Home: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<unknown>(null);

  const { mutate, data, error, isError } = useDashboardPost();

  useEffect(() => {
    const requestBody = {
      roleUser: "admin",
      layer: "national",
    };

    mutate(requestBody);
  }, [mutate]);

  useEffect(() => {
    if (data) {
      setDashboardData(data);
    }
  }, [data]);

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  console.log(dashboardData, "dataa");
  return (
    <section className="dark h-screen w-full">
      <div className=" dark:bg-slate-700 bg-red-100">
        <h1 className="text-black dark:text-white">
          Welcome to the Home Page!
        </h1>
      </div>
    </section>
  );
};

export default Home;
