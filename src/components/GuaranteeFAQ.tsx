import { ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function GuaranteeFAQ() {
  const faqs = [
    { q: "SOU INICIANTE, É PARA MIM?", a: "Sim! A plataforma foi desenhada justamente para facilitar a vida de quem não sabe programar. Você só copia e cola e nós cuidamos da estrutura." },
    { q: "PRECISO TER HOSPEDAGEM?", a: "Você precisará de uma estrutura com WordPress + Elementor configurados. Pode ser em qualquer hospedagem." },
    { q: "O ACESSO É VITALÍCIO?", a: "Temos diferentes opções de planos. Verifique as condições atuais do acesso na seção de ofertas acima." },
    { q: "POSSO CANCELAR QUANDO QUISER?", a: "Sim, nossos planos recorrentes não possuem fidelidade. Você pode cancelar sua assinatura facilmente." },
    { q: "COMO FUNCIONA A GARANTIA DE 7 DIAS?", a: "Dentro dos 7 primeiros dias, você pode testar a ferramenta livremente. Caso não ache que entregamos valor o suficiente, devolvemos 100% do seu dinheiro, sem ressentimentos." },
    { q: "RECEBO NOVAS SEÇÕES E CÓDIGOS?", a: "Sim, os membros ativos sempre recebem novas atualizações, páginas completas, blocos, seções e códigos semanalmente ou mensalmente conforme aviso na plataforma." },
    { q: "POSSO USAR EM PROJETOS DE CLIENTES?", a: "Com toda a certeza. Um de nossos focos é acelerar seu fluxo de trabalho para que você consiga prospectar e fechar mais clientes, enquanto nós cuidamos dos blocos complexos." },
    { q: "O SUPORTE É REALMENTE VIA WHATSAPP?", a: "Temos suporte de segunda à sexta pelo WhatsApp para resolver eventuais problemas ou dúvidas sobre nosso dashboard ou blocos." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section 
      id="faq" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-zinc-950 border-t border-zinc-900 border-dashed"
    >
       <div className="max-w-6xl mx-auto px-6">
          
          {/* Guarantee */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-32 max-w-5xl mx-auto mb-40 relative">
             <div className="flex-shrink-0 relative">
                 <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(132,204,22,0.1)_0%,transparent_70%)] rounded-full"></div>
                 <div className="w-64 h-64 relative flex items-center justify-center">
                    {/* SVG Circular Text */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                       <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                       <text className="text-[10px] font-black uppercase tracking-[0.25em] fill-zinc-500">
                          <textPath href="#circlePath" startOffset="0%">
                             GARANTIA INCONDICIONAL • 7 DIAS DE • 
                          </textPath>
                       </text>
                    </svg>
                    
                    <div className="w-40 h-40 bg-zinc-950 border border-zinc-800 rounded-full flex flex-col items-center justify-center relative z-10 text-center shadow-[0_0_50px_rgba(132,204,22,0.1)]">
                       <div className="text-white font-black text-6xl leading-none">7</div>
                       <div className="text-lime-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">DIAS</div>
                    </div>
                    
                    {/* Accent stars */}
                    <div className="absolute top-4 right-4 text-lime-500 text-xl animate-pulse">✦</div>
                    <div className="absolute bottom-8 left-4 text-zinc-600 text-sm animate-pulse delay-75">✦</div>
                 </div>
              </div>

             <div className="relative z-10 flex-1 text-center md:text-left max-w-lg">
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                   <span className="text-[10px] tracking-widest text-green-500 font-bold uppercase">SEGURANÇA E CONFIANÇA</span>
                </div>

                <h3 className="text-4xl font-black text-white uppercase mb-4 tracking-tight leading-tight">RISCO ZERO<br/><span className="text-lime-500 italic">GARANTIDO.</span></h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Teste a biblioteca sem compromisso. Se você não ficar satisfeito nos primeiros 7 dias, devolvemos seu dinheiro integralmente.
                  <br/><br/>
                  <span className="font-bold text-white text-xs uppercase tracking-wider">SEM BUROCRACIA, SEM PERGUNTAS.</span>
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-xs font-semibold text-zinc-300 justify-center md:justify-start">
                     <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" /> ACESSO TOTAL A TODOS OS CÓDIGOS E BOTÕES
                  </li>
                  <li className="flex items-center gap-3 text-xs font-semibold text-zinc-300 justify-center md:justify-start">
                     <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" /> SUPORTE PRIORITÁRIO VIA WHATSAPP INCLUSO
                  </li>
                  <li className="flex items-center gap-3 text-xs font-semibold text-zinc-300 justify-center md:justify-start">
                     <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" /> COMPRA PROTEGIDA E SEGURA VIA CARTÃO
                  </li>
                </ul>

                <button className="mt-8 bg-[#0a1a0b] border border-lime-500/30 hover:bg-lime-900/50 text-lime-300 font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-colors text-sm tracking-wider w-full md:w-auto justify-center">
                   ACESSO IMEDIATO <span className="transform -rotate-45">→</span>
                </button>
             </div>
          </div>

          {/* FAQ */}
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-zinc-700"></div>
                <span className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">BASE DE CONHECIMENTO</span>
                <div className="w-1.5 h-1.5 bg-zinc-700"></div>
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-12">
               DÚVIDAS <span className="text-zinc-500 italic font-serif">FREQUENTES.</span>
             </h2>

             <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl">
                {faqs.map((faq, i) => (
                   <div key={i} className="w-full bg-[#0a0a0a] border border-zinc-800/80 rounded-xl overflow-hidden group">
                      <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-900 transition-colors"
                      >
                         <span className={`font-bold text-xs tracking-wide uppercase transition-colors text-left ${openIndex === i ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>{faq.q}</span>
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'bg-lime-900/30 border border-lime-500/50' : 'bg-zinc-900 border border-zinc-800'}`}>
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-lime-400' : 'text-zinc-500 group-hover:text-lime-400'}`} />
                         </div>
                      </button>
                      <div className={`px-6 text-zinc-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                         {faq.a}
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </motion.section>
  );
}
