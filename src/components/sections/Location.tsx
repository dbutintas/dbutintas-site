import { Clock, MapPin, Navigation } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

const mapQuery = encodeURIComponent(
  "Av. Prof. José Maria Alkimin, 334, Jardim Ester Yolanda, São Paulo - SP, 05366-000",
);
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`;
const mapLinkSrc = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function Location() {
  return (
    <section id="localizacao" className="bg-paper-100 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Localização"
            title="Atendimento com destaque para o Butantã"
            description="Estamos localizados na região do Butantã, em São Paulo, com atendimento ágil para quem está por perto e também para quem vem de outras regiões buscar qualidade e precisão."
          />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink-900">
                  Jardim Ester Yolanda — São Paulo, SP
                </p>
                <p className="text-sm text-ink-600">
                  Av. Prof. José Maria Alkimin, 334 — CEP 05366-000.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink-900">
                  Atendimento ágil
                </p>
                <p className="text-sm text-ink-600">
                  Fale pelo WhatsApp para confirmar horários e disponibilidade.
                </p>
              </div>
            </div>
          </div>

          <Button
            href={mapLinkSrc}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<Navigation size={16} />}
            className="mt-8"
          >
            Como chegar
          </Button>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="h-full min-h-[340px] overflow-hidden rounded-3xl shadow-lift">
            <iframe
              title="Mapa da localização da D&Bu Tintas"
              src={mapEmbedSrc}
              className="h-full min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
