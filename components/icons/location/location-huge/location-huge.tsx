import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type LocationHugeIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const LocationHugeIcon: React.FC<LocationHugeIconProps> = (props) => {
    if (props.size === "extra-large") return <LocationHugeIconExtraLarge {...props} />

    if (props.size === "large") return <LocationHugeIconLarge {...props} />

    if (props.size === "medium") return <LocationHugeIconMedium {...props} />

    return <LocationHugeIconSmall {...props} />
};

const LocationHugeIconExtraLarge: React.FC<LocationHugeIconProps> = () => (
    <Svg
        width={64}
        height={64}
        fill="none"
    >
        <Circle cx={32} cy={29.333} r={8} stroke="#646464" strokeWidth={4} />
        <Path
            stroke="#646464"
            strokeWidth={4}
            d="M56 29.037c0 13.091-15 29.63-24 29.63S8 42.128 8 29.037C8 15.946 18.745 5.333 32 5.333s24 10.613 24 23.704Z"
        />
    </Svg>
)

const LocationHugeIconLarge: React.FC<LocationHugeIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Circle cx={12} cy={11} r={3} stroke="#646464" strokeWidth={1.5} />
        <Path
            stroke="#646464"
            strokeWidth={1.5}
            d="M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z"
        />
    </Svg>
)

const LocationHugeIconMedium: React.FC<LocationHugeIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Circle cx={10} cy={9.167} r={2.5} stroke="#646464" strokeWidth={1.25} />
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M17.5 9.074c0 4.091-4.688 9.26-7.5 9.26-2.813 0-7.5-5.169-7.5-9.26 0-4.09 3.358-7.407 7.5-7.407 4.142 0 7.5 3.316 7.5 7.407Z"
        />
    </Svg>
)

const LocationHugeIconSmall: React.FC<LocationHugeIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Circle cx={9} cy={8.25} r={2.25} stroke="#646464" strokeWidth={1.125} />
        <Path
            stroke="#646464"
            strokeWidth={1.125}
            d="M15.75 8.167c0 3.682-4.219 8.333-6.75 8.333-2.531 0-6.75-4.651-6.75-8.333C2.25 4.485 5.272 1.5 9 1.5s6.75 2.985 6.75 6.667Z"
        />
    </Svg>
)

export default LocationHugeIcon;