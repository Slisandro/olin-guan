import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloudSnowIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CloudSnowIcon: React.FC<CloudSnowIconProps> = (props) => {

    if (props.size === "large") return <CloudSnowIconLarge {...props} />

    if (props.size === "medium") return <CloudSnowIconMedium {...props} />

    return <CloudSnowIconSmall {...props} />
};

const CloudSnowIconLarge: React.FC<CloudSnowIconProps> = () => (
    <Svg width={24} height={24} fill="none">
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14C15.9.13 2.43 3.67 5.62 12.56"
    />
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41"
    />
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.995 18.5h.01M8.995 18.5h.01M10.995 21.5h.01"
    />
  </Svg>
)

const CloudSnowIconMedium: React.FC<CloudSnowIconProps> = () => (
    <Svg width={20} height={20} fill="none">
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M13.841 16.667a4.436 4.436 0 0 0 3.017-1.159c2.725-2.383 1.267-7.166-2.325-7.616C13.25.108 2.025 3.058 4.683 10.467"
    />
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M6.067 10.808a3.037 3.037 0 0 0-1.425-.333c-3.884.275-3.875 5.925 0 6.2M13.184 8.242c.433-.217.9-.334 1.383-.342"
    />
    <Path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10.83 15.417h.007M7.496 15.417h.007M9.163 17.917h.007"
    />
  </Svg>
)

const CloudSnowIconSmall: React.FC<CloudSnowIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M12.457 15a3.993 3.993 0 0 0 2.715-1.043c2.453-2.145 1.14-6.45-2.092-6.855C11.925.097 1.822 2.752 4.215 9.42"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M5.46 9.727a2.733 2.733 0 0 0-1.282-.3c-3.495.248-3.487 5.333 0 5.58M11.865 7.417c.39-.195.81-.3 1.245-.307"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.747 13.875h.006M6.747 13.875h.006M8.247 16.125h.006"
        />
    </Svg>
)

export default CloudSnowIcon;