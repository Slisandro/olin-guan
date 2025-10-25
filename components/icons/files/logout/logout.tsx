import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type LogoutIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const LogoutIcon: React.FC<LogoutIconProps> = (props) => {

    if (props.size === "large") return <LogoutIconLarge {...props} />

    if (props.size === "medium") return <LogoutIconMedium {...props} />

    return <LogoutIconSmall {...props} />
};

const LogoutIconLarge: React.FC<LogoutIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65 2.5 12l3.35 3.35" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const LogoutIconMedium: React.FC<LogoutIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path d="M7.415 6.3c.258-3 1.8-4.225 5.175-4.225h.108c3.725 0 5.217 1.492 5.217 5.217v5.433c0 3.725-1.492 5.217-5.217 5.217h-.108c-3.35 0-4.892-1.209-5.167-4.159M12.5 10H3.019M4.875 7.208 2.083 10l2.792 2.792" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const LogoutIconSmall: React.FC<LogoutIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M6.673 5.67c.232-2.7 1.62-3.803 4.657-3.803h.098c3.352 0 4.695 1.343 4.695 4.695v4.89c0 3.353-1.343 4.695-4.695 4.695h-.098c-3.015 0-4.402-1.087-4.65-3.742M11.249 9H2.714M4.387 6.488 1.874 9l2.513 2.512" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default LogoutIcon;