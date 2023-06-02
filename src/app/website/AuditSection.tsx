import DescriptionWithLink from "@/components/DescriptionWithLink";
import { LighthouseResult } from "@/lib/Lighthouse";

export default function AuditSection({
  audits,
}: {
  audits: LighthouseResult["lighthouseResult"]["audits"];
}) {
  return (
    <section className="space-y-2">
      {Object.values(audits).map((audit) => (
        <div key={audit.id}>
          {audit.score && (
            <>
              <p>Audit score: {audit.score * 100}/100</p>
              {/* <DescriptionWithLink text={audit.description} /> */}
            </>
          )}
        </div>
      ))}
    </section>
  );
}
