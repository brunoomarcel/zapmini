import Footer from "@/components/footer";
import Header from "@/components/header";

export default function privacyPolicy() {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
                    <p className="text-lg text-gray-600">
                        A sua privacidade é importante para nós. Leia abaixo como coletamos, usamos e protegemos suas informações no Zapmini.
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Informações que coletamos</h2>
                        <p>
                            Coletamos informações fornecidas diretamente por você, como nome e e-mail, quando você utiliza nossos formulários de contato ou interage com nossos serviços.
                        </p>
                        <p className="mt-2">
                            Também podemos coletar dados automaticamente, como informações de acesso, tipo de dispositivo, navegador e endereço IP.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Como usamos suas informações</h2>
                        <p>
                            Utilizamos suas informações para:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            <li>Responder suas solicitações de suporte ou contato.</li>
                            <li>Melhorar a experiência de uso da nossa plataforma.</li>
                            <li>Enviar comunicações relevantes sobre o Zapmini, caso você tenha autorizado.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Compartilhamento de informações</h2>
                        <p>
                            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Cookies e tecnologias semelhantes</h2>
                        <p>
                            Utilizamos cookies para melhorar sua experiência de navegação, entender como nossos serviços estão sendo usados e personalizar conteúdos.
                        </p>
                        <p className="mt-2">
                            Você pode configurar seu navegador para recusar cookies, mas isso pode limitar o funcionamento de algumas partes do site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Seus direitos</h2>
                        <p>
                            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas conosco. Para exercer esses direitos, entre em contato através do e-mail <strong>contato@zapmini.com.br</strong>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Alterações nesta política</h2>
                        <p>
                            Podemos atualizar esta Política de Privacidade periodicamente. Publicaremos a versão atualizada em nosso site e, se necessário, notificaremos você sobre mudanças significativas.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Contato</h2>
                        <p>
                            Se tiver qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail <strong>contato@zapmini.com.br</strong>.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
