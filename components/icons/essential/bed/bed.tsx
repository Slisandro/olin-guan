import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type BedIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const BedIcon: React.FC<BedIconProps> = (props) => {
    if (props.size === "extra-large") return <BedIconExtraLarge {...props} />

    if (props.size === "large") return <BedIconLarge {...props} />

    if (props.size === "medium") return <BedIconMedium {...props} />

    if (props.size === "small") return <BedIconSmall {...props} />

    return <BedIconExtraSmall {...props} />
};

const BedIconExtraLarge: React.FC<BedIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            fill={color}
            d="M3.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 11a.75.75 0 0 0 1.5 0h-1.5ZM3 13.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 18a.75.75 0 0 0 1.5 0h-1.5ZM11 8v-.75a.75.75 0 0 0-.75.75H11Zm-.75 6a.75.75 0 0 0 1.5 0h-1.5ZM3 7h-.75v11h1.5V7H3Zm0 7v.75h18v-1.5H3V14Zm18 4h.75v-8h-1.5v8H21Zm0-8h.75A2.75 2.75 0 0 0 19 7.25v1.5c.69 0 1.25.56 1.25 1.25H21Zm-2-2v-.75h-8v1.5h8V8Zm-8 0h-.75v6h1.5V8H11Z"
        />
        <Circle
            cx={7}
            cy={10}
            r={1}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </Svg>
)

const BedIconLarge: React.FC<BedIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            fill={color}
            d="M3.125 5.833a.625.625 0 1 0-1.25 0h1.25ZM1.875 15a.625.625 0 0 0 1.25 0h-1.25Zm.625-3.958a.625.625 0 1 0 0 1.25v-1.25Zm15 1.25a.625.625 0 0 0 0-1.25v1.25ZM16.876 15a.625.625 0 1 0 1.25 0h-1.25ZM9.167 6.667v-.625a.625.625 0 0 0-.625.625h.625Zm-.625 5a.625.625 0 1 0 1.25 0h-1.25ZM2.5 5.834h-.625V15h1.25V5.834H2.5Zm0 5.833v.625h15v-1.25h-15v.625ZM17.5 15h.626V8.334h-1.25V15h.625Zm0-6.666h.626a2.292 2.292 0 0 0-2.292-2.292v1.25c.575 0 1.042.466 1.042 1.042h.625Zm-1.666-1.667v-.625H9.167v1.25h6.667v-.625Zm-6.667 0h-.625v5h1.25v-5h-.625Z"
        />
        <Circle
            cx={5.833}
            cy={8.333}
            r={0.833}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
    </Svg>
)

const BedIconMedium: React.FC<BedIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            fill={color}
            d="M2.813 5.25a.563.563 0 0 0-1.126 0h1.126ZM1.687 13.5a.562.562 0 1 0 1.125 0H1.688Zm.563-3.563a.562.562 0 1 0 0 1.126V9.937Zm13.5 1.126a.562.562 0 1 0 0-1.126v1.126Zm-.563 2.437a.562.562 0 1 0 1.126 0h-1.126ZM8.25 6v-.563A.563.563 0 0 0 7.687 6h.563Zm-.563 4.5a.562.562 0 1 0 1.125 0H7.688ZM2.25 5.25h-.563v8.25h1.126V5.25H2.25Zm0 5.25v.563h13.5V9.937H2.25v.563Zm13.5 3h.563v-6h-1.126v6h.563Zm0-6h.563c0-1.14-.924-2.063-2.063-2.063v1.126c.518 0 .938.42.938.937h.562ZM14.25 6v-.563h-6v1.126h6V6Zm-6 0h-.563v4.5h1.126V6H8.25Z"
        />
        <Circle
            cx={5.25}
            cy={7.5}
            r={0.75}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
    </Svg>
)

const BedIconSmall: React.FC<BedIconProps> = ({ color }) => (
    <Svg width={14} height={14} fill="none">
        <Path
            fill={color}
            d="M2.313 4.083a.563.563 0 0 0-1.126 0h1.126ZM1.187 10.5a.563.563 0 0 0 1.125 0H1.188Zm.563-2.896a.563.563 0 0 0 0 1.125V7.604Zm10.5 1.125a.562.562 0 1 0 0-1.125V8.73Zm-.563 1.771a.563.563 0 0 0 1.126 0h-1.126Zm-5.27-5.833v-.563a.563.563 0 0 0-.563.563h.563Zm-.563 3.5a.563.563 0 0 0 1.125 0H5.854ZM1.75 4.084h-.563V10.5h1.126V4.083H1.75Zm0 4.083v.562h10.5V7.604H1.75v.563Zm10.5 2.333h.563V5.833h-1.126V10.5h.563Zm0-4.667h.563a1.73 1.73 0 0 0-1.73-1.729V5.23c.334 0 .604.27.604.604h.563Zm-1.167-1.166v-.563H6.417V5.23h4.666v-.562Zm-4.666 0h-.563v3.5H6.98v-3.5h-.562Z"
        />
        <Circle
            cx={4.083}
            cy={5.833}
            r={0.583}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
    </Svg>
)

const BedIconExtraSmall: React.FC<BedIconProps> = ({ color }) => (
    <Svg width={12} height={12} fill="none">
        <Path
            fill={color}
            d="M2.063 3.5a.563.563 0 0 0-1.126 0h1.126ZM.937 9a.563.563 0 0 0 1.125 0H.938ZM1.5 6.437a.563.563 0 0 0 0 1.125V6.438Zm9 1.125a.562.562 0 1 0 0-1.125v1.126ZM9.937 9a.562.562 0 1 0 1.126 0H9.937ZM5.5 4v-.563A.563.563 0 0 0 4.937 4H5.5Zm-.563 3a.563.563 0 0 0 1.125 0H4.938ZM1.5 3.5H.937V9h1.126V3.5H1.5Zm0 3.5v.563h9V6.437h-9V7Zm9 2h.563V5H9.937v4h.563Zm0-4h.563c0-.863-.7-1.563-1.563-1.563v1.126c.242 0 .438.195.438.437h.562Zm-1-1v-.563h-4v1.126h4V4Zm-4 0h-.563v3h1.126V4H5.5Z"
        />
        <Circle
            cx={3.5}
            cy={5}
            r={0.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
    </Svg>
)

export default BedIcon;