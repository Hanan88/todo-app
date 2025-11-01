import React from "react";
import { ButtonType } from "@/components/types/ButtonType";
import { Color } from "@/components/types/Color";
import { Size } from "@/components/types/Size";
import { Variant } from "@/components/types/Variant";
import clsx from "clsx";
import { sizeClasses } from "@/components/classes/sizeClasses";
import { variantClasses } from "@/components/classes/variantClasses";
import { backgroundColorClasses } from "@/components/classes/backgroundColorClasses";
import { textColorClasses } from "@/components/classes/textColorClasses";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  variant?: Variant;
  color?: Color;
  size?: Size;
  isDisabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "filled",
  color = "primary",
  size = "auto",
  isDisabled = false,
}: ButtonProps) {
  const baseStyles =
    "rounded-xl font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(baseStyles, 
        variantClasses[variant], 
        sizeClasses[size], 
        backgroundColorClasses[color], 
        textColorClasses[color],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
