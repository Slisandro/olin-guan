import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type CurrentLocationIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const CurrentLocationIcon: React.FC<CurrentLocationIconProps> = (props) => {
    if (props.size === "extra-large") return <CurrentLocationIconExtraLarge {...props} />

    if (props.size === "large") return <CurrentLocationIconLarge {...props} />

    if (props.size === "medium") return <CurrentLocationIconMedium {...props} />

    return <CurrentLocationIconSmall {...props} />
};

const CurrentLocationIconExtraLarge: React.FC<CurrentLocationIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Circle
            cx={12}
            cy={12}
            r={3}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Circle
            cx={12}
            cy={12}
            r={3}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
        />
        <Circle
            cx={12}
            cy={12}
            r={8}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Circle
            cx={12}
            cy={12}
            r={8}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2v2"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M12 2v2"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 20v2"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M12 20v2"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 12h2"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M20 12h2"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2 12h2"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M2 12h2"
        />
    </Svg>
)

const CurrentLocationIconLarge: React.FC<CurrentLocationIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Circle
            cx={10}
            cy={10}
            r={2.5}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Circle
            cx={10}
            cy={10}
            r={2.5}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
        />
        <Circle
            cx={10}
            cy={10}
            r={6.667}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Circle
            cx={10}
            cy={10}
            r={6.667}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 1.667v1.666"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M10 1.667v1.666"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 16.667v1.666"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M10 16.667v1.666"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M16.667 10h1.667"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M16.667 10h1.667"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M1.667 10h1.667"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M1.667 10h1.667"
        />
    </Svg>
)

const CurrentLocationIconMedium: React.FC<CurrentLocationIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Circle
            cx={9}
            cy={9}
            r={2.25}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={2.25}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={6}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={6}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 1.5V3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M9 1.5V3"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 15v1.5"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M9 15v1.5"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M15 9h1.5"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M15 9h1.5"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M1.5 9H3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M1.5 9H3"
        />
    </Svg>
)

const CurrentLocationIconSmall: React.FC<CurrentLocationIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Circle
            cx={9}
            cy={9}
            r={2.25}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={2.25}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={6}
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={9}
            cy={9}
            r={6}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 1.5V3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M9 1.5V3"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 15v1.5"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M9 15v1.5"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M15 9h1.5"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M15 9h1.5"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M1.5 9H3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="M1.5 9H3"
        />
    </Svg>
)

export default CurrentLocationIcon;