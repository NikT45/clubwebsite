// The member registry. Add yourself here, then create your page at
// src/app/members/<your-slug>/page.tsx (copy src/app/members/nik as a start).
//
// Only name and slug are required. Everything else is optional.

export type Member = {
  name: string;
  slug: string; // becomes the URL: /members/<slug>
  role?: string;
  year?: string;
  bio?: string;
  links?: { label: string; href: string }[];
};

export const members: Member[] = [
  {
    name: "Nik Tanner",
    slug: "nik",
    role: "President",
    links: [
      { label: "Website", href: "https://niktanner.com" },
      { label: "GitHub", href: "https://github.com/NikT45" },
    ],
  },
];

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug);
}
