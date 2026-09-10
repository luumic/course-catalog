import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
        <p className="text-black/70 dark:text-white/70">{course.description}</p>
      </div>
      <dl className="flex gap-8 text-sm">
        <div>
          <dt className="text-black/60 dark:text-white/60">Credits</dt>
          <dd className="mt-1 font-medium">{course.credits}</dd>
        </div>
        <div>
          <dt className="text-black/60 dark:text-white/60">Type</dt>
          <dd className="mt-1 font-medium">
            {course.isElective ? "Elective" : "Core"}
          </dd>
        </div>
      </dl>
      <LikeButton initialLikes={course.likes} />
    </article>
  );
}
