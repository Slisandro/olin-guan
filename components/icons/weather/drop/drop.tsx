import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DropIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DropIcon: React.FC<DropIconProps> = (props) => {

    if (props.size === "large") return <DropIconLarge {...props} />

    if (props.size === "medium") return <DropIconMedium {...props} />

    return <DropIconSmall {...props} />
};

const DropIconLarge: React.FC<DropIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M12.61 2.21a.991.991 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7Z"
        />
    </Svg>
)

const DropIconMedium: React.FC<DropIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M10.509 1.841a.826.826 0 0 0-1.017 0C7.91 3.05 3.234 6.992 3.26 11.584c0 3.717 3.025 6.75 6.75 6.75s6.75-3.025 6.75-6.741c.008-4.526-4.675-8.534-6.25-9.75Z"
        />
    </Svg>
)

const DropIconSmall: React.FC<DropIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M9.458 1.657a.743.743 0 0 0-.915 0c-1.425 1.088-5.633 4.636-5.61 8.768A6.083 6.083 0 0 0 9.008 16.5c3.352 0 6.075-2.723 6.075-6.068.007-4.072-4.208-7.68-5.625-8.774Z"
        />
    </Svg>
)

export default DropIcon;