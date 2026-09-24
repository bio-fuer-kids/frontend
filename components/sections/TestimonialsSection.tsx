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
    // overflow-x-hidden auf der Section verhindert weiterhin, dass die ganze Webseite seitlich wackelt
    <section className="bg-bio-sand-beige pt-30 md:pt-25 overflow-x-hidden pb-4 md:pb-4 ">
      <Container className="flex flex-col items-center">
        {/* Überschrift (100% Unangetastet) */}
        <h2 className="mt-3 max-lg:mt-8 max-w-xl text-center text-h2-section leading-tight text-bio-dark md:text-5xl max-lg:mb-20">
          Das sagen die
          <br />
          Kinder über uns
        </h2>

        {/* 
          DEIN WRAPPER:
          - Ich habe lediglich py-12/-my-12 auf py-4/-my-4 reduziert.
          - max-lg:touch-pan-x hinzugefügt, um das vertikale Wischen auf Handys physisch zu blockieren.
        */}
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-0 lg:flex-row lg:gap-0 lg:-space-x-4 max-lg:flex-row max-lg:justify-start max-lg:w-screen max-lg:relative max-lg:px-4 md:max-lg:px-8 max-lg:overflow-x-auto max-lg:overflow-y-hidden max-lg:snap-x max-lg:snap-mandatory max-lg:py-4 max-lg:-my-4 max-lg:-space-x-4 max-lg:touch-pan-x scrollbar-none [&::-webkit-scrollbar]:hidden max-lg:ml-4">
          {testimonials.map((item, index) => (
            <article
              key={index}
              // 100% DEIN ORIGINAL-CODE!
              className={`relative shrink-0 max-lg:snap-center flex flex-col w-full max-w-105 md:w-105 min-h-100 md:h-125 justify-between rounded-[3rem] md:rounded-[64px] border border-bio-dark bg-bio-white p-8 md:p-12 text-left transition-transform ${item.rotation} max-lg:w-90!`}
            >
              <p className="text_testimonial text-left md:text-[24px] text-bio-dark">
                "{item.quote}"
              </p>

              {/* Autor & Schule */}
              <footer className="mt-8 flex flex-col text-right font-inter text-[13px] md:text-[14px] text-bio-dark">
                <span className="font-medium">{item.name}</span>
                <span>{item.school}</span>
              </footer>
            </article>
          ))}
          {/* Unsichtbarer Spacer für Tablet: Stellt sicher, dass die allerletzte Karte beim Scrollen nicht direkt am rechten Bildschirmrand klebt */}
          <div className="shrink-0 w-4 lg:hidden" />
        </div>
      </Container>
    </section>
  );
}
