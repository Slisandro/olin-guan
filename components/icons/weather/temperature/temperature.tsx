import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type TemperatureIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const TemperatureIcon: React.FC<TemperatureIconProps> = (props) => {
    if (props.size === "extra-large") return <TemperatureIconExtraLarge {...props} />

    if (props.size === "large") return <TemperatureIconLarge {...props} />

    if (props.size === "medium") return <TemperatureIconMedium {...props} />

    return <TemperatureIconSmall {...props} />
};

const TemperatureIconExtraLarge: React.FC<TemperatureIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0v8.5M10 9h4" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const TemperatureIconLarge: React.FC<TemperatureIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path d="M8.334 11.25a3.333 3.333 0 1 0 3.333 0V4.167a1.667 1.667 0 0 0-3.333 0v7.083M8.333 7.5h3.333" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const TemperatureIconMedium: React.FC<TemperatureIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M7.5 10.125a3 3 0 1 0 3 0V3.75a1.5 1.5 0 0 0-3 0v6.375M7.5 6.75h3" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const TemperatureIconSmall: React.FC<TemperatureIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path d="M7.5 10.125a3 3 0 1 0 3 0V3.75a1.5 1.5 0 0 0-3 0v6.375M7.5 6.75h3" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default TemperatureIcon;