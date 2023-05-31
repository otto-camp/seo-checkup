"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageSpeed } from "./PageSpeed";
import { LighthouseResult } from "./Types";

export const revalidate = 60;

export default function Page() {
  const [lightHouseData, setLightHouseData] = useState<
    LighthouseResult | string | null
  >(null);

  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const finalUrl = `https://${url}`;

  useEffect(() => {
    console.log("Fetching light house");

    const getPage = async () => {
      const data = await PageSpeed(finalUrl);
      setLightHouseData(data);
      console.log(data);
    };

    getPage();
  }, [finalUrl]);

  return (
    <div className="min-h-screen pt-32">
      {typeof lightHouseData === "string" && <div>Loading...</div>}
      {lightHouseData && <pre>{JSON.stringify(lightHouseData, null, 2)}</pre>}
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
