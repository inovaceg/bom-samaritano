import { ArrowUpRight, MessageCircle, Star } from "lucide-react";

const googleReviewUrl = "https://www.google.com/maps/place/Centro+M%C3%A9dico+Veterin%C3%A1rio+Bom+Samaritano/@-21.742663,-43.3547469,17z/data=!3m1!4b1!4m6!3m5!1s0x989d63dee1cc95a:0xc27920ee6bb49897!8m2!3d-21.742663!4d-43.352172!16s%2Fg%2F11fq_bzgcw?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D";
const whatsappUrl = `https://wa.me/553232127252?text=${encodeURIComponent("Olá! Conheci o Centro Médico Veterinário Bom Samaritano pelo site e gostaria de mais informações.")}`;

export default function Links() {
  return <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f8fd] px-5 py-12 text-slate-800">
    <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-36 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-28 h-[26rem] w-[26rem] rounded-full bg-sky-100/70 blur-3xl" />
    <section className="relative z-10 w-full max-w-md text-center">
      <img src="/logo-bom-samaritano.png" alt="Logo do Centro Médico Veterinário Bom Samaritano" className="mx-auto h-32 w-auto object-contain" />
      <h1 className="mt-5 text-2xl font-bold leading-tight text-[#123E83]">Centro Médico Veterinário<br/>Bom Samaritano</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">Cuidado veterinário 24 horas em Juiz de Fora.</p>
      <div className="mt-8 space-y-4">
        <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="group flex min-h-[76px] items-center gap-4 rounded-2xl border border-blue-100 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123E83]">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#123E83]"><Star size={23} /></span>
          <span className="flex-1"><span className="block font-bold text-[#123E83]">Avalie-nos no Google</span><span className="mt-1 block text-sm text-slate-600">Conte como foi sua experiência</span></span>
          <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-[#123E83]" />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group flex min-h-[76px] items-center gap-4 rounded-2xl bg-[#159447] px-5 py-4 text-left text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#117b3b] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123E83]">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15"><MessageCircle size={23} /></span>
          <span className="flex-1"><span className="block font-bold">Fale conosco</span><span className="mt-1 block text-sm text-white/85">WhatsApp · (32) 3212-7252</span></span>
          <ArrowUpRight size={18} className="text-white/75 transition group-hover:text-white" />
        </a>
      </div>
      <p className="mt-8 text-xs font-medium text-slate-500">Atendimento 24 horas · Juiz de Fora, MG</p>
    </section>
  </main>;
}
