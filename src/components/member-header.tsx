import Link from "next/link";
import { getMember } from "@/members";

// Drop this at the top of your member page and it renders your name,
// role, and links from the registry in src/members.ts.
export function MemberHeader({ slug }: { slug: string }) {
  const member = getMember(slug);
  if (!member) {
    return (
      <p className="text-muted">
        No entry for &quot;{slug}&quot; in src/members.ts yet.
      </p>
    );
  }

  return (
    <header className="space-y-3 border-b border-border pb-8">
      <Link href="/members" className="text-sm text-muted hover:text-foreground">
        ← All members
      </Link>
      <h1 className="text-4xl">{member.name}</h1>
      {(member.role || member.year) && (
        <p className="text-muted">{[member.role, member.year].filter(Boolean).join(" · ")}</p>
      )}
      {member.links && member.links.length > 0 && (
        <div className="flex flex-wrap gap-4 text-sm">
          {member.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
