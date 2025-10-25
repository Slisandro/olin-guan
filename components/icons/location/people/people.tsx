import * as React from "react";
import Svg, { Path } from "react-native-svg";

type PeopleIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PeopleIcon: React.FC<PeopleIconProps> = (props) => {
    if (props.size === "large") return <PeopleIconLarge {...props} />

    if (props.size === "medium") return <PeopleIconMedium {...props} />

    return <PeopleIconSmall {...props} />
};

const PeopleIconLarge: React.FC<PeopleIconProps> = () => (
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
            d="M14 16h2.127a4 4 0 0 1 3.073 1.44l1.067 1.28c1.085 1.302.159 3.28-1.537 3.28H5.27c-1.695 0-2.622-1.978-1.536-3.28l1.067-1.28A4 4 0 0 1 7.874 16H10"
        />
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z"
        />
    </Svg>
)

const PeopleIconMedium: React.FC<PeopleIconProps> = () => (
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
            d="M11.666 13.334h1.772c.99 0 1.928.439 2.561 1.199l.89 1.067c.904 1.085.132 2.734-1.28 2.734H4.391c-1.414 0-2.185-1.649-1.28-2.734L4 14.533a3.333 3.333 0 0 1 2.561-1.2h1.772"
        />
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 5a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 10 5Zm0 0a3.333 3.333 0 0 1 3.333 3.333V10c0 .46-.373.833-.834.833a.833.833 0 0 0-.833.834v2.5a1.667 1.667 0 1 1-3.333 0v-2.5a.833.833 0 0 0-.834-.834.833.833 0 0 1-.833-.833V8.333A3.333 3.333 0 0 1 9.999 5Z"
        />
    </Svg>
)

const PeopleIconSmall: React.FC<PeopleIconProps> = () => (
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
            d="M10.5 12h1.594a3 3 0 0 1 2.305 1.08l.8.96c.815.977.12 2.46-1.152 2.46H3.952c-1.272 0-1.966-1.483-1.152-2.46l.8-.96A3 3 0 0 1 5.905 12H7.5"
        />
        <Path
            stroke="#646464"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M8.999 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0a3 3 0 0 1 3 3V9a.75.75 0 0 1-.75.75.75.75 0 0 0-.75.75v2.25a1.5 1.5 0 1 1-3 0V10.5a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V7.5a3 3 0 0 1 3-3Z"
        />
    </Svg>
)

export default PeopleIcon;