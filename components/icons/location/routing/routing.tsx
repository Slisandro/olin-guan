import * as React from "react";
import Svg, { Path } from "react-native-svg";

type RoutingIconProps = {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const RoutingIcon: React.FC<RoutingIconProps> = (props) => {
    if (props.size === "extra-large") return <RoutingIconExtraLarge {...props} />

    if (props.size === "large") return <RoutingIconLarge {...props} />

    if (props.size === "medium") return <RoutingIconMedium {...props} />

    if (props.size === "small") return <RoutingIconSmall {...props} />

    return <RoutingIconExtraSmall {...props} />
};

const RoutingIconExtraLarge: React.FC<RoutingIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.5}
            d="M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6ZM15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.486 5.5h.011M18.486 17.5h.011"
        />
    </Svg>
)

const RoutingIconLarge: React.FC<RoutingIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M1.725 3.833C2.392.95 6.734.95 7.392 3.833c.392 1.692-.683 3.125-1.617 4.017a1.78 1.78 0 0 1-2.441 0c-.925-.892-2-2.325-1.609-4.017ZM12.558 13.833c.667-2.883 5.034-2.883 5.7 0 .392 1.692-.683 3.125-1.625 4.017a1.791 1.791 0 0 1-2.45 0c-.941-.892-2.016-2.325-1.625-4.017Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 4.167h2.233c1.541 0 2.258 1.908 1.1 2.925l-6.659 5.824c-1.158 1.009-.441 2.917 1.092 2.917H10"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M4.571 4.583h.01M15.405 14.583h.01"
        />
    </Svg>
)

const RoutingIconMedium: React.FC<RoutingIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.125}
            d="M1.553 3.45c.6-2.595 4.508-2.595 5.1 0 .353 1.522-.615 2.812-1.455 3.615a1.603 1.603 0 0 1-2.197 0c-.833-.803-1.8-2.093-1.448-3.615ZM11.303 12.45c.6-2.595 4.53-2.595 5.13 0 .352 1.522-.615 2.812-1.463 3.615a1.612 1.612 0 0 1-2.205 0c-.847-.803-1.815-2.093-1.462-3.615Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 3.75h2.01c1.388 0 2.033 1.718.99 2.633l-5.992 5.242c-1.043.908-.398 2.625.982 2.625H9"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.114 4.125h.008M13.864 13.125h.008"
        />
    </Svg>
)

const RoutingIconSmall: React.FC<RoutingIconProps> = () => (
    <Svg
        width={14}
        height={14}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={0.875}
            d="M1.208 2.683c.467-2.018 3.506-2.018 3.967 0 .274 1.184-.478 2.188-1.132 2.812-.478.455-1.23.449-1.709 0-.647-.624-1.4-1.628-1.126-2.812ZM8.791 9.683c.467-2.018 3.524-2.018 3.99 0 .274 1.184-.478 2.188-1.137 2.812a1.254 1.254 0 0 1-1.715 0c-.66-.624-1.412-1.628-1.138-2.812Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M7 2.917h1.563c1.08 0 1.581 1.336.77 2.047l-4.66 4.078c-.811.706-.31 2.041.764 2.041H7"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.167}
            d="M3.2 3.208h.006M10.783 10.208h.007"
        />
    </Svg>
)

const RoutingIconExtraSmall: React.FC<RoutingIconProps> = () => (
    <Svg
        width={12}
        height={12}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={0.75}
            d="M1.035 2.3c.4-1.73 3.005-1.73 3.4 0 .235 1.015-.41 1.875-.97 2.41-.41.39-1.055.385-1.465 0-.555-.535-1.2-1.395-.965-2.41ZM7.535 8.3c.4-1.73 3.02-1.73 3.42 0 .235 1.015-.41 1.875-.975 2.41-.41.39-1.06.385-1.47 0-.565-.535-1.21-1.395-.975-2.41Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.75}
            d="M6 2.5h1.34c.925 0 1.355 1.145.66 1.755L4.005 7.75c-.695.605-.265 1.75.655 1.75H6"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.743 2.75h.006M9.243 8.75h.006"
        />
    </Svg>
)

export default RoutingIcon;