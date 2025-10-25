import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Sun01IconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const Sun01Icon: React.FC<Sun01IconProps> = (props) => {

    if (props.size === "large") return <Sun01IconLarge {...props} />

    if (props.size === "medium") return <Sun01IconMedium {...props} />

    return <Sun01IconSmall {...props} />
};

const Sun01IconLarge: React.FC<Sun01IconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8.5V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.79 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5ZM19.79 7.5l-4.76 2.75M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46"
        />
    </Svg>
)

const Sun01IconMedium: React.FC<Sun01IconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 7.083V2.5M10 17.5v-4.583M8.333 2.5h3.333M8.333 17.5h3.333M7.474 8.542 3.508 6.25M16.491 13.75l-3.967-2.292M2.675 7.692 4.34 4.808M15.658 15.192l1.667-2.884M12.916 10a2.917 2.917 0 1 1-5.442-1.458A2.917 2.917 0 0 1 12.917 10ZM16.491 6.25l-3.967 2.292M7.474 11.458 3.508 13.75M17.325 7.692l-1.667-2.884M4.341 15.192l-1.666-2.884"
        />
    </Svg>
)

const Sun01IconSmall: React.FC<Sun01IconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 6.375V2.25M9 15.75v-4.125M7.5 2.25h3M7.5 15.75h3M6.727 7.688l-3.57-2.063M14.842 12.375l-3.57-2.063M2.407 6.922l1.5-2.595M14.093 13.672l1.5-2.595M11.625 9a2.625 2.625 0 1 1-4.897-1.313A2.625 2.625 0 0 1 11.625 9ZM14.842 5.625l-3.57 2.063M6.727 10.313l-3.57 2.062M15.593 6.922l-1.5-2.595M3.907 13.672l-1.5-2.595"
        />
    </Svg>
)

export default Sun01Icon;