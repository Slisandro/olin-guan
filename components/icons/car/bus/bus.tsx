import * as React from "react";
import Svg, { Path } from "react-native-svg";

type BusIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const BusIcon: React.FC<BusIconProps> = (props) => {
    if (props.size === "large") return <BusIconLarge {...props} />

    if (props.size === "medium") return <BusIconMedium {...props} />

    return <BusIconSmall {...props} />
};

const BusIconLarge: React.FC<BusIconProps> = () => (
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
            d="M16.9 22H7.1C5.4 22 4 20.61 4 18.9V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.71-1.39 3.1-3.1 3.1Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.5 13h-13c-.83 0-1.5-.67-1.5-1.5v-2C4 8.67 4.67 8 5.5 8h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M8.495 17.7h.008M15.495 17.7h.009"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 5h5"
        />
    </Svg>
)

const BusIconMedium: React.FC<BusIconProps> = () => (
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
            d="M14.083 18.333H5.916a2.591 2.591 0 0 1-2.583-2.583V4.25a2.59 2.59 0 0 1 2.583-2.583h8.167a2.59 2.59 0 0 1 2.583 2.583v11.5a2.586 2.586 0 0 1-2.583 2.583Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.416 10.833H4.583c-.692 0-1.25-.558-1.25-1.25V7.916c0-.691.558-1.25 1.25-1.25h10.833c.692 0 1.25.559 1.25 1.25v1.667c0 .692-.558 1.25-1.25 1.25Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.083}
            d="M7.08 14.75h.007M12.912 14.75h.008"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.917 4.167h4.167"
        />
    </Svg>
)

const BusIconSmall: React.FC<BusIconProps> = () => (
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
            d="M12.675 16.5h-7.35A2.332 2.332 0 0 1 3 14.175V3.825A2.332 2.332 0 0 1 5.325 1.5h7.35A2.332 2.332 0 0 1 15 3.825v10.35a2.327 2.327 0 0 1-2.325 2.325Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.875 9.75h-9.75A1.123 1.123 0 0 1 3 8.625v-1.5C3 6.503 3.502 6 4.125 6h9.75C14.498 6 15 6.503 15 7.125v1.5c0 .623-.502 1.125-1.125 1.125Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.875}
            d="M6.37 13.275h.008M11.62 13.275h.008"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M7.125 3.75h3.75"
        />
    </Svg>
)

export default BusIcon;