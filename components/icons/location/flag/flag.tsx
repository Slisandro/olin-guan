import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type FlagIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const FlagIcon: React.FC<FlagIconProps> = (props) => {
    if (props.size === "large") return <FlagIconLarge {...props} />

    if (props.size === "medium") return <FlagIconMedium {...props} />

    return <FlagIconSmall {...props} />
};

const FlagIconLarge: React.FC<FlagIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const FlagIconMedium: React.FC<FlagIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path d="M4.292 1.667v16.666M4.292 3.333h9.333c2.25 0 2.75 1.25 1.167 2.834l-1 1c-.667.666-.667 1.75 0 2.333l1 1c1.583 1.583 1 2.833-1.167 2.833H4.292" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const FlagIconSmall: React.FC<FlagIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M3.863 1.5v15M3.863 3h8.4c2.025 0 2.475 1.125 1.05 2.55l-.9.9c-.6.6-.6 1.575 0 2.1l.9.9c1.425 1.425.9 2.55-1.05 2.55h-8.4" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default FlagIcon;