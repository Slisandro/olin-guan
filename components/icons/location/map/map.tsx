import * as React from "react";
import Svg, { Path } from "react-native-svg";

type MapIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const MapIcon: React.FC<MapIconProps> = (props) => {
    if (props.size === "extra-large") return <MapIconExtraLarge {...props} />

    if (props.size === "large") return <MapIconLarge {...props} />

    if (props.size === "medium") return <MapIconMedium {...props} />

    if (props.size === "small") return <MapIconSmall {...props} />

    return <MapIconExtraSmall {...props} />
};

const MapIconExtraLarge: React.FC<MapIconProps> = () => (
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
            d="M2.29 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05L3.3 6.05c-.56.32-1.01 1.1-1.01 1.73ZM8.56 4v13M15.73 6.62V20"
        />
    </Svg>
)

const MapIconLarge: React.FC<MapIconProps> = () => (
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
            d="M1.908 6.483v8.109c0 1.583 1.125 2.233 2.492 1.45l1.958-1.117c.425-.242 1.134-.267 1.575-.042l4.375 2.192c.442.217 1.15.2 1.575-.041l3.608-2.067c.459-.267.842-.917.842-1.45V5.408c0-1.583-1.125-2.233-2.491-1.45l-1.959 1.117c-.425.242-1.133.267-1.575.042L7.933 2.933c-.441-.216-1.15-.2-1.575.042L2.75 5.042c-.467.266-.842.916-.842 1.441ZM7.133 3.333v10.834M13.108 5.517v11.15"
        />
    </Svg>
)

const MapIconMedium: React.FC<MapIconProps> = () => (
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
            d="M1.718 5.835v7.298c0 1.425 1.012 2.01 2.242 1.305l1.763-1.006c.382-.217 1.02-.24 1.417-.037l3.938 1.973c.397.194 1.035.18 1.417-.038l3.248-1.86c.412-.24.757-.825.757-1.305V4.867c0-1.425-1.012-2.01-2.242-1.305l-1.763 1.005c-.382.218-1.02.24-1.417.038L7.14 2.64c-.397-.195-1.035-.18-1.417.037l-3.248 1.86c-.42.24-.757.825-.757 1.298ZM6.42 3v9.75M11.798 4.965V15"
        />
    </Svg>
)

const MapIconSmall: React.FC<MapIconProps> = () => (
    <Svg
        width={14}
        height={14}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M1.336 4.538v5.676c0 1.108.787 1.563 1.744 1.015l1.37-.782c.298-.169.794-.186 1.103-.029l3.063 1.534c.31.152.805.14 1.102-.029l2.526-1.446c.321-.187.59-.642.59-1.015V3.786c0-1.109-.788-1.564-1.745-1.015l-1.37.781c-.298.17-.794.187-1.103.03L5.553 2.053c-.309-.151-.805-.14-1.102.03L1.925 3.528c-.327.187-.59.642-.59 1.01ZM4.993 2.333v7.584M9.176 3.862v7.805"
        />
    </Svg>
)

const MapIconExtraSmall: React.FC<MapIconProps> = () => (
    <Svg
        width={12}
        height={12}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.75}
            d="M1.146 3.89v4.865c0 .95.675 1.34 1.495.87l1.175-.67c.255-.145.68-.16.945-.025l2.625 1.315c.265.13.69.12.945-.025l2.165-1.24c.274-.16.505-.55.505-.87V3.245c0-.95-.675-1.34-1.495-.87l-1.175.67c-.255.145-.68.16-.945.025L4.76 1.76c-.265-.13-.69-.12-.945.025L1.65 3.025c-.28.16-.505.55-.505.865ZM4.28 2v6.5M7.865 3.31V10"
        />
    </Svg>
)

export default MapIcon;