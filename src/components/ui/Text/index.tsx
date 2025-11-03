import React from "react";
import clsx from "clsx";

import { textColorClasses } from "@/components/classes/textColorClasses";
import { textSizeClasses } from "@/components/classes/textSizeClasses";
import { fontWeightClasses } from "@/components/classes/fontWeightClasses";
import { textAlignClasses } from "@/components/classes/textAlignClasses";

import type { Color } from "@/components/types/Color";
import type { FontWeight } from "@/components/types/FontWeight";
import type { TextSize } from "@/components/types/TextSize";
import type { Alignment } from "@/components/types/Alignment";

type TextProps = {
    children: React.ReactNode;
    as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: TextSize;
    weight?: FontWeight;
    color?: Color;
    align?: Alignment;
    italic?: boolean;
    underline?: boolean;
    className?: string;
};

export default function Text({
    children,
    as: Component = "p",
    size = "md",
    weight = "normal",
    color = "primary",
    align = "start",
    italic = false,
    underline = false,
    className = "",
}: TextProps) {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <Component
            className={clsx(
                textSizeClasses[size],
                fontWeightClasses[weight],
                textColorClasses[color],
                textAlignClasses[align],
                italic && "italic",
                underline && "underline",
                className
            )}
        >
            {children}
        </Component>
    );
}
