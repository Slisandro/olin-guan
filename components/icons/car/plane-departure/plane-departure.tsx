import * as React from "react";
import Svg, { Path } from "react-native-svg";

type PlaneDepartureIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PlaneDepartureIcon: React.FC<PlaneDepartureIconProps> = (props) => {
    if (props.size === "large") return <PlaneDepartureIconLarge {...props} />

    if (props.size === "medium") return <PlaneDepartureIconMedium {...props} />

    return <PlaneDepartureIconSmall {...props} />
};

const PlaneDepartureIconLarge: React.FC<PlaneDepartureIconProps> = () => (
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
            d="m14.64 10.258 4.829-1.294a2 2 0 0 1 1.035 3.863L6.015 16.71l-4.45-5.02 2.897-.776 2.45 1.414 2.898-.776-3.744-6.244 2.898-.777 5.675 5.727Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 21h18"
        />
    </Svg>
)

const PlaneDepartureIconMedium: React.FC<PlaneDepartureIconProps> = () => (
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
            d="m12.2 8.548 4.024-1.078a1.667 1.667 0 1 1 .863 3.22L5.013 13.924 1.304 9.742l2.415-.647 2.041 1.178 2.415-.647-3.12-5.203 2.415-.647 4.73 4.772Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M2.5 17.5h15"
        />
    </Svg>
)

const PlaneDepartureIconSmall: React.FC<PlaneDepartureIconProps> = () => (
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
            d="m10.98 7.693 3.622-.97a1.5 1.5 0 0 1 .776 2.897L4.512 12.532 1.174 8.768l2.173-.583 1.837 1.061 2.173-.582L4.55 3.98l2.173-.583 4.257 4.295Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M2.25 15.75h13.5"
        />
    </Svg>
)

export default PlaneDepartureIcon;