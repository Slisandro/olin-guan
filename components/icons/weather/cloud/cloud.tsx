import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloudIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CloudIcon: React.FC<CloudIconProps> = (props) => {

    if (props.size === "large") return <CloudIconLarge {...props} />

    if (props.size === "medium") return <CloudIconMedium {...props} />

    return <CloudIconSmall {...props} />
};

const CloudIconLarge: React.FC<CloudIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7.27 13.01a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41"
        />
    </Svg>
)

const CloudIconMedium: React.FC<CloudIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M6.059 10.841a3.158 3.158 0 0 0-1.434-.341c-3.9.275-3.9 5.95 0 6.225h9.242a4.431 4.431 0 0 0 3.033-1.167c2.742-2.392 1.275-7.2-2.333-7.658-1.3-7.808-12.575-4.842-9.9 2.6"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M13.208 8.267a3.235 3.235 0 0 1 1.392-.342"
        />
    </Svg>
)

const CloudIconSmall: React.FC<CloudIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.453 9.758a2.842 2.842 0 0 0-1.29-.308c-3.51.248-3.51 5.355 0 5.603h8.317a3.988 3.988 0 0 0 2.73-1.05c2.468-2.153 1.148-6.48-2.1-6.893C11.94.083 1.793 2.753 4.2 9.45"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M11.887 7.44c.39-.195.817-.3 1.252-.307"
        />
    </Svg>
)

export default CloudIcon;