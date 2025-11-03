import React from "react";
import { Color } from "@/components/types/Color";
import { Radius } from "@/components/types/Radius";
import { Shadow } from "@/components/types/Shadow";
import { PaddingSize } from "@/components/types/PaddingSize";
import { FontWeight } from "@/components/types/FontWeight";
import { TextSize } from "@/components/types/TextSize";
import { Alignment } from "@/components/types/Alignment";

import { textColorClasses } from "@/components/classes/textColorClasses";
import { backgroundColorClasses } from "@/components/classes/backgroundColorClasses";
import { radiusClasses } from "@/components/classes/radiusClasses";
import { shadowClasses } from "@/components/classes/shadowClasses";
import { paddingSizeClasses } from "@/components/classes/paddingSizeClasses";
import { textSizeClasses } from "@/components/classes/textSizeClasses";
import { fontWeightClasses } from "@/components/classes/fontWeightClasses";
import { textAlignClasses } from "@/components/classes/textAlignClasses";

type TextareaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  color?: Color;
  background?: Color;
  radius?: Radius;
  shadow?: Shadow;
  paddingSize?: PaddingSize;
  size?: TextSize;
  weight?: FontWeight;
  align?: Alignment;
  hasBorder?: boolean;
  rows?: number;
};

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  color = "white",
  background = "secondary",
  radius = "md",
  shadow = "none",
  paddingSize = "sm",
  size = "md",
  weight = "normal",
  align = "start",
  hasBorder = true,
  rows = 3,
}: TextareaProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          className={`
            ${textColorClasses[color]}
            ${textSizeClasses[size]}
            ${fontWeightClasses[weight]}
            ${textAlignClasses[align]}
          `}
        >
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
          w-full resize-none
          ${backgroundColorClasses[background]}
          ${textColorClasses[color]}
          ${radiusClasses[radius]}
          ${shadowClasses[shadow]}
          ${paddingSizeClasses[paddingSize]}
          ${hasBorder ? "border border-gray-700" : ""}
          focus:outline-none focus:ring-2 focus:ring-accent-500
        `}
      />
    </div>
  );
}
