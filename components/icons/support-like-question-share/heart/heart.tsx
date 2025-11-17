import * as React from "react";
import Svg, { Path } from "react-native-svg";

type HeartIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
    fill?: string
};

const HeartIcon: React.FC<HeartIconProps> = (props) => {
    if (props.size === "extra-large") return <HeartIconExtraLarge {...props} />

    if (props.size === "large") return <HeartIconLarge {...props} />

    if (props.size === "medium") return <HeartIconMedium {...props} />

    if (props.size === "small") return <HeartIconSmall {...props} />

    return <HeartIconExtraSmall {...props} />
};

const HeartIconExtraLarge: React.FC<HeartIconProps> = ({ color, fill }) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={fill}
    >
        <Path
            d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HeartIconLarge: React.FC<HeartIconProps> = ({ color, fill }) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill={fill}
    >
        <Path
            d="M10.516 17.342c-.283.1-.75.1-1.033 0-2.417-.825-7.817-4.267-7.817-10.1 0-2.575 2.075-4.659 4.633-4.659 1.517 0 2.859.734 3.7 1.867a4.608 4.608 0 013.7-1.867c2.559 0 4.634 2.084 4.634 4.659 0 5.833-5.4 9.275-7.817 10.1z"
            stroke={color}
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HeartIconMedium: React.FC<HeartIconProps> = ({ color, fill }) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill={fill}
    >
        <Path
            d="M9.465 15.608c-.255.09-.675.09-.93 0-2.175-.743-7.035-3.84-7.035-9.09 0-2.318 1.868-4.193 4.17-4.193 1.365 0 2.572.66 3.33 1.68a4.147 4.147 0 013.33-1.68c2.303 0 4.17 1.875 4.17 4.193 0 5.25-4.86 8.347-7.035 9.09z"
            stroke={color}
            strokeWidth={1.125}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HeartIconSmall: React.FC<HeartIconProps> = ({ color, fill }) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill={fill}
    >
        <Path
            d="M7.362 12.14c-.198.07-.525.07-.723 0-1.692-.578-5.472-2.987-5.472-7.07A3.251 3.251 0 014.41 1.808c1.062 0 2.001.513 2.59 1.306A3.226 3.226 0 019.59 1.81a3.251 3.251 0 013.244 3.26c0 4.084-3.78 6.493-5.472 7.07z"
            stroke={color}
            strokeWidth={0.875}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HeartIconExtraSmall: React.FC<HeartIconProps> = ({ color, fill }) => (
    <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill={fill}
    >
        <Path
            d="M6.311 10.405c-.17.06-.45.06-.62 0-1.45-.495-4.69-2.56-4.69-6.06a2.787 2.787 0 012.78-2.795c.91 0 1.715.44 2.22 1.12a2.765 2.765 0 012.22-1.12c1.535 0 2.78 1.25 2.78 2.795 0 3.5-3.24 5.565-4.69 6.06z"
            stroke={color}
            strokeWidth={0.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default HeartIcon;