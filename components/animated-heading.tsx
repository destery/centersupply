import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3";

type AnimatedHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  text: string;
};

export function AnimatedHeading({
  as: Tag = "h2",
  className,
  text,
  ...props
}: AnimatedHeadingProps) {
  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={cn("animated-heading display-type", className)} {...props}>
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="animated-heading-word"
          key={`${word}-${index}`}
          style={{ "--word-index": index } as CSSProperties}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Tag>
  );
}
