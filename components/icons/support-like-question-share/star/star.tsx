import * as React from "react";
import Svg, { Path } from "react-native-svg";

type StarIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
    fill?: string
};

const StarIcon: React.FC<StarIconProps> = (props) => {
    if (props.size === "extra-large") return <StarIconExtraLarge {...props} />

    if (props.size === "large") return <StarIconLarge {...props} />

    if (props.size === "medium") return <StarIconMedium {...props} />

    if (props.size === "small") return <StarIconSmall {...props} />

    return <StarIconExtraSmall {...props} />
};

const StarIconExtraLarge: React.FC<StarIconProps> = ({ color, fill }) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={fill}
    >
        <Path
            d="M13.73 3.51l1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0z"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const StarIconLarge: React.FC<StarIconProps> = ({ color, fill }) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill={fill}
    >
        <Path
            d="M11.441 2.925l1.467 2.933c.2.409.733.8 1.183.875l2.658.442c1.7.283 2.1 1.517.875 2.733l-2.066 2.067c-.35.35-.542 1.025-.434 1.508l.592 2.559c.467 2.025-.608 2.808-2.4 1.75l-2.492-1.475c-.45-.267-1.191-.267-1.65 0l-2.491 1.475c-1.784 1.058-2.867.266-2.4-1.75l.591-2.559c.109-.483-.083-1.158-.433-1.508L2.374 9.908c-1.216-1.216-.825-2.45.875-2.733l2.659-.442c.441-.075.975-.466 1.175-.875l1.466-2.933c.8-1.592 2.1-1.592 2.892 0z"
            stroke={color}
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const StarIconMedium: React.FC<StarIconProps> = ({ color, fill }) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill={fill}
    >
        <Path
            d="M10.298 2.632l1.32 2.64c.18.368.66.72 1.065.788l2.392.397c1.53.255 1.89 1.365.788 2.46l-1.86 1.86c-.315.316-.488.923-.39 1.358l.532 2.303c.42 1.822-.547 2.527-2.16 1.574l-2.242-1.327c-.405-.24-1.073-.24-1.485 0l-2.243 1.327c-1.605.953-2.58.24-2.16-1.575l.533-2.302c.097-.435-.075-1.043-.39-1.357l-1.86-1.86c-1.095-1.096-.743-2.206.787-2.46l2.393-.398c.397-.068.877-.42 1.057-.788l1.32-2.64c.72-1.432 1.89-1.432 2.603 0z"
            stroke={color}
            strokeWidth={1.125}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const StarIconSmall: React.FC<StarIconProps> = ({ color, fill }) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill={fill}
    >
        <Path
            d="M8.009 2.048L9.036 4.1c.14.286.513.56.828.612l1.86.31c1.19.198 1.47 1.061.613 1.913L10.89 8.383c-.245.245-.379.717-.303 1.055l.414 1.791c.327 1.418-.425 1.966-1.68 1.225l-1.744-1.032c-.315-.187-.834-.187-1.155 0l-1.744 1.032c-1.248.741-2.007.187-1.68-1.225l.414-1.79c.076-.339-.058-.811-.303-1.056L1.662 6.936c-.851-.852-.577-1.715.613-1.913l1.86-.31c.31-.052.683-.326.823-.612l1.027-2.053c.56-1.115 1.47-1.115 2.024 0z"
            stroke={color}
            strokeWidth={0.875}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const StarIconExtraSmall: React.FC<StarIconProps> = ({ color, fill }) => (
    <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill={fill}
    >
        <Path
            d="M6.865 1.755l.88 1.76c.12.245.44.48.71.525l1.595.265c1.02.17 1.26.91.525 1.64l-1.24 1.24c-.21.21-.325.615-.26.905l.355 1.535c.28 1.215-.365 1.685-1.44 1.05L6.495 9.79c-.27-.16-.715-.16-.99 0l-1.495.885c-1.07.635-1.72.16-1.44-1.05l.355-1.535c.065-.29-.05-.695-.26-.905l-1.24-1.24c-.73-.73-.495-1.47.525-1.64l1.595-.265c.265-.045.585-.28.705-.525l.88-1.76C5.61.8 6.39.8 6.865 1.755z"
            stroke={color}
            strokeWidth={0.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default StarIcon;