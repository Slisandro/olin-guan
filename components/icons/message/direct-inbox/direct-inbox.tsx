import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DirectInboxIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DirectInboxIcon: React.FC<DirectInboxIconProps> = (props) => {
    if (props.size === "large") return <DirectInboxIconLarge {...props} />;

    if (props.size === "medium") return <DirectInboxIconMedium {...props} />;

    return <DirectInboxIconSmall {...props} />;
};

const DirectInboxIconLarge: React.FC<DirectInboxIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2v7l2-2M12 9l-2-2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"
        />
    </Svg>
);

const DirectInboxIconMedium: React.FC<DirectInboxIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 1.667V7.5l1.667-1.667M10 7.5 8.333 5.833M1.65 10.833h3.675c.317 0 .6.175.742.459l.975 1.95c.283.566.858.925 1.492.925h2.941c.634 0 1.209-.359 1.492-.925l.975-1.95a.832.832 0 0 1 .742-.459h3.633"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M5.834 3.442c-2.95.433-4.167 2.166-4.167 5.725V12.5c0 4.167 1.667 5.833 5.833 5.833h5c4.167 0 5.834-1.666 5.834-5.833V9.167c0-3.559-1.217-5.292-4.167-5.725"
        />
    </Svg>
);

const DirectInboxIconSmall: React.FC<DirectInboxIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 1.5v5.25l1.5-1.5M9 6.75l-1.5-1.5M1.485 9.75h3.308c.285 0 .54.158.667.412l.878 1.755a1.5 1.5 0 0 0 1.342.833h2.648a1.5 1.5 0 0 0 1.342-.832l.878-1.755a.75.75 0 0 1 .667-.413h3.27"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M5.25 3.098c-2.655.39-3.75 1.95-3.75 5.152v3C1.5 15 3 16.5 6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-3c0-3.202-1.095-4.762-3.75-5.152"
        />
    </Svg>
);

export default DirectInboxIcon;
