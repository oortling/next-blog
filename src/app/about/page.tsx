import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";

export default function Page() {
  return (
    <>
      <Container>
        <MainNav />
      </Container>
      <Container>
        <div className="prose mx-auto">
          <h1>About</h1>
          <p>Fronted Frame: Next.js</p>
          <p>ORM: Prisma</p>
          <p>UI/Compinent: TailwindCSS ShadcnUI</p>
          <p>CI/CD: Vercel</p>
        </div>
      </Container>
    </>
  );
}
