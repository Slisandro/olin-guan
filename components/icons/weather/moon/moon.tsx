import * as React from "react";
import Svg, { Path } from "react-native-svg";

type MoonIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const MoonIcon: React.FC<MoonIconProps> = (props) => {
    if (props.size === "extra-large") return <MoonIconExtraLarge {...props} />

    if (props.size === "large") return <MoonIconLarge {...props} />

    if (props.size === "medium") return <MoonIconMedium {...props} />

    return <MoonIconSmall {...props} />
};

const MoonIconExtraLarge: React.FC<MoonIconProps> = () => (
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
            d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z"
        />
    </Svg>
)

const MoonIconLarge: React.FC<MoonIconProps> = () => (
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
            d="M1.692 10.35c.3 4.292 3.941 7.783 8.3 7.975 3.075.133 5.825-1.3 7.475-3.558.683-.925.316-1.542-.825-1.334-.559.1-1.134.142-1.734.117-4.075-.167-7.408-3.575-7.425-7.6a7.413 7.413 0 0 1 .625-3.042c.45-1.033-.091-1.525-1.133-1.083-3.3 1.392-5.558 4.717-5.283 8.525Z"
        />
    </Svg>
)

const MoonIconMedium: React.FC<MoonIconProps> = () => (
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
            d="M1.522 9.315c.27 3.863 3.548 7.005 7.47 7.178a7.882 7.882 0 0 0 6.728-3.203c.615-.832.285-1.387-.743-1.2a7.12 7.12 0 0 1-1.56.105c-3.667-.15-6.667-3.218-6.682-6.84a6.672 6.672 0 0 1 .562-2.738c.405-.93-.082-1.372-1.02-.975-2.97 1.253-5.002 4.245-4.755 7.673Z"
        />
    </Svg>
)

const MoonIconSmall: React.FC<MoonIconProps> = () => (
    <Svg
        width={16}
        height={17}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M.583 8.381c.27 3.863 3.547 7.005 7.47 7.178a7.882 7.882 0 0 0 6.727-3.203c.615-.832.285-1.387-.742-1.2a7.12 7.12 0 0 1-1.56.105c-3.668-.15-6.668-3.217-6.683-6.84a6.672 6.672 0 0 1 .563-2.737C6.763.754 6.275.31 5.338.709 2.368 1.96.335 4.954.583 8.38Z"
        />
    </Svg>
)

export default MoonIcon;