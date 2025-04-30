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
          <p> <strong>Frame:</strong> Next.js</p>
          <p> <strong>Stroage:</strong> Prisma Postgres</p>
          <p> <strong>UI/Components:</strong> TailwindCSSShadcnUI</p>
          <p> <strong>CI/CD:</strong> Vercel</p>
        </div>
      </Container>
    </>
  );
}
