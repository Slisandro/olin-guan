import * as React from "react";
import Svg, { Path } from "react-native-svg";

type TrainIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const TrainIcon: React.FC<TrainIconProps> = (props) => {
    if (props.size === "large") return <TrainIconLarge {...props} />

    if (props.size === "medium") return <TrainIconMedium {...props} />

    return <TrainIconSmall {...props} />
};

const TrainIconLarge: React.FC<TrainIconProps> = () => (
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
            d="M21 13c0-3.87-3.37-7-10-7H3M3 15h16a2 2 0 0 0 2-2"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6v5h17.5M3 10v4M8 11V6M13 11V6.5M3 19h18"
        />
    </Svg>
)

const TrainIconMedium: React.FC<TrainIconProps> = () => (
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
            d="M17.5 10.833C17.5 7.608 14.692 5 9.167 5H2.5M2.5 12.5h13.333c.92 0 1.667-.746 1.667-1.667"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M2.5 5v4.167h14.583M2.5 8.333v3.334M6.667 9.167V5M10.834 9.167v-3.75M2.5 15.833h15"
        />
    </Svg>
)

const TrainIconSmall: React.FC<TrainIconProps> = () => (
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
            d="M15.75 9.75c0-2.902-2.527-5.25-7.5-5.25h-6M2.25 11.25h12a1.5 1.5 0 0 0 1.5-1.5"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M2.25 4.5v3.75h13.125M2.25 7.5v3M6 8.25V4.5M9.75 8.25V4.875M2.25 14.25h13.5"
        />
    </Svg>
)

export default TrainIcon;