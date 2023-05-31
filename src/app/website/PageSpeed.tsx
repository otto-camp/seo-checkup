import { LighthouseResult } from "./Types";

export async function PageSpeed(url: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Replace with your actual API key
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data: LighthouseResult = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return "loading";
  }
}
