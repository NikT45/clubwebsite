import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Fordham CS Club",
};

// This page is an example of what a new page looks like.
// Copy this folder, rename it, and edit the content.
export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-muted">
        This site is built with Next.js and maintained by club members. Anyone in
        the club can clone the repo and add a page.
      </p>

      <h2 className="text-xl font-semibold">Adding a page</h2>
      <ol className="list-decimal space-y-1 pl-5 text-muted">
        <li>
          Create a folder under <code className="text-foreground">src/app</code> with the
          URL you want, for example <code className="text-foreground">src/app/projects</code>.
        </li>
        <li>
          Put a <code className="text-foreground">page.tsx</code> inside it that exports a
          React component.
        </li>
        <li>
          Add a link to it in <code className="text-foreground">src/components/nav.tsx</code>.
        </li>
        <li>Open a pull request.</li>
      </ol>
    </div>
  );
}
