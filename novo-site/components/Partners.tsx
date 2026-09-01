import Image from "next/image";
import { partners } from "@/data/site";

export function Partners() {
  return (
    <section className="partners" id="parceiros" aria-labelledby="partners-title">
      <div className="container">
        <h2 id="partners-title" className="partners-title">Parceiros e certificações</h2>
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {partners.map((partner) => (
            <div className="partner-logo" key={partner.name} title={partner.role}>
              <Image src={partner.image} alt={partner.name} width={140} height={52} />
            </div>
          ))}
          {partners.map((partner) => (
            <div className="partner-logo" key={`${partner.name}-repetido`} aria-hidden="true">
              <Image src={partner.image} alt="" width={140} height={52} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
