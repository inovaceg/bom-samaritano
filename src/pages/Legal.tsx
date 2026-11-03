import { Link, useLocation } from "react-router-dom";

const Legal = () => {
  const privacy = useLocation().pathname === "/privacidade";
  const title = privacy ? "Política de privacidade" : "Termos de uso";
  return <main className="min-h-screen bg-[#faf9f5] px-5 py-12 text-[#173b31]"><div className="mx-auto max-w-3xl"><Link to="/" className="text-sm font-semibold underline underline-offset-4">← Voltar ao início</Link><h1 className="mt-12 font-serif text-4xl md:text-5xl">{title}</h1>{privacy ? <div className="mt-8 space-y-5 leading-8 text-[#53665e]"><p>Este site institucional apresenta informações públicas sobre o Centro Médico Veterinário Bom Samaritano e suas instalações.</p><p>O formulário de contato encontra-se indisponível enquanto aguarda a configuração do canal oficial de recebimento. Nenhum dado enviado pelo formulário é coletado ou transmitido.</p><p>Links para serviços externos, como mapas e telefone, são operados pelos respectivos provedores.</p></div> : <div className="mt-8 space-y-5 leading-8 text-[#53665e]"><p>O conteúdo deste site tem finalidade informativa e apresenta o Centro Médico Veterinário Bom Samaritano e seus meios de contato.</p><p>O formulário está desativado e não recebe nem transmite mensagens. Para contato, utilize o telefone informado no site.</p><p>Links externos estão sujeitos às condições e políticas dos respectivos serviços.</p></div>}</div></main>;
};
export default Legal;
