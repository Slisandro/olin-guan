import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SunIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SunIcon: React.FC<SunIconProps> = (props) => {

    if (props.size === "large") return <SunIconLarge {...props} />

    if (props.size === "medium") return <SunIconMedium {...props} />

    return <SunIconSmall {...props} />
};

const SunIconLarge: React.FC<SunIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z"
        />
    </Svg>
)

const SunIconMedium: React.FC<SunIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 15.417a5.417 5.417 0 1 0 0-10.833 5.417 5.417 0 0 0 0 10.833Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="m15.95 15.95-.108-.108m0-11.684.108-.108-.108.108ZM4.05 15.95l.109-.108-.109.108ZM10 1.733v-.067.067Zm0 16.6v-.066.066ZM1.734 10h-.067.067Zm16.6 0h-.067.067ZM4.159 4.158 4.05 4.05l.109.108Z"
        />
    </Svg>
)

const SunIconSmall: React.FC<SunIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 13.875a4.875 4.875 0 1 0 0-9.75 4.875 4.875 0 0 0 0 9.75Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14.355 14.355-.098-.098m0-10.514.098-.098-.098.098ZM3.646 14.354l.098-.098-.098.098ZM9 1.56V1.5v.06ZM9 16.5v-.06.06ZM1.56 9H1.5h.06ZM16.5 9h-.06.06ZM3.742 3.742l-.097-.097.098.098Z"
        />
    </Svg>
)

export default SunIcon;