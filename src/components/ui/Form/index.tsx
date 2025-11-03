import React from "react";
import { Radius } from "@/components/types/Radius";
import { Shadow } from "@/components/types/Shadow";
import { PaddingSize } from "@/components/types/PaddingSize";
import { Color } from "@/components/types/Color";
import { Alignment } from "@/components/types/Alignment";
import { FontWeight } from "@/components/types/FontWeight";
import { TextSize } from "@/components/types/TextSize";

import { backgroundColorClasses } from "@/components/classes/backgroundColorClasses";
import { radiusClasses } from "@/components/classes/radiusClasses";
import { shadowClasses } from "@/components/classes/shadowClasses";
import { paddingSizeClasses } from "@/components/classes/paddingSizeClasses";
import { textAlignClasses } from "@/components/classes/textAlignClasses";
import { textColorClasses } from "@/components/classes/textColorClasses";
import { textSizeClasses } from "@/components/classes/textSizeClasses";
import { fontWeightClasses } from "@/components/classes/fontWeightClasses";

import Button from "@/components/ui/Button";

type FormProps = {
  children?: React.ReactNode;
  title?: string;
  titleSize?: TextSize;
  titleWeight?: FontWeight;
  titleColor?: Color;
  titleAlign?: Alignment;
  radius?: Radius;
  shadow?: Shadow;
  paddingSize?: PaddingSize;
  background?: Color;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitLabel?: string;
};

export default function Form({
  children,
  title,
  titleSize = "lg",
  titleWeight = "semibold",
  titleColor = "white",
  titleAlign = "start",
  radius = "lg",
  shadow = "sm",
  paddingSize = "md",
  background = "secondary",
  onSubmit,
  submitLabel = "Submit",
}: FormProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------

  return (
    <form
      onSubmit={onSubmit}
      className={`
    ${backgroundColorClasses[background]}
    ${radiusClasses[radius]}
    ${shadowClasses[shadow]}
    ${paddingSizeClasses[paddingSize]}
    flex flex-col gap-4
  `}
    >

      {title && (
        <h2
          className={
            `
            ${textSizeClasses[titleSize]}
            ${fontWeightClasses[titleWeight]}
            ${textColorClasses[titleColor]}
            ${textAlignClasses[titleAlign]}
          `}
        >
          {title}
        </h2>
      )}

      {children}

      <div className="flex justify-end" >
        <Button type="submit" variant="filled" color="primary" >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
