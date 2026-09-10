import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Course not found</h1>
      <p className="text-black/70 dark:text-white/70">
        We couldn&apos;t find a course with that id. It may have been renamed or
        removed from the catalog.
      </p>
      <Link href="/courses" className="text-sm font-medium underline">
        Back to all courses
      </Link>
    </section>
  );
}
