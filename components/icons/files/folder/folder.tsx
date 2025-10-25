import * as React from "react";
import Svg, { Path } from "react-native-svg";

type FolderIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const FolderIcon: React.FC<FolderIconProps> = (props) => {

    if (props.size === "large") return <FolderIconLarge {...props} />

    if (props.size === "medium") return <FolderIconMedium {...props} />

    return <FolderIconSmall {...props} />
};

const FolderIconLarge: React.FC<FolderIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
        />
    </Svg>
)

const FolderIconMedium: React.FC<FolderIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.334 9.166v5c0 3.334-.834 4.167-4.167 4.167H5.834c-3.334 0-4.167-.833-4.167-4.166V5.832c0-3.333.833-4.167 4.167-4.167h1.25c1.25 0 1.525.367 2 1l1.25 1.667c.316.417.5.667 1.333.667h2.5c3.333 0 4.167.833 4.167 4.166Z"
        />
    </Svg>
)

const FolderIconSmall: React.FC<FolderIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.5 8.25v4.5c0 3-.75 3.75-3.75 3.75h-7.5c-3 0-3.75-.75-3.75-3.75v-7.5c0-3 .75-3.75 3.75-3.75h1.125c1.125 0 1.372.33 1.8.9L9.3 3.9c.285.375.45.6 1.2.6h2.25c3 0 3.75.75 3.75 3.75Z"
        />
    </Svg>
)

export default FolderIcon;