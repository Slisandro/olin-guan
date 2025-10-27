import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DirectSendIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DirectSendIcon: React.FC<DirectSendIconProps> = (props) => {
    if (props.size === "large") return <DirectSendIconLarge {...props} />;

    if (props.size === "medium") return <DirectSendIconMedium {...props} />;

    return <DirectSendIconSmall {...props} />;
};

const DirectSendIconLarge: React.FC<DirectSendIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9V2l-2 2M12 2l2 2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 5.13c-3.54.52-5 2.6-5 6.87v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87"
        />
    </Svg>
);

const DirectSendIconMedium: React.FC<DirectSendIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 7.5V1.667L8.333 3.333M10 1.667l1.667 1.666M1.65 10.833h3.675c.317 0 .6.175.742.459l.975 1.95c.283.566.858.925 1.492.925h2.941c.634 0 1.209-.359 1.492-.925l.975-1.95a.832.832 0 0 1 .742-.459h3.633"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M5.834 4.275C2.884 4.708 1.667 6.442 1.667 10v2.5c0 4.167 1.667 5.833 5.833 5.833h5c4.167 0 5.834-1.666 5.834-5.833V10c0-3.558-1.217-5.292-4.167-5.725"
        />
    </Svg>
);

const DirectSendIconSmall: React.FC<DirectSendIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 6.75V1.5L7.5 3M9 1.5 10.5 3M1.485 9.75h3.308c.285 0 .54.158.667.412l.878 1.755a1.5 1.5 0 0 0 1.342.833h2.648a1.5 1.5 0 0 0 1.342-.832l.878-1.755a.75.75 0 0 1 .667-.413h3.27"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M5.25 3.848C2.595 4.238 1.5 5.798 1.5 9v2.25C1.5 15 3 16.5 6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25V9c0-3.202-1.095-4.762-3.75-5.152"
        />
    </Svg>
);

export default DirectSendIcon;
