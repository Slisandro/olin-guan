import * as React from "react";
import Svg, { Path } from "react-native-svg";

type HugeIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const HugeIcon: React.FC<HugeIconProps> = (props) => {
    if (props.size === "large") return <HugeIconLarge {...props} />

    if (props.size === "medium") return <HugeIconMedium {...props} />

    return <HugeIconSmall {...props} />
};

const HugeIconLarge: React.FC<HugeIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M14 16.074c4.008.303 7 1.498 7 2.926 0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.428 2.992-2.623 7-2.926"
        />
    </Svg>
)

const HugeIconMedium: React.FC<HugeIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 5a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 10 5Zm0 0a3.333 3.333 0 0 1 3.334 3.333V10c0 .46-.373.833-.834.833a.833.833 0 0 0-.833.834v2.5a1.667 1.667 0 1 1-3.333 0v-2.5a.833.833 0 0 0-.834-.834.833.833 0 0 1-.833-.833V8.333A3.333 3.333 0 0 1 10 5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeWidth={1.25}
            d="M11.667 13.395c3.34.253 5.833 1.248 5.833 2.438 0 1.381-3.358 2.5-7.5 2.5-4.142 0-7.5-1.119-7.5-2.5 0-1.19 2.493-2.185 5.833-2.438"
        />
    </Svg>
)

const HugeIconSmall: React.FC<HugeIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0a3 3 0 0 1 3 3V9a.75.75 0 0 1-.75.75.75.75 0 0 0-.75.75v2.25a1.5 1.5 0 0 1-3 0V10.5a.75.75 0 0 0-.75-.75A.75.75 0 0 1 6 9V7.5a3 3 0 0 1 3-3Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeWidth={1.125}
            d="M10.5 12.056c3.006.227 5.25 1.123 5.25 2.194 0 1.243-3.022 2.25-6.75 2.25s-6.75-1.007-6.75-2.25c0-1.07 2.244-1.967 5.25-2.194"
        />
    </Svg>
)

export default HugeIcon;