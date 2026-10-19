import type { Metadata } from "next";
import Link from "next/link";
import { members } from "@/members";

export const metadata: Metadata = {
  title: "Members · Fordham CS Club",
};

export default function Members() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl">Members</h1>
        <p className="text-muted">
          Everyone in the club gets a page. Want one? See the{" "}
          <Link href="/about" className="underline underline-offset-4 hover:text-foreground">
            About page
          </Link>
          .
        </p>
      </div>

      <ul className="divide-y divide-border">
        {members.map((member) => (
          <li key={member.slug}>
            <Link
              href={`/members/${member.slug}`}
              className="group flex items-baseline justify-between gap-4 py-4"
            >
              <div className="space-y-1">
                <span className="font-display text-xl group-hover:underline underline-offset-4">
                  {member.name}
                </span>
                {member.bio && <p className="text-sm text-muted">{member.bio}</p>}
              </div>
              {member.role && (
                <span className="shrink-0 text-sm text-muted">{member.role}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
