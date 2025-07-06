"use client";

import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}) => {
  const classes = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

type ButtonContainerProps = {
  direction?: "row" | "column";
  gap?: number;
  children: React.ReactNode;
};

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  direction = "row",
  gap = 8,
  children,
}) => {
  const containerClass = clsx(styles["button-container"], styles[direction]);
  return (
    <div className={containerClass} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  );
};
