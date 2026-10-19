import type { Metadata } from "next";
import { MemberHeader } from "@/components/member-header";

// Example member page. Copy this folder, rename it to your slug,
// add yourself to src/members.ts, and put whatever you want below the header.

export const metadata: Metadata = {
  title: "Nik Tanner · Fordham CS Club",
};

export default function Page() {
  return (
    <article className="space-y-8">
      <MemberHeader slug="nik" />
    </article>
  );
}
