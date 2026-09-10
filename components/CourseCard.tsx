import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block rounded-lg border border-black/10 p-5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-4 text-sm text-black/60 dark:text-white/60">
        <span>{credits} credits</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}
