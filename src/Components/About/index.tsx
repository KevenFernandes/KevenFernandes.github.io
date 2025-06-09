import { HeadingTitle } from "../HeadingTitle";
import { Skill } from "../Skill";

export function About() {
  return (
    <section id="about">
      <HeadingTitle
        title="Sobre mim"
        subTitle="Criando experiências digitais"
      />
      <div className="mb-20 mt-10">
        <p className="text-justify">
          Olá, meu nome é Keven Fernandes, e sou um Desenvolvedor Frontend com
          um entusiasmo genuíno por dar vida a ideias no universo digital.
          Construo minhas aplicações com uma fundação sólida em React, Next.js e
          TypeScript, sempre buscando otimizar a experiência do usuário e a
          performance. Embora esteja no início da minha jornada profissional,
          dediquei-me a aprender e criar projetos que demonstram minhas
          habilidades. Estou ansioso para encontrar minha primeira oportunidade
          em uma equipe onde eu possa aplicar esse conhecimento, enfrentar novos
          desafios e continuar crescendo.
        </p>
      </div>
      <Skill />
    </section>
  );
}
