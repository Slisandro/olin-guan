import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SlackIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SlackIcon: React.FC<SlackIconProps> = (props) => {
    if (props.size === "large") return <SlackIconLarge {...props} />

    if (props.size === "medium") return <SlackIconMedium {...props} />

    return <SlackIconSmall {...props} />
};

const SlackIconLarge: React.FC<SlackIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m12 6-8 4 8 4 8-4-8-4"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="m12 6-8 4 8 4 8-4-8-4"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m4 14 8 4 8-4"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="m4 14 8 4 8-4"
        />
    </Svg>
)

const SlackIconMedium: React.FC<SlackIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 5 3.333 8.333 10 11.667l6.666-3.334L10 5"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M10 5 3.333 8.333 10 11.667l6.666-3.334L10 5"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M3.333 11.667 10 15l6.666-3.333"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.25}
            d="M3.333 11.667 10 15l6.666-3.333"
        />
    </Svg>
)

const SlackIconSmall: React.FC<SlackIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="m9 4.5-6 3 6 3 6-3-6-3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="m9 4.5-6 3 6 3 6-3-6-3"
        />
        <Path
            stroke="#4B465C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="m3 10.5 6 3 6-3"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.125}
            d="m3 10.5 6 3 6-3"
        />
    </Svg>
)

export default SlackIcon;