import { ReactNode } from "react";

export function SectionHeading({ children, prompt = "$" }: { children: ReactNode; prompt?: string }) {
  return (
    <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10">
      <span className="text-success">{prompt} </span>
      <span className="text-foreground">{children}</span>
      <span className="blink-cursor" />
    </h2>
  );
}
