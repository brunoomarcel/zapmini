import Footer from "@/components/footer";
import Header from "@/components/header";
export const dynamic = 'force-static';


export default function contact() {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
                    <p className="text-lg text-gray-600">
                        Entre em contato com a equipe do Zapmini para dúvidas, sugestões ou suporte técnico.
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">E-mail de contato</h2>
                        <p>
                            Para qualquer necessidade, envie um e-mail para: <strong>contato@zapmini.com.br</strong>
                        </p>
                        <p className="mt-2 text-gray-600">
                            Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h (horário de Brasília).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Suporte técnico</h2>
                        <p>
                            Se você tiver qualquer problema relacionado ao uso do Zapmini, entre em contato e nossa equipe de suporte estará pronta para ajudar.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Parcerias e sugestões</h2>
                        <p>
                            Tem uma ideia ou proposta para o Zapmini? Envie um e-mail para nós! Estamos sempre abertos a novas oportunidades e melhorias.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
