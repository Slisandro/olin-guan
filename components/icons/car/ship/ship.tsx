import * as React from "react";
import Svg, { Path } from "react-native-svg";

type ShipIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const ShipIcon: React.FC<ShipIconProps> = (props) => {
    if (props.size === "large") return <ShipIconLarge {...props} />

    if (props.size === "medium") return <ShipIconMedium {...props} />

    return <ShipIconSmall {...props} />
};

const ShipIconLarge: React.FC<ShipIconProps> = () => (
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
            d="M20.42 12.37c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57ZM12 22V10"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3ZM14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"
        />
    </Svg>
)

const ShipIconMedium: React.FC<ShipIconProps> = () => (
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
            d="M17.017 10.308c.725.292 1.175 1.15 1.008 1.909l-.342 1.55c-.591 2.666-2.683 4.566-5.7 4.566H8.017c-3.017 0-5.109-1.9-5.7-4.566l-.342-1.55c-.167-.759.283-1.617 1.008-1.909l1.184-.475 4.591-1.841a3.365 3.365 0 0 1 2.484 0l4.591 1.841 1.184.475ZM10 18.333v-10"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.834 6.667v3.166l-4.592-1.841a3.364 3.364 0 0 0-2.483 0L4.167 9.832V6.666c0-1.375 1.125-2.5 2.5-2.5h6.667c1.375 0 2.5 1.125 2.5 2.5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M12.084 4.167H7.917V2.5c0-.458.375-.833.833-.833h2.5c.459 0 .834.375.834.833v1.667Z"
        />
    </Svg>
)

const ShipIconSmall: React.FC<ShipIconProps> = () => (
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
            d="M15.315 9.278c.652.262 1.057 1.034.907 1.717l-.307 1.395c-.533 2.4-2.415 4.11-5.13 4.11h-3.57c-2.715 0-4.598-1.71-5.13-4.11l-.308-1.395c-.15-.682.255-1.455.908-1.717L3.75 8.85l4.132-1.657a3.028 3.028 0 0 1 2.235 0L14.25 8.85l1.065.428ZM9 16.5v-9"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M14.25 6v2.85l-4.133-1.657a3.028 3.028 0 0 0-2.234 0L3.75 8.85V6A2.257 2.257 0 0 1 6 3.75h6A2.257 2.257 0 0 1 14.25 6ZM10.875 3.75h-3.75v-1.5c0-.413.338-.75.75-.75h2.25c.412 0 .75.337.75.75v1.5Z"
        />
    </Svg>
)

export default ShipIcon;