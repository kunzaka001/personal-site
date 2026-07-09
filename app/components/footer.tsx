"use client";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kunzaka001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/teetouch-noppakun-42a964304/" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-zinc-400">
      <div className="h-px w-full bg-red-600" />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <nav aria-label="Social links" className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:justify-start">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-300 transition hover:text-red-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-center text-xs text-zinc-500 md:text-right">
          © {new Date().getFullYear()} kunzaka001
        </p>
      </div>
    </footer>
  );
}