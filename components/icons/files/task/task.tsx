import * as React from "react";
import Svg, { Path } from "react-native-svg";

type TaskIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const TaskIcon: React.FC<TaskIconProps> = (props) => {

    if (props.size === "large") return <TaskIconLarge {...props} />

    if (props.size === "medium") return <TaskIconMedium {...props} />

    return <TaskIconSmall {...props} />
};

const TaskIconLarge: React.FC<TaskIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
        />
    </Svg>
)

const TaskIconMedium: React.FC<TaskIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M9.166 16.25h8.333M9.166 10.416h8.333M9.166 4.583h8.333M2.5 4.583l.833.833 2.5-2.5M2.5 10.417l.833.833 2.5-2.5M2.5 16.25l.833.834 2.5-2.5"
        />
    </Svg>
)

const TaskIconSmall: React.FC<TaskIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M8.25 14.625h7.5M8.25 9.375h7.5M8.25 4.125h7.5M2.25 4.125l.75.75 2.25-2.25M2.25 9.375l.75.75 2.25-2.25M2.25 14.625l.75.75 2.25-2.25"
        />
    </Svg>
)

export default TaskIcon;