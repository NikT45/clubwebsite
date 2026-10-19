import Link from "next/link";
import { members } from "@/members";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <h1 className="text-5xl leading-tight">
          Fordham University
          <br />
          Computer Science Club
        </h1>
        <p className="max-w-xl text-lg text-muted">
          A community for students who like building things with computers.
          We meet weekly to work on projects, learn from each other, and have fun.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl">What we do</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {[
            ["Projects", "Build something real with other members."],
            ["Workshops", "Learn a tool or language in an evening."],
            ["Talks", "Hear from alumni and people in industry."],
          ].map(([title, text]) => (
            <li key={title} className="rounded-lg border border-border bg-surface p-4">
              <h3 className="text-lg">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl">Members</h2>
          <Link href="/members" className="text-sm text-muted hover:text-foreground">
            See all
          </Link>
        </div>
        <ul className="flex flex-wrap gap-3">
          {members.map((member) => (
            <li key={member.slug}>
              <Link
                href={`/members/${member.slug}`}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:text-foreground"
              >
                {member.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl">Get involved</h2>
        <p className="text-muted">
          Come to a meeting. Everyone is welcome, no experience needed. If you want a
          page on this site, the{" "}
          <Link href="/about" className="underline underline-offset-4 hover:text-foreground">
            About page
          </Link>{" "}
          shows how to add one.
        </p>
      </section>
    </div>
  );
}
