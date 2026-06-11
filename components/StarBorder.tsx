import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type StarBorderProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  color?: string;
  speed?: CSSProperties["animationDuration"];
  thickness?: number;
};

const StarBorder = ({
  className = "",
  color = "#f4d35e",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) => {
  return (
    <div
      className={`star-border-container ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...style
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </div>
  );
};

export default StarBorder;
