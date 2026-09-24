import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote: "Das Curry schmeckt mir am besten. Das esse ich jeden Dienstag!",
    name: "Lena, 8 Jahre",
    school: "(Moßbach-Schule)",
    rotation: "z-10 md:-rotate-2",
  },
  {
    quote:
      "Ich mag, dass man immer auswählen kann. Manchmal nehme ich das Gemüse, manchmal das andere.",
    name: "Tim, 10 Jahre",
    school: "(Wilhelm-Löhe-Schule)",
    rotation: "z-20 md:-mt-1",
  },
  {
    quote:
      "Die Köchin kennt meinen Namen und weiß, was ich nicht essen darf. Das finde ich gut.",
    name: "Mia, 9 Jahre",
    school: "(Walter-Stein-Schule)",
    rotation: "z-20 md:rotate-2",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bio-sand-beige pt-30 md:pt-30">
      <Container className="flex flex-col items-center">
        {/* Überschrift */}
        <h2 className="mt-3 max-w-xl text-center text-h2-section leading-tight text-bio-dark md:text-5xl">
          Das sagen die
          <br />
          Kinder über uns
        </h2>

        {/* 
          -space-x-4 zieht die breiten Karten so dicht aneinander, 
          dass sie leicht überlappen. 
        */}
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-0 md:-space-x-4">
          {testimonials.map((item, index) => (
            <article
              key={index}
              // DEINE MAßE: w-105 und h-125 garantieren,
              // dass die Seiten ausgefüllt werden und keine riesigen Ränder entstehen.
              className={`flex flex-col w-full max-w-105 md:w-105 min-h-100 md:h-125 justify-between rounded-[3rem] md:rounded-[64px] border border-bio-dark bg-bio-white p-8 md:p-12 text-left transition-transform ${item.rotation}`}
            >
              <p className="text_testimonial text-left md:text-[24px] text-bio-dark">
                "{item.quote}"
              </p>

              {/* Autor & Schule: Klein und strikt rechtsbündig unten in der Ecke */}
              <footer className="mt-8 flex flex-col text-right font-inter text-[13px] md:text-[14px] text-bio-dark">
                <span className="font-medium">{item.name}</span>
                <span>{item.school}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
