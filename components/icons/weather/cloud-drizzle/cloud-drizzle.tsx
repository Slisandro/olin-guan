import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloudDrizzleIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CloudDrizzleIcon: React.FC<CloudDrizzleIconProps> = (props) => {

    if (props.size === "large") return <CloudDrizzleIconLarge {...props} />

    if (props.size === "medium") return <CloudDrizzleIconMedium {...props} />

    return <CloudDrizzleIconSmall {...props} />
};

const CloudDrizzleIconLarge: React.FC<CloudDrizzleIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14C15.9.13 2.43 3.67 5.62 12.56"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41M9.97 20l-2 2M13.97 20l-2 2M13.97 16l-2 2M9.97 16l-2 2"
        />
    </Svg>
)

const CloudDrizzleIconMedium: React.FC<CloudDrizzleIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M13.841 16.667a4.436 4.436 0 0 0 3.017-1.159c2.725-2.383 1.267-7.166-2.325-7.616C13.25.108 2.025 3.058 4.683 10.467"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M6.067 10.808a3.037 3.037 0 0 0-1.425-.333c-3.884.275-3.875 5.925 0 6.2M13.184 8.242c.433-.217.9-.334 1.383-.342M8.308 16.667l-1.666 1.666M11.641 16.667l-1.666 1.666M11.641 13.333 9.975 15M8.308 13.333 6.642 15"
        />
    </Svg>
)

const CloudDrizzleIconSmall: React.FC<CloudDrizzleIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M12.457 15a3.993 3.993 0 0 0 2.715-1.043c2.453-2.145 1.14-6.45-2.092-6.855C11.925.097 1.822 2.752 4.215 9.42"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.46 9.727a2.733 2.733 0 0 0-1.282-.3c-3.495.248-3.487 5.333 0 5.58M11.865 7.417c.39-.195.81-.3 1.245-.307M7.478 15l-1.5 1.5M10.477 15l-1.5 1.5M10.477 12l-1.5 1.5M7.478 12l-1.5 1.5"
        />
    </Svg>
)

export default CloudDrizzleIcon;