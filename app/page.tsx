import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-bold tracking-tight">AWT Course Catalog</h1>
      <p className="text-lg text-black/70 dark:text-white/70">
        Browse the courses that make up the Advanced Web Technologies program —
        from React and Next.js on the frontend to FastAPI and PostgreSQL on the
        back.
      </p>
      <Link
        href="/courses"
        className="rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Browse courses
      </Link>
    </section>
  );
}
