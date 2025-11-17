import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type BusSquareIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const BusSquareIcon: React.FC<BusSquareIconProps> = (props) => {
    if (props.size === "large") return <BusSquareIconLarge {...props} />

    if (props.size === "medium") return <BusSquareIconMedium {...props} />

    return <BusSquareIconSmall {...props} />
};

const BusSquareIconLarge: React.FC<BusSquareIconProps> = ({ color }) => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Circle
            cx={6}
            cy={17}
            r={2}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Circle
            cx={18}
            cy={17}
            r={2}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Path
            fill={color}
            d="M4 17.75a.75.75 0 0 0 0-1.5v1.5ZM2 17h-.75c0 .414.336.75.75.75V17Zm20 0v.75a.75.75 0 0 0 .75-.75H22Zm-2-.75a.75.75 0 0 0 0 1.5v-1.5Zm-4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM4 17v-.75H2v1.5h2V17Zm-2 0h.75V6h-1.5v11H2ZM2 6h.75A.25.25 0 0 1 3 5.75v-1.5A1.75 1.75 0 0 0 1.25 6H2Zm1-1v.75h14v-1.5H3V5Zm14 0v.75c1.076 0 2.12.61 2.925 1.736.804 1.126 1.325 2.72 1.325 4.514h1.5c0-2.071-.599-3.978-1.604-5.386C20.14 5.208 18.686 4.25 17 4.25V5Zm5 7h-.75v5h1.5v-5H22Zm0 5v-.75h-2v1.5h2V17Zm-6 0v-.75H8v1.5h8V17Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m16 5 1.5 7H22M2 10h15M7 5v5M12 5v5"
        />
    </Svg>
)

const BusSquareIconMedium: React.FC<BusSquareIconProps> = ({ color }) => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Circle
            cx={5}
            cy={14.167}
            r={1.667}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Circle
            cx={15}
            cy={14.167}
            r={1.667}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
        />
        <Path
            fill={color}
            d="M3.333 14.792a.625.625 0 1 0 0-1.25v1.25Zm-1.667-.625h-.625c0 .345.28.625.625.625v-.625Zm16.667 0v.625c.345 0 .625-.28.625-.625h-.625Zm-1.667-.625a.625.625 0 0 0 0 1.25v-1.25Zm-3.333 1.25a.625.625 0 1 0 0-1.25v1.25Zm-6.667-1.25a.625.625 0 0 0 0 1.25v-1.25Zm-3.333.625v-.625H1.666v1.25h1.667v-.625Zm-1.667 0h.625V5h-1.25v9.167h.625Zm0-9.167h.625c0-.115.093-.208.208-.208v-1.25c-.805 0-1.458.653-1.458 1.458h.625Zm.833-.833v.625h11.667v-1.25H2.499v.625Zm11.667 0v.625c.896 0 1.767.507 2.438 1.447.67.938 1.104 2.266 1.104 3.761h1.25c0-1.726-.5-3.315-1.337-4.488-.837-1.172-2.05-1.97-3.455-1.97v.625ZM18.333 10h-.625v4.167h1.25V10h-.625Zm0 4.167v-.625h-1.667v1.25h1.667v-.625Zm-5 0v-.625H6.666v1.25h6.667v-.625Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M13.333 4.167 14.583 10h3.75M1.667 8.333h12.5M5.834 4.167v4.166M10 4.167v4.166"
        />
    </Svg>
)

const BusSquareIconSmall: React.FC<BusSquareIconProps> = ({ color }) => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Circle
            cx={4.5}
            cy={12.75}
            r={1.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Circle
            cx={13.5}
            cy={12.75}
            r={1.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
        />
        <Path
            fill={color}
            d="M3 13.313a.562.562 0 1 0 0-1.126v1.126Zm-1.5-.563H.937c0 .31.252.563.563.563v-.563Zm15 0v.563c.31 0 .563-.252.563-.563H16.5Zm-1.5-.563a.562.562 0 1 0 0 1.126v-1.126Zm-3 1.126a.562.562 0 1 0 0-1.126v1.126Zm-6-1.126a.562.562 0 1 0 0 1.126v-1.126Zm-3 .563v-.563H1.5v1.126H3v-.563Zm-1.5 0h.563V4.5H.937v8.25H1.5Zm0-8.25h.563c0-.104.083-.188.187-.188V3.188c-.725 0-1.313.588-1.313 1.313H1.5Zm.75-.75v.563h10.5V3.187H2.25v.563Zm10.5 0v.563c.807 0 1.59.456 2.194 1.302.603.844.993 2.039.993 3.385h1.126c0-1.553-.45-2.983-1.204-4.04-.753-1.054-1.845-1.772-3.109-1.772v.562ZM16.5 9h-.563v3.75h1.126V9H16.5Zm0 3.75v-.563H15v1.126h1.5v-.563Zm-4.5 0v-.563H6v1.126h6v-.563Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M12 3.75 13.125 9H16.5M1.5 7.5h11.25M5.25 3.75V7.5M9 3.75V7.5"
        />
    </Svg>
)

export default BusSquareIcon;