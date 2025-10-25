import * as React from "react";
import Svg, { Path } from "react-native-svg";

type FolderAddIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const FolderAddIcon: React.FC<FolderAddIconProps> = (props) => {

    if (props.size === "large") return <FolderAddIconLarge {...props} />

    if (props.size === "medium") return <FolderAddIconMedium {...props} />

    return <FolderAddIconSmall {...props} />
};

const FolderAddIconLarge: React.FC<FolderAddIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M12.06 16.5v-5M14.5 14h-5"
        />
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
        />
    </Svg>
)

const FolderAddIconMedium: React.FC<FolderAddIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M10.05 13.75V9.583M12.084 11.666H7.917"
        />
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.334 9.166v5c0 3.334-.834 4.167-4.167 4.167H5.834c-3.334 0-4.167-.833-4.167-4.166V5.832c0-3.333.833-4.167 4.167-4.167h1.25c1.25 0 1.525.367 2 1l1.25 1.667c.316.417.5.667 1.333.667h2.5c3.333 0 4.167.833 4.167 4.166Z"
        />
    </Svg>
)

const FolderAddIconSmall: React.FC<FolderAddIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M9.045 12.375v-3.75M10.875 10.5h-3.75"
        />
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.5 8.25v4.5c0 3-.75 3.75-3.75 3.75h-7.5c-3 0-3.75-.75-3.75-3.75v-7.5c0-3 .75-3.75 3.75-3.75h1.125c1.125 0 1.372.33 1.8.9L9.3 3.9c.285.375.45.6 1.2.6h2.25c3 0 3.75.75 3.75 3.75Z"
        />
    </Svg>
)

export default FolderAddIcon;