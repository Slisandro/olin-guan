import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SearchNormalIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SearchNormalIcon: React.FC<SearchNormalIconProps> = (props) => {

    if (props.size === "large") return <SearchNormalIconLarge {...props} />

    if (props.size === "medium") return <SearchNormalIconMedium {...props} />

    return <SearchNormalIconSmall {...props} />
};

const SearchNormalIconLarge: React.FC<SearchNormalIconProps> = ({ color }) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const SearchNormalIconMedium: React.FC<SearchNormalIconProps> = ({ color }) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M9.584 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM18.334 18.334l-1.667-1.667"
            stroke={color}
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const SearchNormalIconSmall: React.FC<SearchNormalIconProps> = ({ color }) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
    >
        <Path
            d="M8.625 15.75a7.125 7.125 0 100-14.25 7.125 7.125 0 000 14.25zM16.5 16.5L15 15"
            stroke={color}
            strokeWidth={1.125}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SearchNormalIcon;