import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type MusicIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const MusicIcon: React.FC<MusicIconProps> = (props) => {
    if (props.size === "extra-large") return <MusicIconExtraLarge {...props} />

    if (props.size === "large") return <MusicIconLarge {...props} />

    if (props.size === "medium") return <MusicIconMedium {...props} />

    if (props.size === "small") return <MusicIconSmall {...props} />

    return <MusicIconExtraSmall {...props} />
};

const MusicIconExtraLarge: React.FC<MusicIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Circle
            cx={6}
            cy={17}
            r={3}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Circle
            cx={16}
            cy={17}
            r={3}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V4h10v13M9 8h10"
        />
    </Svg>
)

const MusicIconLarge: React.FC<MusicIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Circle
            cx={5}
            cy={14.166}
            r={2.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Circle
            cx={13.333}
            cy={14.166}
            r={2.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.5 14.167V3.333h8.333v10.834M7.5 6.667h8.333"
        />
    </Svg>
)

const MusicIconMedium: React.FC<MusicIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Circle
            cx={4.5}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={12}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 12.75V3h7.5v9.75M6.75 6h7.5"
        />
    </Svg>
)

const MusicIconSmall: React.FC<MusicIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Circle
            cx={4.5}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={12}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 12.75V3h7.5v9.75M6.75 6h7.5"
        />
    </Svg>
)

const MusicIconExtraSmall: React.FC<MusicIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Circle
            cx={4.5}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={12}
            cy={12.75}
            r={2.25}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 12.75V3h7.5v9.75M6.75 6h7.5"
        />
    </Svg>
)

export default MusicIcon;