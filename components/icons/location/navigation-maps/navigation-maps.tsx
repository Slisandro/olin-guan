import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type NavigationMapsIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const NavigationMapsIcon: React.FC<NavigationMapsIconProps> = (props) => {
    if (props.size === "large") return <NavigationMapsIconLarge {...props} />

    if (props.size === "medium") return <NavigationMapsIconMedium {...props} />

    return <NavigationMapsIconSmall {...props} />
};

const NavigationMapsIconLarge: React.FC<NavigationMapsIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.5}
            d="M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m10 7.586 1.293-1.293a1 1 0 0 1 1.414 0L14 7.586M12 16V6.586M12 16v1m0-1a4 4 0 0 1 4-4h1.414M12 16a4 4 0 0 0-4-4H6.586m9.828-2 1.293 1.293a1 1 0 0 1 0 1.414L16.414 14m-8.828-4-1.293 1.293a1 1 0 0 0 0 1.414L7.586 14"
        />
    </Svg>
)

const NavigationMapsIconMedium: React.FC<NavigationMapsIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeWidth={1.25}
            d="M7.478 2.712a3.568 3.568 0 0 1 5.045 0l4.766 4.765a3.568 3.568 0 0 1 0 5.046l-4.766 4.765a3.568 3.568 0 0 1-5.045 0l-4.766-4.765a3.568 3.568 0 0 1 0-5.046l4.766-4.765Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeWidth={1.25}
            d="m8.333 6.321 1.078-1.077a.833.833 0 0 1 1.178 0l1.078 1.077M10 13.333V5.488m0 7.845v.834m0-.834A3.333 3.333 0 0 1 13.333 10h1.179M10 13.333A3.333 3.333 0 0 0 6.667 10H5.488m8.19-1.667 1.078 1.078a.833.833 0 0 1 0 1.178l-1.078 1.078M6.321 8.333 5.244 9.411a.833.833 0 0 0 0 1.178l1.077 1.078"
        />
    </Svg>
)

const NavigationMapsIconSmall: React.FC<NavigationMapsIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G stroke="#646464" strokeWidth={1.125} clipPath="url(#a)">
            <Path d="M6.73 2.44a3.211 3.211 0 0 1 4.54 0l4.29 4.29a3.21 3.21 0 0 1 0 4.54l-4.29 4.29a3.21 3.21 0 0 1-4.54 0l-4.29-4.29a3.211 3.211 0 0 1 0-4.54l4.29-4.29Z" />
            <Path
                strokeLinecap="round"
                d="m7.5 5.69.97-.97a.75.75 0 0 1 1.06 0l.97.97M9 12V4.94M9 12v.75M9 12a3 3 0 0 1 3-3h1.06M9 12a3 3 0 0 0-3-3H4.94m7.37-1.5.97.97a.75.75 0 0 1 0 1.06l-.97.97m-6.62-3-.97.97a.75.75 0 0 0 0 1.06l.97.97"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default NavigationMapsIcon;