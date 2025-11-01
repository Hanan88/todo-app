import React from "react";
import { TextSize } from "@/components/types/TextSize";
import { FontWeight } from "@/components/types/FontWeight";

import { Color } from "@/components/types/Color";

import { Radius } from "@/components/types/Radius";
import { Shadow } from "@/components/types/Shadow";
import { PaddingSize } from "@/components/types/PaddingSize";
import { paddingSizeClasses } from "@/components/classes/paddingSizeClasses";
import { backgroundColorClasses } from "@/components/classes/backgroundColorClasses";
import { textColorClasses } from "@/components/classes/textColorClasses";
import { textAlignClasses } from "@/components/classes/textAlignClasses";
import { textSizeClasses } from "@/components/classes/textSizeClasses";
import { fontWeightClasses } from "@/components/classes/fontWeightClasses";
import { verticalPaddingClasses } from "@/components/classes/verticalPaddingClasses";
import { shadowClasses } from "@/components/classes/shadowClasses";
import { Alignment } from "@/components/types/Alignment";
import { radiusClasses } from "@/components/classes/radiusClasses";

type CardProps = {
  children?: React.ReactNode;
  title?: string;
  titleSize?: TextSize;
  titleWeight?: FontWeight;
  titleColor?: Color;
  titleAlign?: Alignment;
  titleBgColor?: Color;
  titleHasBottomBorder?: boolean;
  radius?: Radius;
  shadow?: Shadow;
  hasBorder?: boolean;
  paddingSize?: PaddingSize;
  color?: Color;
  background?: Color;
};

export default function Card({
  children,
  title,
  titleSize = "md",
  titleWeight = "medium",
  titleColor = "black",
  titleAlign = "start",
  titleBgColor = "none",
  titleHasBottomBorder = false,
  radius = "lg",
  shadow = "sm",
  hasBorder = false,
  paddingSize = "none",
  color = "white",
  background = "none",
}: CardProps) {

  return (
    <div
      className={`
        ${backgroundColorClasses[background]}
        ${radiusClasses[radius]}
        ${shadowClasses[shadow]}
        ${paddingSizeClasses[paddingSize]}
        ${hasBorder ? "border border-gray-200" : ""}
      `}
    >
      {title && (
        <h2
          className={`
         w-full
         block
         px-4 py-2
         ${textSizeClasses[titleSize]}
         ${fontWeightClasses[titleWeight]}
         ${textColorClasses[titleColor]}
         ${textAlignClasses[titleAlign]}
         ${backgroundColorClasses[titleBgColor]}
         ${titleHasBottomBorder ? "border-b border-gray-300" : ""}
       `}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
