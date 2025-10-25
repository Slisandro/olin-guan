import * as React from "react";
import Svg, { Path } from "react-native-svg";

type FlashIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const FlashIcon: React.FC<FlashIconProps> = (props) => {

    if (props.size === "large") return <FlashIconLarge {...props} />

    if (props.size === "medium") return <FlashIconMedium {...props} />

    return <FlashIconSmall {...props} />
};

const FlashIconLarge: React.FC<FlashIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M9.32 13.28h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92ZM8.5 4h-7M7.5 20h-6M4.5 12h-3"
        />
    </Svg>
)

const FlashIconMedium: React.FC<FlashIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M7.767 11.067h2.575v6c0 .883 1.1 1.3 1.683.633l6.309-7.167a.962.962 0 0 0-.725-1.6h-2.575v-6c0-.883-1.1-1.3-1.684-.633L7.042 9.467c-.542.625-.1 1.6.725 1.6ZM7.083 3.333H1.25M6.25 16.667h-5M3.75 10h-2.5"
        />
    </Svg>
)

const FlashIconSmall: React.FC<FlashIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M6.99 9.96h2.317v5.4c0 .795.99 1.17 1.515.57L16.5 9.48a.866.866 0 0 0-.653-1.44H13.53v-5.4c0-.795-.99-1.17-1.515-.57L6.337 8.52c-.487.563-.09 1.44.653 1.44ZM6.375 3h-5.25M5.625 15h-4.5M3.375 9h-2.25"
        />
    </Svg>
)

export default FlashIcon;