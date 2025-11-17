import * as React from "react";
import Svg, { Path } from "react-native-svg";

type TreeIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
    fill?: string
};

const TreeIcon: React.FC<TreeIconProps> = (props) => {
    if (props.size === "extra-large") return <TreeIconExtraLarge {...props} />

    if (props.size === "large") return <TreeIconLarge {...props} />

    if (props.size === "medium") return <TreeIconMedium {...props} />

    return <TreeIconSmall {...props} />
};

const TreeIconExtraLarge: React.FC<TreeIconProps> = ({ color, fill }) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={fill}
    >
        <Path
            d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75z"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33zM12 22v-4"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const TreeIconLarge: React.FC<TreeIconProps> = ({ color, fill }) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill={fill}
    >
        <Path
            d="M13.476 8.383h-6.95c-.984 0-1.325-.658-.75-1.458L9.25 2.058c.408-.583 1.091-.583 1.491 0l3.475 4.867c.584.8.242 1.458-.741 1.458zM14.658 15H5.35c-1.317 0-1.767-.875-.992-1.942l3.325-4.675h4.642l3.325 4.675c.775 1.067.325 1.942-.992 1.942zM10 18.333V15"
            stroke={color}
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const TreeIconMedium: React.FC<TreeIconProps> = ({ color, fill }) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill={fill}
    >
        <Path
            d="M12.127 7.545H5.872c-.885 0-1.192-.592-.675-1.312l3.128-4.38c.367-.525.982-.525 1.342 0l3.127 4.38c.525.72.218 1.312-.667 1.312zM13.192 13.5H4.815c-1.185 0-1.59-.787-.893-1.747l2.993-4.208h4.177l2.992 4.208c.698.96.293 1.747-.892 1.747zM9 16.5v-3"
            stroke={color}
            strokeWidth={1.125}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const TreeIconSmall: React.FC<TreeIconProps> = ({ color, fill }) => (
    <Svg
        width={14}
        height={17}
        viewBox="0 0 14 17"
        fill={fill}
    >
        <Path
            d="M10.127 6.649H3.872c-.885 0-1.192-.593-.675-1.313L6.325.956c.367-.525.982-.525 1.342 0l3.127 4.38c.525.72.218 1.313-.667 1.313zM11.192 12.604H2.815c-1.185 0-1.59-.788-.893-1.748L4.915 6.65h4.177l2.992 4.207c.698.96.293 1.748-.892 1.748zM7 15.604v-3"
            stroke={color}
            strokeWidth={1.125}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default TreeIcon;