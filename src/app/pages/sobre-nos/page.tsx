import Footer from "@/components/footer";
import Header from "@/components/header";

export default function aboutUs() {
    return (
        <>
            <Header/>
                <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
                    <p className="text-lg text-gray-600">
                    Conheça o Zapmini – a maneira mais rápida e prática de criar links diretos para o WhatsApp.
                    </p>
                </section>

                <section className="space-y-6">
                    <div>
                    <h2 className="text-2xl font-semibold mb-2">Quem somos</h2>
                    <p>
                        O <strong>Zapmini</strong> nasceu com o propósito de facilitar a vida de quem usa o WhatsApp como ferramenta de atendimento e vendas. 
                        Sabemos o quanto é importante ter um canal direto com o cliente – e criar um link personalizado deveria ser fácil, rápido e gratuito.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-2xl font-semibold mb-2">O que fazemos</h2>
                    <p>
                        Desenvolvemos uma plataforma simples e eficiente para gerar links de WhatsApp com mensagens personalizadas. 
                        Com o Zapmini, você pode criar um <strong>link para WhatsApp</strong> em poucos segundos, ideal para colocar em redes sociais, sites ou campanhas de marketing.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-2xl font-semibold mb-2">Por que fazemos</h2>
                    <p>
                        Acreditamos que a comunicação direta e rápida com o cliente pode transformar negócios. Por isso, queremos tornar acessível para qualquer pessoa – 
                        seja um pequeno empreendedor, influencer ou loja online – uma forma prática de se conectar via WhatsApp.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-2xl font-semibold mb-2">Nosso compromisso</h2>
                    <p>
                        Estamos sempre em evolução. Nosso compromisso é manter uma ferramenta intuitiva, segura e gratuita, 
                        buscando constantemente melhorias para entregar uma experiência cada vez melhor para você.
                    </p>
                    </div>
                </section>

                <Footer/>
            </main>
        </>
        
    );
}