import * as React from "react";
import Svg, { Path } from "react-native-svg";

type NavigationMapIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const NavigationMapIcon: React.FC<NavigationMapIconProps> = (props) => {
    if (props.size === "extra-large") return <NavigationMapIconExtraLarge {...props} />

    if (props.size === "large") return <NavigationMapIconLarge {...props} />

    if (props.size === "medium") return <NavigationMapIconMedium {...props} />

    return <NavigationMapIconSmall {...props} />
};

const NavigationMapIconExtraLarge: React.FC<NavigationMapIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#9C9FAF"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M13.076 13H10a2 2 0 1 0 0 4h9a2 2 0 1 1 0 4H3"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.5}
            d="M17.267 6.342a1.317 1.317 0 1 1-2.634 0 1.317 1.317 0 0 1 2.634 0Z"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.5}
            d="M19.9 6.342c0 2.181-2.633 5.267-3.95 5.267-1.316 0-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0Z"
        />
    </Svg>
)

const NavigationMapIconLarge: React.FC<NavigationMapIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#9C9FAF"
            strokeLinecap="round"
            strokeWidth={1.25}
            d="M10.896 10.833H8.333a1.667 1.667 0 1 0 0 3.334h7.5a1.667 1.667 0 1 1 0 3.333H2.5"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.25}
            d="M14.39 5.285a1.097 1.097 0 1 1-2.195 0 1.097 1.097 0 0 1 2.194 0Z"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.25}
            d="M16.584 5.285c0 1.818-2.195 4.389-3.292 4.389S10 7.103 10 5.284a3.292 3.292 0 1 1 6.584 0Z"
        />
    </Svg>
)

const NavigationMapIconMedium: React.FC<NavigationMapIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#9C9FAF"
            strokeLinecap="round"
            strokeWidth={1.125}
            d="M9.807 9.75H7.5a1.5 1.5 0 0 0 0 3h6.75a1.5 1.5 0 0 1 0 3h-12"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.125}
            d="M12.95 4.756a.988.988 0 1 1-1.975 0 .988.988 0 0 1 1.975 0Z"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={1.125}
            d="M14.925 4.756c0 1.636-1.975 3.95-2.962 3.95C10.975 8.707 9 6.393 9 4.756a2.963 2.963 0 0 1 5.925 0Z"
        />
    </Svg>
)

const NavigationMapIconSmall: React.FC<NavigationMapIconProps> = () => (
    <Svg
        width={14}
        height={14}
        fill="none"
    >
        <Path
            stroke="#9C9FAF"
            strokeLinecap="round"
            strokeWidth={0.875}
            d="M7.628 7.583H5.833a1.167 1.167 0 0 0 0 2.334h5.25a1.167 1.167 0 1 1 0 2.333H1.75"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={0.875}
            d="M10.072 3.7a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.537 0Z"
        />
        <Path
            stroke="#9C9FAF"
            strokeWidth={0.875}
            d="M11.609 3.7c0 1.272-1.537 3.072-2.305 3.072C8.536 6.772 7 4.972 7 3.699a2.304 2.304 0 1 1 4.609 0Z"
        />
    </Svg>
)

export default NavigationMapIcon;