import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div style={{ padding: "40px" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
        }}
      >
        <ProjectCard
          title="Todo App"
          description="Een simpele maar strakke todo-app met dark mode."
          tech={["React"]}
          github="https://github.com/EmanuelG07/kaartenspelM7.git"
        />

        <ProjectCard
          title="Kaarten spel"
          description="Een project waarin ik een externe API gebruik om data op te halen en weer te geven."
          tech={["Node.js"]}
        />
      </div>
    </div>
  );
}
