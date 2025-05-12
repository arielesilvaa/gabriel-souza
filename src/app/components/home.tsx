// components/HeroSection.js
import Image from 'next/image';  // Usando o componente 'Image' para otimizar imagens

const HeroSection = () => {
  return (
    <section className="bg-image flex items-center justify-start relative">
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-0 left-0 p-9">
        <Image
          src="/img/logo.png"  // Caminho da logo
          alt="Logo"
          width={135}  // Tamanho ajustado da logo
          height={130}
          objectFit="contain"
        />
      </div>

      {/* Conteúdo alinhado à esquerda */}
      <div className="text-content">
        <div>
          <h1>Seja o profissional mais desejado</h1>
          <h2>O bem pago do mercado!</h2>
        </div>
        <p>
          O mercado está buscando por talentos como o seu. Venha fazer parte de uma empresa que
          reconhece e valoriza os melhores profissionais. Aqui, o seu sucesso é nossa prioridade!
        </p>
        <div className="cta">
          Quero minha vaga
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
