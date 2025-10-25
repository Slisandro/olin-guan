import * as React from "react";
import Svg, { Path } from "react-native-svg";

type LocationIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const LocationIcon: React.FC<LocationIconProps> = (props) => {
    if (props.size === "extra-large") return <LocationIconExtraLarge {...props} />

    if (props.size === "large") return <LocationIconLarge {...props} />

    if (props.size === "medium") return <LocationIconMedium {...props} />

    if (props.size === "small") return <LocationIconSmall {...props} />

    return <LocationIconExtraSmall {...props} />
};

const LocationIconExtraLarge: React.FC<LocationIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.5}
            d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
        />
        <Path
            stroke="#646464"
            strokeWidth={1.5}
            d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
        />
    </Svg>
)

const LocationIconLarge: React.FC<LocationIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M10 11.192a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
        />
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M3.017 7.075C4.658-.142 15.35-.133 16.983 7.083c.959 4.233-1.675 7.817-3.983 10.034a4.328 4.328 0 0 1-6.008 0c-2.3-2.217-4.934-5.809-3.975-10.042Z"
        />
    </Svg>
)

const LocationIconMedium: React.FC<LocationIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.125}
            d="M9 10.073a2.34 2.34 0 1 0 0-4.68 2.34 2.34 0 0 0 0 4.68Z"
        />
        <Path
            stroke="#646464"
            strokeWidth={1.125}
            d="M2.715 6.367c1.478-6.494 11.1-6.487 12.57.008.863 3.81-1.507 7.035-3.585 9.03a3.895 3.895 0 0 1-5.407 0c-2.07-1.995-4.44-5.227-3.578-9.037Z"
        />
    </Svg>
)

const LocationIconSmall: React.FC<LocationIconProps> = () => (
    <Svg
        width={14}
        height={14}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={0.875}
            d="M7 7.834a1.82 1.82 0 1 0 0-3.64 1.82 1.82 0 0 0 0 3.64Z"
        />
        <Path
            stroke="#646464"
            strokeWidth={0.875}
            d="M2.112 4.953c1.15-5.052 8.634-5.046 9.777.005.67 2.964-1.172 5.472-2.788 7.024a3.03 3.03 0 0 1-4.206 0c-1.61-1.552-3.454-4.066-2.783-7.03Z"
        />
    </Svg>
)

const LocationIconExtraSmall: React.FC<LocationIconProps> = () => (
    <Svg
        width={12}
        height={12}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={0.75}
            d="M6 6.715a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12Z"
        />
        <Path
            stroke="#646464"
            strokeWidth={0.75}
            d="M1.81 4.245c.985-4.33 7.4-4.325 8.38.005.575 2.54-1.005 4.69-2.39 6.02a2.597 2.597 0 0 1-3.605 0c-1.38-1.33-2.96-3.485-2.385-6.025Z"
        />
    </Svg>
)

export default LocationIcon;