import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type ImportIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const ImportIcon: React.FC<ImportIconProps> = (props) => {

    if (props.size === "large") return <ImportIconLarge {...props} />

    if (props.size === "medium") return <ImportIconMedium {...props} />

    return <ImportIconSmall {...props} />
};

const ImportIconLarge: React.FC<ImportIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88" />
            <Path d="M15.35 12.65 12 16l-3.35-3.35" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const ImportIconMedium: React.FC<ImportIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path d="M13.7 7.417c3 .258 4.226 1.8 4.226 5.175v.108c0 3.725-1.492 5.217-5.217 5.217H7.284c-3.725 0-5.217-1.492-5.217-5.217v-.108c0-3.35 1.209-4.892 4.159-5.167M10 1.667V12.4" />
            <Path d="M12.79 10.542 10 13.333l-2.792-2.791" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const ImportIconSmall: React.FC<ImportIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M12.33 6.675c2.7.233 3.803 1.62 3.803 4.657v.098c0 3.353-1.343 4.695-4.695 4.695H6.555c-3.352 0-4.695-1.342-4.695-4.695v-.098c0-3.014 1.088-4.402 3.743-4.65M9 1.5v9.66" />
            <Path d="M11.511 9.488 9 12 6.486 9.488" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default ImportIcon;