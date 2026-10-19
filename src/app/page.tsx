import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Fordham CS Club</h1>
        <p className="text-lg text-muted">
          A community for students who like building things with computers.
          We meet weekly to work on projects, learn from each other, and have fun.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Get involved</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          <li>Come to a meeting. Everyone is welcome, no experience needed.</li>
          <li>Join the Discord to hear about events and projects.</li>
          <li>
            Add your own page to this site. See the{" "}
            <Link href="/about" className="underline underline-offset-4 hover:text-foreground">
              About page
            </Link>{" "}
            for how.
          </li>
        </ul>
      </section>
    </div>
  );
}
