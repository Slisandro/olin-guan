import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type RefreshIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const RefreshIcon: React.FC<RefreshIconProps> = (props) => {

    if (props.size === "large") return <RefreshIconLarge {...props} />

    if (props.size === "medium") return <RefreshIconMedium {...props} />

    return <RefreshIconSmall {...props} />
};

const RefreshIconLarge: React.FC<RefreshIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M22 12c0 5.52-4.48 10-10 10s-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const RefreshIconMedium: React.FC<RefreshIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M18.334 10c0 4.6-3.734 8.333-8.334 8.333S2.592 13.7 2.592 13.7m0 0h3.767m-3.767 0v4.167M1.667 10c0-4.6 3.7-8.333 8.333-8.333 5.559 0 8.334 4.633 8.334 4.633m0 0V2.133m0 4.167h-3.7"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const RefreshIconSmall: React.FC<RefreshIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.125}
                d="M16.5 9c0 4.14-3.36 7.5-7.5 7.5-4.14 0-6.668-4.17-6.668-4.17m0 0h3.39m-3.39 0v3.75M1.5 9c0-4.14 3.33-7.5 7.5-7.5 5.002 0 7.5 4.17 7.5 4.17m0 0V1.92m0 3.75h-3.33"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default RefreshIcon;