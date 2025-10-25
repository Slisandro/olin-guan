import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type PlaneIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PlaneIcon: React.FC<PlaneIconProps> = (props) => {
    if (props.size === "large") return <PlaneIconLarge {...props} />

    if (props.size === "medium") return <PlaneIconMedium {...props} />

    return <PlaneIconSmall {...props} />
};

const PlaneIconLarge: React.FC<PlaneIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 10h4a2 2 0 1 1 0 4h-4l-4 7H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h4L9 3h3l4 7Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PlaneIconMedium: React.FC<PlaneIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M13.334 8.333h3.333a1.667 1.667 0 1 1 0 3.334h-3.333L10 17.5H7.5l1.667-5.833H5.834l-1.667 1.666h-2.5L3.334 10 1.667 6.667h2.5l1.667 1.666h3.333L7.5 2.5H10l3.334 5.833Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PlaneIconSmall: React.FC<PlaneIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.125}
                d="M12 7.5h3a1.5 1.5 0 0 1 0 3h-3l-3 5.25H6.75l1.5-5.25h-3L3.75 12H1.5L3 9 1.5 6h2.25l1.5 1.5h3l-1.5-5.25H9l3 5.25Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default PlaneIcon;