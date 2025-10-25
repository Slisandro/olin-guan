import * as React from "react";
import Svg, { Path } from "react-native-svg";

type GPSIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const GPSIcon: React.FC<GPSIconProps> = (props) => {
    if (props.size === "large") return <GPSIconLarge {...props} />

    if (props.size === "medium") return <GPSIconMedium {...props} />

    return <GPSIconSmall {...props} />
};

const GPSIconLarge: React.FC<GPSIconProps> = () => (
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
            d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 4V2M4 12H2M12 20v2M20 12h2"
        />
    </Svg>
)

const GPSIconMedium: React.FC<GPSIconProps> = () => (
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
            d="M10 16.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10 3.333V1.667M3.334 10H1.667M10 16.667v1.666M16.667 10h1.667"
        />
    </Svg>
)

const GPSIconSmall: React.FC<GPSIconProps> = () => (
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
            d="M9 14.625a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM9 3V1.5M3 9H1.5M9 15v1.5M15 9h1.5"
        />
    </Svg>
)

export default GPSIcon;