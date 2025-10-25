import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SunFogIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SunFogIcon: React.FC<SunFogIconProps> = (props) => {

    if (props.size === "large") return <SunFogIconLarge {...props} />

    if (props.size === "medium") return <SunFogIconMedium {...props} />

    return <SunFogIconSmall {...props} />
};

const SunFogIconLarge: React.FC<SunFogIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.5 12a6.5 6.5 0 1 0-13 0"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m4.99 4.99-.13-.13m14.15.13.13-.13-.13.13ZM12 2.08V2v.08ZM2.08 12H2h.08ZM22 12h-.08.08Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M4 15h16M6 18h12M9 21h6"
        />
    </Svg>
)

const SunFogIconMedium: React.FC<SunFogIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M15.416 10a5.417 5.417 0 1 0-10.833 0"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M4.159 4.158 4.05 4.05m11.792.108.108-.108-.108.108ZM10 1.733v-.066.066ZM1.734 10h-.067.067Zm16.6 0h-.067.067Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M3.333 12.5h13.333M5 15h10M7.5 17.5h5"
        />
    </Svg>
)

const SunFogIconSmall: React.FC<SunFogIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.875 9a4.875 4.875 0 1 0-9.75 0"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3.742 3.742-.097-.097m10.613.097.097-.097-.098.097ZM9 1.56V1.5v.06ZM1.56 9H1.5h.06ZM16.5 9h-.06.06Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M3 11.25h12M4.5 13.5h9M6.75 15.75h4.5"
        />
    </Svg>
)

export default SunFogIcon;