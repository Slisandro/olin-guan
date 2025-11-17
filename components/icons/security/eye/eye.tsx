import * as React from "react";
import Svg, { Path } from "react-native-svg";

type EyeIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const EyeIcon: React.FC<EyeIconProps> = (props) => {

    if (props.size === "large") return <EyeIconLarge {...props} />

    if (props.size === "medium") return <EyeIconMedium {...props} />

    return <EyeIconSmall {...props} />
};

const EyeIconLarge: React.FC<EyeIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
        />
    </Svg>
)

const EyeIconMedium: React.FC<EyeIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 16.892c2.941 0 5.683-1.734 7.591-4.734.75-1.175.75-3.15 0-4.325-1.908-3-4.65-4.733-7.591-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z"
        />
    </Svg>
)

const EyeIconSmall: React.FC<EyeIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M11.685 9c0 1.485-1.2 2.685-2.685 2.685A2.682 2.682 0 0 1 6.315 9c0-1.485 1.2-2.685 2.685-2.685s2.685 1.2 2.685 2.685Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 15.203c2.647 0 5.115-1.56 6.832-4.26.675-1.058.675-2.835 0-3.893C14.115 4.35 11.647 2.79 9 2.79c-2.648 0-5.115 1.56-6.833 4.26-.675 1.058-.675 2.835 0 3.893 1.718 2.7 4.185 4.26 6.833 4.26Z"
        />
    </Svg>
)

export default EyeIcon;