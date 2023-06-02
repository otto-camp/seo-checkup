import { LighthouseResult } from "../../lib/Lighthouse";

export async function PageSpeed(url: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Replace with your actual API key
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&url=${url}&key=${apiKey}`;

  console.time("fetch");
  try {
    const response = await fetch(apiUrl);
    const data: LighthouseResult = await response.json();
    // Object.values(data.lighthouseResult.audits).map((d) => {
    //   if (d.score) {
    //     console.log(d);
    //   }
    // });
    console.timeEnd("fetch");
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
