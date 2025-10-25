import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SignPostIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SignPostIcon: React.FC<SignPostIconProps> = (props) => {
    if (props.size === "large") return <SignPostIconLarge {...props} />

    if (props.size === "medium") return <SignPostIconMedium {...props} />

    return <SignPostIconSmall {...props} />
};

const SignPostIconLarge: React.FC<SignPostIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M11.25 4.948V2.5a.833.833 0 0 0-.834-.833h-.833a.833.833 0 0 0-.833.833v3.892m2.5-1.444 1.776-1.025a.833.833 0 0 1 .633-.084l2.276.61c.445.12.709.577.59 1.021l-.61 2.277a.833.833 0 0 1-.389.506l-4.276 2.469m0-5.774-2.5 1.444m0 0L3.22 9.583a.833.833 0 0 0-.305 1.139l1.667 2.886c.23.4.74.536 1.138.306l3.029-1.749m0 0V17.5c0 .46.373.833.833.833h.833c.46 0 .834-.373.834-.833v-6.778m-2.5 1.443 2.5-1.443"
        />
    </Svg>
)

const SignPostIconMedium: React.FC<SignPostIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M11.25 4.948V2.5a.833.833 0 0 0-.834-.833h-.833a.833.833 0 0 0-.833.833v3.892m2.5-1.444 1.776-1.025a.833.833 0 0 1 .633-.084l2.276.61c.445.12.709.577.59 1.021l-.61 2.277a.833.833 0 0 1-.389.506l-4.276 2.469m0-5.774-2.5 1.444m0 0L3.22 9.583a.833.833 0 0 0-.305 1.139l1.667 2.886c.23.4.74.536 1.138.306l3.029-1.749m0 0V17.5c0 .46.373.833.833.833h.833c.46 0 .834-.373.834-.833v-6.778m-2.5 1.443 2.5-1.443"
        />
    </Svg>
)

const SignPostIconSmall: React.FC<SignPostIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.125}
            d="M10.124 4.453V2.25a.75.75 0 0 0-.75-.75h-.75a.75.75 0 0 0-.75.75v3.502m2.25-1.299 1.599-.923a.75.75 0 0 1 .569-.075l2.049.55a.75.75 0 0 1 .53.918l-.549 2.05a.75.75 0 0 1-.35.454L10.125 9.65m0-5.197-2.25 1.3m0 0L2.899 8.624a.75.75 0 0 0-.275 1.025l1.5 2.598a.75.75 0 0 0 1.025.274l2.725-1.573m0 0v4.801c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75v-6.1m-2.25 1.299 2.25-1.3"
        />
    </Svg>
)

export default SignPostIcon;