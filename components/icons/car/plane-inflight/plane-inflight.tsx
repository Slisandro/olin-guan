import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type PlaneInflightIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PlaneInflightIcon: React.FC<PlaneInflightIconProps> = (props) => {
    if (props.size === "large") return <PlaneInflightIconLarge {...props} />

    if (props.size === "medium") return <PlaneInflightIconMedium {...props} />

    return <PlaneInflightIconSmall {...props} />
};

const PlaneInflightIconLarge: React.FC<PlaneInflightIconProps> = () => (
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
                d="M15 11.085h5a2 2 0 1 1 0 4H5l-3-6h3l2 2h3l-2-7h3l4 7Z"
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

const PlaneInflightIconMedium: React.FC<PlaneInflightIconProps> = () => (
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
                d="M12.5 9.237h4.167a1.667 1.667 0 1 1 0 3.334h-12.5l-2.5-5h2.5l1.667 1.666h2.5L6.667 3.404h2.5L12.5 9.237Z"
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

const PlaneInflightIconSmall: React.FC<PlaneInflightIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G clipPath="url(#a)">
            <G
                stroke="#646464"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.125}
                clipPath="url(#b)"
            >
                <Path
                    d="M11.25 8.314H15a1.5 1.5 0 0 1 0 3H3.75l-2.25-4.5h2.25l1.5 1.5H7.5L6 3.064h2.25l3 5.25Z"
                    clipRule="evenodd"
                />
                <Path d="M2.25 15.75h13.5" />
            </G>
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
            <ClipPath id="b">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default PlaneInflightIcon;