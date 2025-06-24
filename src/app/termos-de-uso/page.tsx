import Footer from "@/components/footer";
import Header from "@/components/header";
export const dynamic = 'force-static';

export default function termsOfUse() {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
                    <p className="text-lg text-gray-600">
                        Ao acessar e utilizar o Zapmini, você concorda com os termos e condições descritos abaixo.
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Aceitação dos Termos</h2>
                        <p>
                            Ao utilizar o Zapmini, você declara estar de acordo com estes Termos de Uso e com nossa Política de Privacidade. 
                            Se você não concordar com algum dos termos, recomendamos que não utilize nossos serviços.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Uso da Plataforma</h2>
                        <p>
                            O Zapmini é destinado à criação de links personalizados para o WhatsApp de forma rápida e gratuita. 
                            Você se compromete a utilizar a plataforma apenas para fins lícitos e em conformidade com as leis aplicáveis.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo disponível no Zapmini, incluindo textos, logos, gráficos e software, é protegido por direitos autorais e outras leis de propriedade intelectual. 
                            Você não pode copiar, reproduzir ou distribuir qualquer parte do site sem nossa autorização prévia e por escrito.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Responsabilidades do Usuário</h2>
                        <p>
                            Você é responsável pelas informações que insere na plataforma e pelo uso que faz dos links gerados. 
                            Não nos responsabilizamos pelo conteúdo ou mensagens enviados através dos links criados pelos usuários.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Limitação de Responsabilidade</h2>
                        <p>
                            O Zapmini é fornecido no estado em que se encontra, sem garantias de qualquer tipo, expressas ou implícitas. 
                            Não garantimos que o serviço estará disponível de forma ininterrupta ou livre de erros.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Modificações dos Termos</h2>
                        <p>
                            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As mudanças entrarão em vigor a partir da publicação no site. 
                            É responsabilidade do usuário revisar periodicamente os termos atualizados.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Contato</h2>
                        <p>
                            Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail <strong>contato@zapmini.com.br</strong>.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
