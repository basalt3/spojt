import React from "react";
import { Media } from "@once-ui-system/core";

interface ThemedLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ThemedLogo: React.FC<ThemedLogoProps> = ({
  src,
  alt,
  width = 1.5,
  height = 1.5,
  className,
  style,
}) => {
  return (
    <>
      <Media
        src={src}
        alt={alt}
        width={width}
        height={height}
        light
        className={className}
        style={style}
      />
      <Media
        src={src}
        alt={alt}
        width={width}
        height={height}
        dark
        className={className ? `${className} invertMax` : "invertMax"}
        style={style}
      />
    </>
  );
};
