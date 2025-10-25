import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloudNotifIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CloudNotifIcon: React.FC<CloudNotifIconProps> = (props) => {

    if (props.size === "large") return <CloudNotifIconLarge {...props} />

    if (props.size === "medium") return <CloudNotifIconMedium {...props} />

    return <CloudNotifIconSmall {...props} />
};

const CloudNotifIconLarge: React.FC<CloudNotifIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M21.9 13.96c.27 1.67-.2 3.46-1.63 4.72-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05c-2.19-6.13 3.5-9.73 7.79-8.35"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7.26 13.01c-.52-.26-1.09-.4-1.67-.41M21.97 8.5c0 1.1-.51 2.09-1.32 2.73-.59.48-1.36.77-2.18.77-1.93 0-3.5-1.57-3.5-3.5 0-.96.39-1.83 1.03-2.46v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z"
        />
    </Svg>
)

const CloudNotifIconMedium: React.FC<CloudNotifIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.25 11.633c.224 1.392-.167 2.884-1.359 3.934a4.431 4.431 0 0 1-3.033 1.166H4.616c-3.891-.283-3.9-5.95 0-6.233h.042c-1.825-5.108 2.917-8.108 6.491-6.958"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M6.05 10.842a3.234 3.234 0 0 0-1.392-.342M18.309 7.083c0 .917-.425 1.742-1.1 2.275-.492.4-1.133.642-1.817.642a2.92 2.92 0 0 1-2.916-2.917c0-.8.325-1.525.858-2.05v-.008a2.883 2.883 0 0 1 2.058-.858 2.92 2.92 0 0 1 2.917 2.916Z"
        />
    </Svg>
)

const CloudNotifIconSmall: React.FC<CloudNotifIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.425 10.47c.203 1.252-.15 2.595-1.222 3.54a3.988 3.988 0 0 1-2.73 1.05H4.155c-3.502-.255-3.51-5.355 0-5.61h.038C2.55 4.853 6.818 2.153 10.035 3.188"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.445 9.757c-.39-.195-.818-.3-1.253-.307M16.477 6.375c0 .825-.382 1.567-.99 2.047-.442.36-1.02.578-1.635.578a2.628 2.628 0 0 1-2.625-2.625c0-.72.293-1.372.773-1.845v-.008a2.595 2.595 0 0 1 1.852-.772 2.628 2.628 0 0 1 2.625 2.625Z"
        />
    </Svg>
)

export default CloudNotifIcon;