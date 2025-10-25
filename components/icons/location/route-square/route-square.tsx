import * as React from "react";
import Svg, { Path } from "react-native-svg";

type RouteSquareIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const RouteSquareIcon: React.FC<RouteSquareIconProps> = (props) => {
    if (props.size === "large") return <RouteSquareIconLarge {...props} />

    if (props.size === "medium") return <RouteSquareIconMedium {...props} />

    return <RouteSquareIconSmall {...props} />
};

const RouteSquareIconLarge: React.FC<RouteSquareIconProps> = () => (
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
            d="m17.35 9.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.7-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
        />
    </Svg>
)

const RouteSquareIconMedium: React.FC<RouteSquareIconProps> = () => (
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
            d="m14.458 7.542-1.95 6.283c-.467 1.492-2.559 1.517-3.05.033l-.584-1.725a1.579 1.579 0 0 0-1.008-1.008l-1.733-.583c-1.475-.492-1.45-2.6.041-3.05l6.284-1.959c1.233-.375 2.392.784 2 2.009Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.5 18.333h5c4.167 0 5.834-1.666 5.834-5.833v-5c0-4.167-1.667-5.833-5.834-5.833h-5c-4.166 0-5.833 1.666-5.833 5.833v5c0 4.167 1.667 5.833 5.833 5.833Z"
        />
    </Svg>
)

const RouteSquareIconSmall: React.FC<RouteSquareIconProps> = () => (
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
            d="m13.012 6.788-1.755 5.655c-.42 1.342-2.302 1.365-2.745.03l-.525-1.553a1.421 1.421 0 0 0-.907-.907l-1.56-.525c-1.328-.443-1.305-2.34.037-2.745l5.655-1.763c1.11-.337 2.153.705 1.8 1.808Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3 15 1.5 11.25 1.5h-4.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5Z"
        />
    </Svg>
)

export default RouteSquareIcon;