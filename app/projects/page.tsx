import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "30px" }}>Mijn Projecten</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <ProjectCard
          title="Portfolio Website"
          description="Mijn persoonlijke portfolio gebouwd met Next.js en React."
          tech={["Next.js", "React", "CSS"]}
          github="https://github.com/jouw-naam/portfolio"
          demo="https://mijn-portfolio.vercel.app"
        />

        <ProjectCard
          title="Todo App"
          description="Een simpele maar krachtige todo app met local storage."
          tech={["React", "TypeScript"]}
          github="https://github.com/jouw-naam/todo-app"
        />

        <ProjectCard
          title="API Project"
          description="Een API project dat data van een externe bron haalt en toont."
          tech={["Node.js", "Express", "MongoDB"]}
          github="https://github.com/jouw-naam/api-project"
        />
      </div>
    </section>
  );
}
