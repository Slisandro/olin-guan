import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DirectBoxSendIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DirectBoxSendIcon: React.FC<DirectBoxSendIconProps> = (props) => {
    if (props.size === "large") return <DirectBoxSendIconLarge {...props} />;

    if (props.size === "medium") return <DirectBoxSendIconMedium {...props} />;

    return <DirectBoxSendIconSmall {...props} />;
};

const DirectBoxSendIconLarge: React.FC<DirectBoxSendIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8V2l-2 2M12 2l2 2"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12ZM5 12v-2c0-2.01 0-3.67 3-3.96M19 12v-2c0-2.01 0-3.67-3-3.96"
        />
    </Svg>
);

const DirectBoxSendIconMedium: React.FC<DirectBoxSendIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 6.667v-5L8.333 3.333M10 1.667l1.667 1.666"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M5.833 10C2.5 10 2.5 11.492 2.5 13.333v.834c0 2.3 0 4.166 4.167 4.166h6.666c3.334 0 4.167-1.866 4.167-4.166v-.834c0-1.841 0-3.333-3.333-3.333-.834 0-1.067.175-1.5.5l-.85.9a2.499 2.499 0 0 1-3.642 0l-.842-.9c-.433-.325-.666-.5-1.5-.5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M4.167 10V8.333c0-1.675 0-3.058 2.5-3.3M15.833 10V8.333c0-1.675 0-3.058-2.5-3.3"
        />
    </Svg>
);

const DirectBoxSendIconSmall: React.FC<DirectBoxSendIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 6V1.5L7.5 3M9 1.5 10.5 3"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.25 9c-3 0-3 1.342-3 3v.75c0 2.07 0 3.75 3.75 3.75h6c3 0 3.75-1.68 3.75-3.75V12c0-1.658 0-3-3-3-.75 0-.96.158-1.35.45l-.765.81a2.249 2.249 0 0 1-3.277 0L6.6 9.45C6.21 9.158 6 9 5.25 9ZM3.75 9V7.5c0-1.507 0-2.752 2.25-2.97M14.25 9V7.5c0-1.507 0-2.752-2.25-2.97"
        />
    </Svg>
);

export default DirectBoxSendIcon;
