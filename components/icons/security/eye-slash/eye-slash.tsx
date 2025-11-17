import * as React from "react";
import Svg, { Path } from "react-native-svg";

type EyeSlashIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const EyeSlashIcon: React.FC<EyeSlashIconProps> = (props) => {

    if (props.size === "large") return <EyeSlashIconLarge {...props} />

    if (props.size === "medium") return <EyeSlashIconMedium {...props} />

    return <EyeSlashIconSmall {...props} />
};

const EyeSlashIconLarge: React.FC<EyeSlashIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
        />
    </Svg>
)

const EyeSlashIconMedium: React.FC<EyeSlashIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="m12.108 7.892-4.216 4.216a2.98 2.98 0 1 1 4.217-4.217Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M14.85 4.808c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325a11.938 11.938 0 0 0 2.259 2.641M7.017 16.275c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325a13.523 13.523 0 0 0-.884-1.225"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M12.925 10.583a2.97 2.97 0 0 1-2.35 2.35M7.892 12.108l-6.225 6.225M18.333 1.667l-6.225 6.225"
        />
    </Svg>
)

const EyeSlashIconSmall: React.FC<EyeSlashIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="m10.897 7.102-3.795 3.795a2.682 2.682 0 1 1 3.795-3.795Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.365 4.327c-1.313-.99-2.813-1.53-4.365-1.53-2.648 0-5.115 1.56-6.833 4.26-.675 1.058-.675 2.835 0 3.893.593.93 1.283 1.732 2.033 2.377M6.314 14.648c.855.36 1.763.555 2.685.555 2.648 0 5.115-1.56 6.833-4.26.675-1.058.675-2.835 0-3.893-.248-.39-.518-.757-.795-1.102"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M11.633 9.525a2.674 2.674 0 0 1-2.115 2.115M7.103 10.898 1.5 16.5M16.5 1.5l-5.602 5.603"
        />
    </Svg>
)

export default EyeSlashIcon;