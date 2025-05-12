/* eslint-disable @next/next/no-img-element */
// pages/index.js
import Head from 'next/head';
import '../app/globals.css';
import Home from '../app/components/home';  
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Minha Landing Page</title>
        <meta name="description" content="Uma descrição incrível da minha landing page!" />
      </Head>

      <main>
        
        <Home />
       <section className="bg-verde-claro py-5 flex items-center justify-center h-1/2 text-center">
        <h2 className="text-black text-2xl sm:text-2xl font-bold">
          Todo nosso conhecimento resumido em um único lugar
        </h2>
       </section>

       <section className="relative bg-cover bg-center px-8 md:px-16" style={{ backgroundImage: 'url(/img/fundo2.png)' }}>
         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
         <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between py-16">
          {/* Texto à esquerda (evento SPRINT) */}
         <div className="text-white w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold">
           O evento <span className="text-verde-claro">SPRINT</span> <br /> é ideal para:
          </h2>
          <p className="mt-4 text-lg">
          Convidamos você a explorar novas ideias, estratégias e oportunidades em nosso evento, que proporciona insights
          incríveis sobre inovação, tecnologias emergentes e o futuro da indústria.
          </p>
         </div>

           {/* Barra de rolagem verde à esquerda e texto à direita */}
          <div className="w-full md:w-1/2 pl-8">
          <div className="h-64 overflow-y-scroll p-5 rounded-lg scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent" style={{ direction: 'rtl' }}>
         <p className="text-white text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra, neque ac vehicula convallis, dui urna
          varius risus, quis scelerisque nisl nisi a quam. Nullam feugiat mauris ac eros interdum, ut fermentum arcu volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra, neque ac vehicula convallis, dui urna
          varius risus, quis scelerisque nisl nisi a quam. Nullam feugiat mauris ac eros interdum, ut fermentum arcu volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra, neque ac vehicula convallis, dui urna
          varius risus, quis scelerisque nisl nisi a quam. Nullam feugiat mauris ac eros interdum, ut fermentum arcu volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra, neque ac vehicula convallis, dui urna
          varius risus, quis scelerisque nisl nisi a quam. Nullam feugiat mauris ac eros interdum, ut fermentum arcu volutpat.
        </p>
          </div>
          </div>
         </div>
       </section>

       <section className="bg-black py-16 px-8 md:px-16">
         <div className="text-center mb-12">
         <h2 className="text-white text-2xl md:text-3xl font-bold">
           Domine <span className='text-verde-claro'> Os 3 pilares do profissional do futuro.</span>
         </h2>
         </div>
  
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {/* Card 1 - Comunicação */}
            <div className="bg-gray-600 p-6 rounded-lg text-center">
            <div className="text-verde-claro text-4xl mb-4">
              {/* Coloque o ícone correspondente aqui, como exemplo */}
              <i className="fas fa-comments"></i> {/* Exemplo de ícone */}
            </div>
            <h3 className="text-white text-3xl font-semibold mb-2">Comunicação</h3>
            <p className="text-white">
             Transforme sua maneira de se comunicar. Aumente sua capacidade de conectar com as pessoas, desenvolvendo habilidades
             essenciais para.
            </p>
            <p className="text-verde-claro">
             Transforme sua maneira.
            </p>
            </div>
    
    {/* Card 2 - Produtividade */}
        <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="text-verde-claro text-4xl mb-4">
        {/* Coloque o ícone correspondente aqui */}
        <i className="fas fa-chart-line"></i> {/* Exemplo de ícone */}
      </div>
      <h3 className="text-white text-3xl font-semibold mb-2">Produtividade</h3>
      <p className="text-white">
        Estratégias para melhorar seu desempenho, alcançando mais resultados em menos tempo, se tornando mais eficiente e focado.
      </p>
      <p className="text-verde-claro">
             Transforme sua maneira.
            </p>
        </div>

        {/* Card 3 - Liderança */}
       <div className="bg-gray-600 p-6 rounded-lg text-center">
       <div className="text-verde-claro text-4xl mb-4">
        {/* Coloque o ícone correspondente aqui */}
        <i className="fas fa-user-tie"></i> {/* Exemplo de ícone */}
       </div>
        <h3 className="text-white text-3xl font-semibold mb-2">Liderança</h3>
        <p className="text-white">
         Desenvolva sua habilidade de liderar, inspirar e motivar pessoas em direção aos objetivos do futuro.
        </p>
        <p className="text-verde-claro">
             Transforme sua maneira.
            </p>
       </div>
           
         </div>

         {/* Botão abaixo de tudo */}
         <div className="flex justify-center mt-12">
          <button className="bg-verde-claro text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
           Quero fazer parte do Sprint!
          </button>
         </div>
       </section>

       <section className="bg-black py-16 px-8 md:px-16">
        <div className="max-w-screen-lg mx-auto text-center">
       
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-8">
            Não perca essa chance, garanta hoje a <span className='text-verde-claro'>sua participação!</span>
          </h2>

            {/* Caixa de informações */}
          <div className="bg-gray-600 p-5 rounded-lg shadow-lg">
      <h3 className="text-verde-claro text-4xl font-bold mb-4">SPRINT</h3>
      <p className="text-white text-lg mb-6">
        Evento online Sprint. Interação com a comunidade no chat ao vivo. Certificado de conclusão. Conteúdos de
        aquecimento na plataforma. Bônus e surpresas exclusivas.
      </p>

      {/* Preço e parcelamento */}
      <div className="text-white text-xl mb-6">
        <p className="line-through text-gray-400">De: R$697</p>
        <p className="text-2xl font-semibold text-verde-claro">12X R$28,85</p>
        <p className="text-lg text-verde-claro">Ou R$697,00 à vista</p>
      </div>

        {/* Botão de CTA */}
        <div className="flex justify-center">
        <button className="bg-verde-claro text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Quero aproveitar a promoção!
        </button>
        </div>
          </div>
        </div>
       </section>

       <section className="relative bg-cover bg-center px-8 md:px-16 py-16" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Imagem (o retrato) */}
         <div className="w-1/3 mb-8 md:mb-0">
          <img
            src="/img/homem.jpg"
            alt="Mentor"
            className="rounded-full border-4 border-green-500 shadow-lg w-48 h-48 object-cover mx-auto md:mx-0"
           />
          </div>

         {/* Texto à direita */}
         <div className="text-white w-full md:w-2/3">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Quem vai ser o <span className="text-verde-claro">meu mentor?</span>
      </h2>
      <p className="text-lg mb-6">
        Crie seu artefato digital e aprenda com os melhores! Transmitido ao vivo, este evento com Joel Jota traz uma oportunidade única para se conectar com o mestre da jornada no desenvolvimento pessoal e negócios.
      </p>
      <button className="bg-verde-claro text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
        Garantir minha vaga!
      </button>
         </div>
        </div>
       </section> 

      </main>

      <footer className="bg-gray-900 text-white py-4 px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Email */}
        <div className="flex items-center space-x-2">
         <i className="fas fa-envelope text-verde-claro"></i> {/* Ícone de email */}
         <a href="mailto:email@example.com" className="text-sm">email@example.com</a>
        </div>

       {/* WhatsApp */}
       <div className="flex items-center space-x-2">
         <i className="fab fa-whatsapp text-verde-claro"></i> {/* Ícone do WhatsApp */}
         <a href="https://wa.me/5511999999999" className="text-sm" target="_blank" rel="noopener noreferrer">
          WhatsApp
         </a>
       </div>
    </div>
      </footer>

    </>
  );
};

export default HomePage;
