import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type PlaneArrivalIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PlaneArrivalIcon: React.FC<PlaneArrivalIconProps> = (props) => {
    if (props.size === "large") return <PlaneArrivalIconLarge {...props} />

    if (props.size === "medium") return <PlaneArrivalIconMedium {...props} />

    return <PlaneArrivalIconSmall {...props} />
};

const PlaneArrivalIconLarge: React.FC<PlaneArrivalIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path
                d="m15.156 11.81 4.83 1.295a2 2 0 0 1-1.035 3.863L4.46 13.086 3.118 6.514l2.898.777 1.414 2.45 2.898.776-.12-7.28 2.897.777 2.052 7.797Z"
                clipRule="evenodd"
            />
            <Path d="M3 21h18" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PlaneArrivalIconMedium: React.FC<PlaneArrivalIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path
                d="m12.63 9.842 4.025 1.079a1.667 1.667 0 0 1-.863 3.22L3.718 10.904 2.598 5.43l2.414.647 1.179 2.04 2.415.648-.1-6.066 2.414.647 1.71 6.497Z"
                clipRule="evenodd"
            />
            <Path d="M2.5 17.5h15" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PlaneArrivalIconSmall: React.FC<PlaneArrivalIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path
                d="m11.368 8.858 3.622.97a1.5 1.5 0 1 1-.777 2.898L3.347 9.815l-1.009-4.93 2.173.583 1.061 1.837 2.173.582-.09-5.459 2.174.582 1.539 5.848Z"
                clipRule="evenodd"
            />
            <Path d="M2.25 15.75h13.5" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default PlaneArrivalIcon;