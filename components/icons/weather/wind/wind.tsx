import * as React from "react";
import Svg, { Path } from "react-native-svg";

type WindIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const WindIcon: React.FC<WindIconProps> = (props) => {

    if (props.size === "large") return <WindIconLarge {...props} />

    if (props.size === "medium") return <WindIconMedium {...props} />

    return <WindIconSmall {...props} />
};

const WindIconLarge: React.FC<WindIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M2 9h7.31a2.69 2.69 0 1 0-2.69-2.69v.38"
        />
    </Svg>
)

const WindIconMedium: React.FC<WindIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M1.667 12.5h13.75a2.92 2.92 0 0 1 2.917 2.917 2.92 2.92 0 0 1-2.917 2.916 2.92 2.92 0 0 1-2.917-2.916V15M1.667 10h13.75c1.6 0 2.917-1.309 2.917-2.917a2.93 2.93 0 0 0-2.917-2.917A2.925 2.925 0 0 0 12.5 7.083V7.5"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M1.667 7.5h6.092a2.242 2.242 0 1 0-2.242-2.242v.317"
        />
    </Svg>
)

const WindIconSmall: React.FC<WindIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M1.5 11.25h12.375a2.628 2.628 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625 2.628 2.628 0 0 1-2.625-2.625V13.5M1.5 9h12.375A2.633 2.633 0 0 0 16.5 6.375a2.638 2.638 0 0 0-2.625-2.625 2.633 2.633 0 0 0-2.625 2.625v.375"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M1.5 6.75h5.482a2.018 2.018 0 1 0-2.017-2.017v.285"
        />
    </Svg>
)

export default WindIcon;