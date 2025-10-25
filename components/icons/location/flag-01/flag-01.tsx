import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

type Flag01IconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const Flag01Icon: React.FC<Flag01IconProps> = (props) => {
    if (props.size === "large") return <Flag01IconLarge {...props} />

    if (props.size === "medium") return <Flag01IconMedium {...props} />

    return <Flag01IconSmall {...props} />
};

const Flag01IconLarge: React.FC<Flag01IconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Ellipse cx={12} cy={19} stroke="#6B6E80" strokeWidth={1.5} rx={9} ry={3} />
        <Path
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 19v-9m0 0V4a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.052 2.106a1 1 0 0 0 0 .894l1.052 2.106A1 1 0 0 1 19.382 10H12Z"
        />
    </Svg>
)

const Flag01IconMedium: React.FC<Flag01IconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Ellipse
            cx={10}
            cy={15.834}
            stroke="#6B6E80"
            strokeWidth={1.25}
            rx={7.5}
            ry={2.5}
        />
        <Path
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.25}
            d="M10 15.833v-7.5m0 0v-5c0-.92.746-1.666 1.667-1.666h4.485c.62 0 1.022.652.745 1.206l-.877 1.754a.833.833 0 0 0 0 .746l.877 1.754a.833.833 0 0 1-.745 1.206H10Z"
        />
    </Svg>
)

const Flag01IconSmall: React.FC<Flag01IconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Ellipse
            cx={10}
            cy={15.834}
            stroke="#6B6E80"
            strokeWidth={1.25}
            rx={7.5}
            ry={2.5}
        />
        <Path
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.25}
            d="M10 15.833v-7.5m0 0v-5c0-.92.746-1.666 1.667-1.666h4.485c.62 0 1.022.652.745 1.206l-.877 1.754a.833.833 0 0 0 0 .746l.877 1.754a.833.833 0 0 1-.745 1.206H10Z"
        />
    </Svg>
)

export default Flag01Icon;