import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Fordham CS Club",
};

export default function About() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl">About</h1>
        <p className="text-muted">
          This site is built with Next.js and maintained by club members. Anyone in
          the club can clone the repo and add to it.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl">Adding your member page</h2>
        <ol className="list-decimal space-y-1 pl-5 text-muted">
          <li>
            Add yourself to the list in <code className="text-foreground">src/members.ts</code>.
            Pick a short slug like <code className="text-foreground">jane</code>.
          </li>
          <li>
            Copy <code className="text-foreground">src/app/members/nik</code> to{" "}
            <code className="text-foreground">src/app/members/jane</code>.
          </li>
          <li>
            Edit the <code className="text-foreground">page.tsx</code> inside. Keep the{" "}
            <code className="text-foreground">MemberHeader</code> at the top and put whatever
            you want below it.
          </li>
          <li>Open a pull request.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl">Adding any other page</h2>
        <ol className="list-decimal space-y-1 pl-5 text-muted">
          <li>
            Create a folder under <code className="text-foreground">src/app</code> named after the
            URL you want, with a <code className="text-foreground">page.tsx</code> inside.
          </li>
          <li>
            Add a link to it in <code className="text-foreground">src/components/nav.tsx</code>.
          </li>
        </ol>
      </section>
    </div>
  );
}
