import * as React from "react";
import Svg, { Path } from "react-native-svg";

type UserIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const UserIcon: React.FC<UserIconProps> = (props) => {

    if (props.size === "large") return <UserIconLarge {...props} />

    if (props.size === "medium") return <UserIconMedium {...props} />

    return <UserIconSmall {...props} />
};

const UserIconLarge: React.FC<UserIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
        />
    </Svg>
)

const UserIconMedium: React.FC<UserIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 10a4.167 4.167 0 1 0 0-8.333A4.167 4.167 0 0 0 10 10ZM17.159 18.333c0-3.225-3.209-5.833-7.159-5.833-3.95 0-7.158 2.608-7.158 5.833"
        />
    </Svg>
)

const UserIconSmall: React.FC<UserIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 9a3.75 3.75 0 1 0 0-7.5A3.75 3.75 0 0 0 9 9ZM15.443 16.5c0-2.902-2.888-5.25-6.443-5.25-3.555 0-6.442 2.348-6.442 5.25"
        />
    </Svg>
)

export default UserIcon;