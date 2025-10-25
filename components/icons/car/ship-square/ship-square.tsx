import * as React from "react";
import Svg, { Path } from "react-native-svg";

type ShipSquareIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const ShipSquareIcon: React.FC<ShipSquareIconProps> = (props) => {
    if (props.size === "large") return <ShipSquareIconLarge {...props} />

    if (props.size === "medium") return <ShipSquareIconMedium {...props} />

    return <ShipSquareIconSmall {...props} />
};

const ShipSquareIconLarge: React.FC<ShipSquareIconProps> = () => (
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
            d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1M4 18l-1-5h18l-2 4M5 13V7h8l4 6M7 7V3H6"
        />
    </Svg>
)

const ShipSquareIconMedium: React.FC<ShipSquareIconProps> = () => (
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
            d="M1.667 16.667a2 2 0 0 0 1.667.833A2 2 0 0 0 5 16.667a2 2 0 0 1 1.667-.834 2 2 0 0 1 1.667.834A2 2 0 0 0 10 17.5a2 2 0 0 0 1.667-.833 2 2 0 0 1 1.667-.834 2 2 0 0 1 1.666.834 2 2 0 0 0 1.667.833 2 2 0 0 0 1.667-.833M3.333 15 2.5 10.833h15l-1.667 3.334M4.167 10.833v-5h6.667l3.333 5M5.833 5.833V2.5H5"
        />
    </Svg>
)

const ShipSquareIconSmall: React.FC<ShipSquareIconProps> = () => (
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
            d="M1.5 15a1.8 1.8 0 0 0 1.5.75A1.8 1.8 0 0 0 4.5 15a1.8 1.8 0 0 1 1.5-.75 1.8 1.8 0 0 1 1.5.75 1.8 1.8 0 0 0 1.5.75 1.8 1.8 0 0 0 1.5-.75 1.8 1.8 0 0 1 1.5-.75 1.8 1.8 0 0 1 1.5.75 1.8 1.8 0 0 0 1.5.75 1.8 1.8 0 0 0 1.5-.75M3 13.5l-.75-3.75h13.5l-1.5 3M3.75 9.75v-4.5h6l3 4.5M5.25 5.25v-3H4.5"
        />
    </Svg>
)

export default ShipSquareIcon;