import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote: "Das Curry schmeckt mir am besten. Das esse ich jeden Dienstag!",
    name: "Lena, 8 Jahre",
    school: "(Moßbach-Schule)",
    rotation: "z-10 md:-rotate-2 max-md:-rotate-2",
  },
  {
    quote:
      "Ich mag, dass man immer auswählen kann. Manchmal nehme ich das Gemüse, manchmal das andere.",
    name: "Tim, 10 Jahre",
    school: "(Wilhelm-Löhe-Schule)",
    rotation: "z-20 md:-mt-1 max-md:rotate-1",
  },
  {
    quote:
      "Die Köchin kennt meinen Namen und weiß, was ich nicht essen darf. Das finde ich gut.",
    name: "Mia, 9 Jahre",
    school: "(Walter-Stein-Schule)",
    rotation: "z-20 md:rotate-2 max-md:rotate-2",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bio-sand-beige pt-30 md:pt-25 overflow-x-hidden pb-4 md:pb-4 max-md:pt-16">
      {/* Container ist wieder zentriert (flex-col items-center) */}
      <Container className="flex flex-col items-center max-md:px-0">
        {/* HIER GEFIXED: max-md:text-left und max-md:w-full entfernt. Es greift wieder rein text-center! */}
        <h2 className="mt-3 max-lg:mt-8 max-w-xl text-center text-h2-section leading-tight text-bio-dark md:text-5xl max-lg:mb-20 max-md:mb-20 max-md:text-[40px] max-md:px-4">
          Das sagen die
          <br />
          Kinder über uns
        </h2>

        <div className="mt-20 flex w-full flex-col items-center justify-center gap-0 lg:flex-row lg:gap-0 lg:-space-x-4 max-lg:flex-row max-lg:justify-start max-lg:w-screen max-lg:relative max-lg:px-4 md:max-lg:px-8 max-lg:overflow-x-auto max-lg:overflow-y-hidden max-lg:snap-x max-lg:snap-mandatory max-lg:py-4 max-lg:-my-4 max-lg:-space-x-4 max-lg:touch-pan-x scrollbar-none [&::-webkit-scrollbar]:hidden max-lg:ml-4 max-md:ml-0 max-md:px-4 max-md:scroll-px-4">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className={`relative shrink-0 max-lg:snap-start flex flex-col w-full max-w-105 md:w-105 min-h-100 md:h-125 justify-between rounded-[3rem] md:rounded-[64px] border border-bio-dark bg-bio-white p-8 md:p-12 max-md:p-6 text-left transition-transform ${item.rotation} max-lg:w-90!`}
            >
              <p className="text_testimonial text-left md:text-[24px] text-bio-dark max-md:text-[20px]">
                "{item.quote}"
              </p>

              <footer className="mt-8 flex flex-col text-right max-md:text-left font-inter text-[13px] md:text-[14px] text-bio-dark">
                <span className="font-medium">{item.name}</span>
                <span>{item.school}</span>
              </footer>
            </article>
          ))}
          <div className="shrink-0 w-4 lg:hidden" />
        </div>
      </Container>
    </section>
  );
}
