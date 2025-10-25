import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CoinIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CoinIcon: React.FC<CoinIconProps> = (props) => {
    if (props.size === "large") return <CoinIconLarge {...props} />

    if (props.size === "medium") return <CoinIconMedium {...props} />

    return <CoinIconSmall {...props} />
};

const CoinIconLarge: React.FC<CoinIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.5 12.65v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7C5.5 15.77 8.41 18 12 18s6.5-2.23 6.5-5.35Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
        />
    </Svg>
)

const CoinIconMedium: React.FC<CoinIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.416 10.542v3.083c0 2.6-2.425 4.708-5.416 4.708-2.992 0-5.417-2.108-5.417-4.708v-3.083C4.583 13.142 7.008 15 10 15c2.991 0 5.416-1.858 5.416-4.458Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.416 6.375a3.92 3.92 0 0 1-.575 2.058c-.891 1.467-2.725 2.4-4.841 2.4-2.117 0-3.95-.933-4.842-2.4a3.92 3.92 0 0 1-.575-2.058c0-1.3.608-2.475 1.583-3.325C7.15 2.192 8.5 1.667 10 1.667s2.85.525 3.833 1.375c.975.858 1.583 2.033 1.583 3.333Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.416 6.375v4.167c0 2.6-2.425 4.458-5.416 4.458-2.992 0-5.417-1.858-5.417-4.458V6.375c0-2.6 2.425-4.708 5.417-4.708 1.5 0 2.85.525 3.833 1.375.975.858 1.583 2.033 1.583 3.333Z"
        />
    </Svg>
)

const CoinIconSmall: React.FC<CoinIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.875 9.488v2.774c0 2.34-2.182 4.238-4.875 4.238-2.692 0-4.875-1.898-4.875-4.238V9.488c0 2.34 2.183 4.012 4.875 4.012 2.693 0 4.875-1.672 4.875-4.012Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.875 5.737c0 .683-.188 1.313-.518 1.853C12.556 8.91 10.905 9.75 9 9.75c-1.905 0-3.555-.84-4.357-2.16a3.528 3.528 0 0 1-.518-1.853c0-1.17.548-2.227 1.425-2.992C6.435 1.972 7.65 1.5 9 1.5s2.565.472 3.45 1.237c.878.773 1.425 1.83 1.425 3Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.875 5.737v3.75c0 2.34-2.182 4.013-4.875 4.013-2.692 0-4.875-1.672-4.875-4.012v-3.75C4.125 3.397 6.308 1.5 9 1.5c1.35 0 2.565.472 3.45 1.237.878.773 1.425 1.83 1.425 3Z"
        />
    </Svg>
)

export default CoinIcon;