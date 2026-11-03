import { Link } from "react-router-dom";

const NotFound = () => <main className="flex min-h-screen items-center justify-center bg-[#faf9f5] px-5 text-center text-[#173b31]"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#a76c32]">Erro 404</p><h1 className="mt-4 font-serif text-5xl">Página não encontrada</h1><p className="mt-4 text-[#53665e]">O endereço que você acessou não existe ou foi movido.</p><Link to="/" className="mt-8 inline-block rounded-full bg-[#173b31] px-6 py-3 font-medium text-white">Voltar ao início</Link></div></main>;
export default NotFound;
