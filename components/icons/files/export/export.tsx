import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type ExportIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const ExportIcon: React.FC<ExportIconProps> = (props) => {

    if (props.size === "large") return <ExportIconLarge {...props} />

    if (props.size === "medium") return <ExportIconMedium {...props} />

    return <ExportIconSmall {...props} />
};

const ExportIconLarge: React.FC<ExportIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 15V3.62M15.35 5.85 12 2.5 8.65 5.85" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const ExportIconMedium: React.FC<ExportIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path d="M13.7 7.417c3 .258 4.225 1.8 4.225 5.175v.108c0 3.725-1.492 5.216-5.217 5.216H7.283c-3.725 0-5.217-1.491-5.217-5.216v-.108c0-3.35 1.209-4.892 4.159-5.167M10 12.5V3.017M12.79 4.875 10 2.083 7.207 4.875" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const ExportIconSmall: React.FC<ExportIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M12.33 6.675c2.7.233 3.802 1.62 3.802 4.657v.098c0 3.353-1.343 4.695-4.695 4.695H6.554c-3.352 0-4.695-1.342-4.695-4.695v-.098c0-3.014 1.088-4.402 3.743-4.65M9 11.25V2.715M11.51 4.388 8.996 1.875 6.484 4.388" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default ExportIcon;