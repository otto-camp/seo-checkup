import WebsiteInput from "./WebsiteInput";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 m-auto w-1/2 bg-gradient-to-b from-slate-50/10 to-slate-500/20 -z-50 "/>
      <main className="pt-24 px-4 container mx-auto min-h-screen">
        <div className="space-y-12 py-12 sm:py-20 lg:py-32">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold">
            SEO Audit & Reporting Tool
          </h1>
          <p className="text-xl md:text-2x text-center">
            Enter an URL address and get a Free Website Analysis!
          </p>
          <WebsiteInput />
        </div>
      </main>
    </>
  );
}
