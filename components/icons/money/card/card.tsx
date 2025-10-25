import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CardIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CardIcon: React.FC<CardIconProps> = (props) => {
    if (props.size === "large") return <CardIconLarge {...props} />

    if (props.size === "medium") return <CardIconMedium {...props} />

    return <CardIconSmall {...props} />
};

const CardIconLarge: React.FC<CardIconProps> = () => (
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
            d="M2 8.505h20M6 16.505h2M10.5 16.505h4"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6.44 3.505h11.11c3.56 0 4.45.88 4.45 4.39v8.21c0 3.51-.89 4.39-4.44 4.39H6.44c-3.55.01-4.44-.87-4.44-4.38v-8.22c0-3.51.89-4.39 4.44-4.39Z"
        />
    </Svg>
)

const CardIconMedium: React.FC<CardIconProps> = () => (
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
            d="M1.666 7.087h16.667M5 13.754h1.667M8.75 13.754h3.333"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M5.366 2.92h9.258c2.967 0 3.709.734 3.709 3.659v6.842c0 2.925-.742 3.658-3.7 3.658H5.366c-2.958.008-3.7-.725-3.7-3.65v-6.85c0-2.925.742-3.658 3.7-3.658Z"
        />
    </Svg>
)

const CardIconSmall: React.FC<CardIconProps> = () => (
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
            d="M1.5 6.379h15M4.5 12.379H6M7.875 12.379h3"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M4.83 2.629h8.332c2.67 0 3.338.66 3.338 3.292v6.158c0 2.632-.668 3.292-3.33 3.292H4.83c-2.663.008-3.33-.652-3.33-3.285V5.921c0-2.632.667-3.292 3.33-3.292Z"
        />
    </Svg>
)

export default CardIcon;