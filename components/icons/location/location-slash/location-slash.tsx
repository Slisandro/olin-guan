import * as React from "react";
import Svg, { Path } from "react-native-svg";

type LocationSlashIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const LocationSlashIcon: React.FC<LocationSlashIconProps> = (props) => {
    if (props.size === "large") return <LocationSlashIconLarge {...props} />

    if (props.size === "medium") return <LocationSlashIconMedium {...props} />

    return <LocationSlashIconSmall {...props} />
};

const LocationSlashIconLarge: React.FC<LocationSlashIconProps> = () => (
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
            d="M10.42 13a3.113 3.113 0 0 1-1.54-2.69 3.118 3.118 0 0 1 5.81-1.57"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.99 17.81c-1.84-2.51-3.18-5.72-2.36-9.32C5.28 1.23 14.57.06 18.68 4.98M20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0M22 2 2 22"
        />
    </Svg>
)

const LocationSlashIconMedium: React.FC<LocationSlashIconProps> = () => (
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
            d="M8.684 10.833a2.598 2.598 0 1 1 3.558-3.55"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M4.991 14.842c-1.533-2.092-2.65-4.767-1.966-7.767C4.4 1.025 12.14.05 15.566 4.15M16.983 7.083c.958 4.234-1.675 7.817-3.984 10.034a4.328 4.328 0 0 1-6.008 0M18.334 1.667 1.667 18.333"
        />
    </Svg>
)

const LocationSlashIconSmall: React.FC<LocationSlashIconProps> = () => (
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
            d="M7.815 9.75a2.338 2.338 0 1 1 3.203-3.195"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M4.492 13.358c-1.38-1.883-2.385-4.29-1.77-6.99C3.959.923 10.927.045 14.009 3.735M15.284 6.375c.863 3.81-1.507 7.035-3.585 9.03a3.895 3.895 0 0 1-5.407 0M16.5 1.5l-15 15"
        />
    </Svg>
)

export default LocationSlashIcon;