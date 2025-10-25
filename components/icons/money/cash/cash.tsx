import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CashIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CashIcon: React.FC<CashIconProps> = (props) => {
    if (props.size === "large") return <CashIconLarge {...props} />

    if (props.size === "medium") return <CashIconMedium {...props} />

    return <CashIconSmall {...props} />
};

const CashIconLarge: React.FC<CashIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M19.3 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.11c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M22.301 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M10.498 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28ZM4.78 8.3v4.4M16.222 8.3v4.4"
        />
    </Svg>
)

const CashIconMedium: React.FC<CashIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M16.083 6.6v4.292c0 2.566-1.466 3.666-3.666 3.666H5.09c-.375 0-.733-.033-1.066-.108a3.235 3.235 0 0 1-.592-.158c-1.25-.467-2.008-1.55-2.008-3.4V6.6c0-2.567 1.466-3.667 3.666-3.667h7.325c1.867 0 3.209.792 3.567 2.6.058.334.1.675.1 1.067Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.584 9.1v4.292c0 2.566-1.467 3.666-3.667 3.666H7.592c-.617 0-1.175-.083-1.658-.266-.992-.367-1.667-1.125-1.909-2.342.334.075.692.108 1.067.108h7.325c2.2 0 3.667-1.1 3.667-3.666V6.6c0-.392-.034-.742-.1-1.067 1.583.334 2.6 1.45 2.6 3.567Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M8.749 10.95a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.983 6.917v3.666M13.518 6.917v3.667"
        />
    </Svg>
)

const CashIconSmall: React.FC<CashIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M14.476 5.94v3.863c0 2.31-1.32 3.3-3.3 3.3H4.583c-.337 0-.66-.03-.96-.098a2.916 2.916 0 0 1-.532-.142c-1.125-.42-1.808-1.395-1.808-3.06V5.94c0-2.31 1.32-3.3 3.3-3.3h6.593c1.68 0 2.887.713 3.21 2.34.052.3.09.608.09.96Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.727 8.19v3.863c0 2.31-1.32 3.3-3.3 3.3H6.834c-.555 0-1.057-.075-1.492-.24-.893-.33-1.5-1.013-1.718-2.108.3.068.623.098.96.098h6.593c1.98 0 3.3-.99 3.3-3.3V5.94c0-.352-.03-.667-.09-.96 1.425.3 2.34 1.305 2.34 3.21Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M7.875 9.855a1.98 1.98 0 1 0 0-3.96 1.98 1.98 0 0 0 0 3.96ZM3.586 6.225v3.3M12.167 6.225v3.3"
        />
    </Svg>
)

export default CashIcon;