import Footer from "@/components/footer";
import Header from "@/components/header";
export const dynamic = 'force-static';

export default function howToUse() {
    return (
        <>
            <Header/>
            <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Como Utilizar</h1>
                    <p className="text-lg text-gray-600">
                        Aprenda a usar o Zapmini para criar links de WhatsApp personalizados de forma rápida e gratuita.
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Acesse a plataforma</h2>
                        <p>
                            Vá até o site do <a href="https://zapmini.com.br"><strong>Zapmini</strong></a>  e encontre o campo principal de criação de links logo na página inicial.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Digite seu número de WhatsApp</h2>
                        <p>(Precisa ser número com conta ativa no Whatsapp)</p>
                        <br />
                        <p>
                            Selecione ou pesquise o seu DDD, digite o seu número (ex: 999999999) para que o link direcione corretamente para sua conta do WhatsApp.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Escreva uma mensagem automática</h2>
                        <p>
                            Opcionalmente, escreva uma mensagem que será enviada automaticamente quando alguém clicar no link. 
                            Isso pode ajudar a iniciar a conversa com contexto.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Gere o link</h2>
                        <p>
                            Clique no botão de gerar link e pronto! Copie o link gerado e utilize onde quiser – em redes sociais, sites, bio do Instagram ou campanhas.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Compartilhe com facilidade</h2>
                        <p>
                            O link funciona em qualquer dispositivo com WhatsApp instalado. Com um clique, seus clientes iniciam a conversa com você imediatamente.
                        </p>
                    </div>
                </section>

                <Footer/>
            </main>
        </>
    );
}
