import * as React from "react";
import Svg, { Path } from "react-native-svg";

type ScubaMaskIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const ScubaMaskIcon: React.FC<ScubaMaskIconProps> = (props) => {
    if (props.size === "large") return <ScubaMaskIconLarge {...props} />

    if (props.size === "medium") return <ScubaMaskIconMedium {...props} />

    return <ScubaMaskIconSmall {...props} />
};

const ScubaMaskIconLarge: React.FC<ScubaMaskIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1-2.5 2.5H14a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5-5.5V4"
        />
    </Svg>
)

const ScubaMaskIconMedium: React.FC<ScubaMaskIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M3.333 5.833h10c.46 0 .834.373.834.834v3.75c0 1.15-.933 2.083-2.084 2.083h-.416c-.92 0-1.667-.746-1.667-1.667a1.667 1.667 0 1 0-3.333 0c0 .92-.747 1.667-1.667 1.667h-.417A2.083 2.083 0 0 1 2.5 10.417v-3.75c0-.46.373-.834.833-.834Z"
            clipRule="evenodd"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M8.333 14.167c0 .92.746 1.666 1.667 1.666h2.916A4.583 4.583 0 0 0 17.5 11.25V3.333"
        />
    </Svg>
)

const ScubaMaskIconSmall: React.FC<ScubaMaskIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M3 5.25h9a.75.75 0 0 1 .75.75v3.375c0 1.036-.84 1.875-1.875 1.875H10.5A1.5 1.5 0 0 1 9 9.75a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 1-1.5 1.5h-.375A1.875 1.875 0 0 1 2.25 9.375V6A.75.75 0 0 1 3 5.25Z"
            clipRule="evenodd"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M7.5 12.75a1.5 1.5 0 0 0 1.5 1.5h2.625a4.125 4.125 0 0 0 4.125-4.125V3"
        />
    </Svg>
)

export default ScubaMaskIcon;