import * as React from "react";
import Svg, { Path } from "react-native-svg";

type LockIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const LockIcon: React.FC<LockIconProps> = (props) => {

    if (props.size === "large") return <LockIconLarge {...props} />

    if (props.size === "medium") return <LockIconMedium {...props} />

    return <LockIconSmall {...props} />
};

const LockIconLarge: React.FC<LockIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.996 16h.01M11.995 16h.01M7.995 16h.008"
        />
    </Svg>
)

const LockIconMedium: React.FC<LockIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666M14.167 18.333H5.834c-3.334 0-4.167-.833-4.167-4.166V12.5c0-3.333.833-4.167 4.167-4.167h8.333c3.333 0 4.167.834 4.167 4.167v1.667c0 3.333-.834 4.166-4.167 4.166Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M13.33 13.333h.008M9.996 13.333h.008M6.662 13.333h.008"
        />
    </Svg>
)

const LockIconSmall: React.FC<LockIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M4.5 7.5V6c0-2.482.75-4.5 4.5-4.5s4.5 2.018 4.5 4.5v1.5M12.75 16.5h-7.5c-3 0-3.75-.75-3.75-3.75v-1.5c0-3 .75-3.75 3.75-3.75h7.5c3 0 3.75.75 3.75 3.75v1.5c0 3-.75 3.75-3.75 3.75Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.997 12h.007M8.997 12h.007M5.996 12h.007"
        />
    </Svg>
)

export default LockIcon;