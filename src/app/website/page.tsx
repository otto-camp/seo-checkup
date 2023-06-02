"use client";
import { useSearchParams } from "next/navigation";
import { PageSpeed } from "./PageSpeed";
import { LighthouseResult } from "../../lib/Lighthouse";
import { Chrome, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import RadialProgress from "@/components/ui/RadialProgress";
import MetricCard from "@/components/MetricCard";
import DescriptionWithLink from "@/components/DescriptionWithLink";
import AuditSection from "./AuditSection";

export default function Page() {
  const [lightHouseData, setLightHouseData] = useState<LighthouseResult | null>(
    null
  );

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
    <>
      {lightHouseData ? (
        <div className="min-h-screen pt-32 overflow-x-hidden space-y-4 md:space-y-10">
          <section className="flex flex-col items-stretch justify-center gap-4 md:flex-row">
            <div className="flex flex-col justify-between gap-2 px-2">
              <a href={lightHouseData.id}>
                <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl truncate">
                  {lightHouseData.id}
                </h2>
              </a>
              <div className="space-y-2 mt-12 md:mt-0">
                <time>
                  Analysis UTC timestamp:{" "}
                  {new Date(
                    lightHouseData.analysisUTCTimestamp
                  ).toLocaleDateString()}
                </time>

                <p className="flex gap-2">
                  <Chrome />
                  <span className="w-full text-ellipsis overflow-hidden">
                    {lightHouseData.lighthouseResult.userAgent}
                  </span>
                </p>
              </div>
            </div>
            <Image
              src={
                lightHouseData.lighthouseResult.fullPageScreenshot.screenshot
                  .data
              }
              alt={lightHouseData.id}
              height={
                lightHouseData.lighthouseResult.fullPageScreenshot.screenshot
                  .height
              }
              width={
                lightHouseData.lighthouseResult.fullPageScreenshot.screenshot
                  .width
              }
              className="mx-auto md:h-1/2 md:w-1/2"
            />
          </section>
          <section>
            {Object.values(lightHouseData.lighthouseResult.categories).map(
              (category) => (
                <div key={category.id}>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {category.title}
                  </h3>
                  <RadialProgress progress={category.score! * 100} />
                  <ul className="audit-list">
                    {category.auditRefs
                      .filter((auditRef) => auditRef.weight !== 0)
                      .map((auditRef) => (
                        <MetricCard key={auditRef.id} metric={auditRef} />
                      ))}
                  </ul>
                </div>
              )
            )}
          </section>
          <AuditSection audits={lightHouseData.lighthouseResult.audits} />
        </div>
      ) : (
        <div className="min-h-screen overflow-hidden pt-32">
          <Loader2 className="w-1/2 h-1/2 animate-spin mx-auto overflow-hidden" />
        </div>
      )}
    </>
  );
}
