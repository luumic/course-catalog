export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">About this project</h1>
      <p className="text-black/70 dark:text-white/70">
        This catalog is the semester project for the{" "}
        <strong>Advanced Web Technologies</strong> course. It lists every course
        in the program along with its description, credit value, and how many
        students have liked it.
      </p>
      <p className="text-black/70 dark:text-white/70">
        It is built with Next.js and the App Router, using Server Components for
        data loading and a single Client Component for the like button. The
        course data currently comes from a mock module that simulates a backend;
        a real FastAPI service replaces it in a later lab.
      </p>
    </section>
  );
}
