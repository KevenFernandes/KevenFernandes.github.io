import clsx from "clsx";
import { HeadingTitle } from "../HeadingTitle";
import { ProjectCard } from "../ProjectCard";

export function Project() {
  return (
    <section id="project">
      <HeadingTitle title="Projetos" subTitle="Meus projetos pessoais" />
      <div
        className={clsx(
          " grid sm:grid-cols-2  md:grid-cols-3 gap-6 justify-center"
        )}
      >
        <ProjectCard
          title="Todo-list"
          src="/images/todo-list.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/todo-list"
        >
          <span>TypeScript</span>
          <span>React</span>
          <span>Vite</span>
        </ProjectCard>
        <ProjectCard
          title="My Blog"
          src="/images/my-blog.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/my-blog-next-react"
        >
          <span>TypeScript</span>
          <span>React</span>
          <span>Next</span>
          <span>Tailwind</span>
        </ProjectCard>
        <ProjectCard
          title="Receitas Jojo"
          src="/images/receitas-jojo.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/receitas-jojo.git"
        >
          <span>TypeScript</span>
          <span>React</span>
          <span>Next</span>
          <span>Tailwind</span>
        </ProjectCard>
        <ProjectCard
          title="Guia Marketing Digital"
          src="/images/guia-marketing.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/guia-marketing-digital.git"
        >
          <span>JavaScript</span>
          <span>Html</span>
          <span>Css</span>
        </ProjectCard>
        <ProjectCard
          title="Chronos Pomodoro"
          src="/images/chronos-pomodoro.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/project-chronos.git"
        >
          <span>Typescript</span>
          <span>React</span>
          <span>Html</span>
          <span>Css</span>
        </ProjectCard>
        <ProjectCard
          title="Portfolio"
          src="/images/portfolio.png"
          alt="imagem do projeto"
          linkBtn="https://github.com/KevenFernandes/KevenFernandes.github.io.git"
        >
          <span>React</span>
          <span>Next</span>
          <span>Tailwind</span>
        </ProjectCard>
      </div>
    </section>
  );
}
