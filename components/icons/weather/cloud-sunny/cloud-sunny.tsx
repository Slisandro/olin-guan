import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloudSunnyIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CloudSunnyIcon: React.FC<CloudSunnyIconProps> = (props) => {

    if (props.size === "large") return <CloudSunnyIconLarge {...props} />

    if (props.size === "medium") return <CloudSunnyIconMedium {...props} />

    return <CloudSunnyIconSmall {...props} />
};

const CloudSunnyIconLarge: React.FC<CloudSunnyIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M20.27 18.68c-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05C2.89 5.06 12.12 1.34 16 6.03v.01c.7.86 1.23 2 1.47 3.45 1.33.17 2.41.82 3.18 1.74 1.75 2.07 1.9 5.45-.38 7.45Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7.26 13.01c-.52-.26-1.09-.4-1.67-.41M15.85 9.92c.52-.26 1.09-.4 1.67-.41"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a4.897 4.897 0 0 0-3.18-1.74C17.23 8.04 16.7 6.9 16 6.04v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z"
        />
    </Svg>
)

const CloudSunnyIconMedium: React.FC<CloudSunnyIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M16.891 15.567a4.43 4.43 0 0 1-3.033 1.166H4.616c-3.891-.283-3.9-5.95 0-6.233h.042c-2.25-6.283 5.442-9.383 8.675-5.475v.008c.583.717 1.025 1.667 1.225 2.875a4.08 4.08 0 0 1 2.65 1.45c1.458 1.725 1.583 4.542-.317 6.209Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M6.05 10.842a3.234 3.234 0 0 0-1.392-.342M13.208 8.267a3.235 3.235 0 0 1 1.392-.342"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.308 7.083c0 .917-.425 1.742-1.1 2.275a4.08 4.08 0 0 0-2.65-1.45c-.2-1.208-.642-2.158-1.225-2.875v-.008a2.883 2.883 0 0 1 2.058-.858 2.92 2.92 0 0 1 2.917 2.916Z"
        />
    </Svg>
)

const CloudSunnyIconSmall: React.FC<CloudSunnyIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M15.203 14.01a3.988 3.988 0 0 1-2.73 1.05H4.155c-3.502-.255-3.51-5.355 0-5.61h.038C2.168 3.795 9.09 1.005 12 4.522v.008c.525.645.923 1.5 1.103 2.587a3.673 3.673 0 0 1 2.385 1.305c1.312 1.553 1.425 4.088-.285 5.588Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.445 9.757c-.39-.195-.818-.3-1.253-.307M11.888 7.44c.39-.195.817-.3 1.252-.307"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.477 6.375c0 .825-.382 1.567-.99 2.047a3.673 3.673 0 0 0-2.385-1.305C12.922 6.03 12.525 5.175 12 4.53v-.008a2.595 2.595 0 0 1 1.852-.772 2.628 2.628 0 0 1 2.625 2.625Z"
        />
    </Svg>
)

export default CloudSunnyIcon;