import * as React from "react";
import Svg, { Path } from "react-native-svg";

type PictureIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const PictureIcon: React.FC<PictureIconProps> = (props) => {
    if (props.size === "extra-large") return <PictureIconExtraLarge {...props} />

    if (props.size === "large") return <PictureIconLarge {...props} />

    if (props.size === "medium") return <PictureIconMedium {...props} />

    if (props.size === "small") return <PictureIconSmall {...props} />

    return <PictureIconExtraSmall {...props} />
};

const PictureIconExtraLarge: React.FC<PictureIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
        />
    </Svg>
)

const PictureIconLarge: React.FC<PictureIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.5 18.333h5c4.167 0 5.834-1.666 5.834-5.833v-5c0-4.167-1.667-5.833-5.834-5.833h-5c-4.166 0-5.833 1.666-5.833 5.833v5c0 4.167 1.667 5.833 5.833 5.833Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.5 8.333A1.667 1.667 0 1 0 7.5 5a1.667 1.667 0 0 0 0 3.333ZM2.225 15.792l4.108-2.759c.658-.441 1.608-.391 2.2.117l.275.242c.65.558 1.7.558 2.35 0l3.467-2.975c.65-.559 1.7-.559 2.35 0l1.358 1.166"
        />
    </Svg>
)

const PictureIconMedium: React.FC<PictureIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3 15 1.5 11.25 1.5h-4.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2.002 14.212l3.697-2.482c.593-.398 1.448-.353 1.98.105l.248.217c.585.503 1.53.503 2.115 0l3.12-2.677c.585-.503 1.53-.503 2.115 0l1.223 1.05"
        />
    </Svg>
)

const PictureIconSmall: React.FC<PictureIconProps> = () => (
    <Svg width={14} height={14} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M5.25 12.833h3.5c2.917 0 4.084-1.166 4.084-4.083v-3.5c0-2.917-1.167-4.083-4.084-4.083h-3.5c-2.916 0-4.083 1.166-4.083 4.083v3.5c0 2.917 1.167 4.083 4.083 4.083Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M5.25 5.833a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333ZM1.558 11.054l2.875-1.93c.461-.31 1.126-.275 1.54.081l.193.17a1.3 1.3 0 0 0 1.645 0l2.427-2.083a1.3 1.3 0 0 1 1.645 0l.95.816"
        />
    </Svg>
)

const PictureIconExtraSmall: React.FC<PictureIconProps> = () => (
    <Svg width={12} height={12} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.75}
            d="M4.5 11h3C10 11 11 10 11 7.5v-3C11 2 10 1 7.5 1h-3C2 1 1 2 1 4.5v3C1 10 2 11 4.5 11Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.75}
            d="M4.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1.335 9.475 3.8 7.82c.395-.265.965-.235 1.32.07l.165.145c.39.335 1.02.335 1.41 0l2.08-1.785a1.115 1.115 0 0 1 1.41 0l.815.7"
        />
    </Svg>
)

export default PictureIcon;