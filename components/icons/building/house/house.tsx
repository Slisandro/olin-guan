import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type HouseIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const HouseIcon: React.FC<HouseIconProps> = (props) => {
    if (props.size === "large") return <HouseIconLarge {...props} />

    if (props.size === "medium") return <HouseIconMedium {...props} />

    return <HouseIconSmall {...props} />
};

const HouseIconLarge: React.FC<HouseIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <G
            stroke={color}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path strokeLinecap="round" d="M2 22h20" />
            <Path d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22" />
            <Path d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z" />
            <Path strokeLinecap="round" d="m19 7-.03-3h-4.4" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const HouseIconMedium: React.FC<HouseIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <G
            stroke={color}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path strokeLinecap="round" d="M1.667 18.333h16.667" />
            <Path d="M2.458 18.333 2.5 8.308c0-.508.241-.991.641-1.308l5.834-4.542a1.676 1.676 0 0 1 2.05 0l5.833 4.534c.408.316.642.8.642 1.316v10.025" />
            <Path d="M10.834 14.167H9.167c-.692 0-1.25.558-1.25 1.25v2.917h4.167v-2.917c0-.692-.559-1.25-1.25-1.25ZM7.917 11.459H6.25a.836.836 0 0 1-.833-.834v-1.25c0-.458.375-.833.833-.833h1.667c.458 0 .833.375.833.833v1.25a.836.836 0 0 1-.833.834ZM13.75 11.458h-1.667a.836.836 0 0 1-.833-.833v-1.25c0-.459.375-.834.833-.834h1.667c.458 0 .833.375.833.834v1.25a.836.836 0 0 1-.833.833Z" />
            <Path strokeLinecap="round" d="m15.833 5.833-.025-2.5h-3.666" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const HouseIconSmall: React.FC<HouseIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <G
            stroke={color}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path strokeLinecap="round" d="M1.5 16.5h15" />
            <Path d="m2.213 16.5.037-9.023c0-.457.218-.892.578-1.177l5.25-4.088c.54-.42 1.297-.42 1.845 0l5.25 4.08c.367.285.577.72.577 1.185V16.5" />
            <Path d="M9.75 12.75h-1.5c-.622 0-1.125.502-1.125 1.125V16.5h3.75v-2.625c0-.623-.502-1.125-1.125-1.125ZM7.125 10.313h-1.5a.752.752 0 0 1-.75-.75V8.437c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.126c0 .412-.338.75-.75.75ZM12.375 10.313h-1.5a.752.752 0 0 1-.75-.75V8.437c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.126c0 .412-.338.75-.75.75Z" />
            <Path strokeLinecap="round" d="M14.25 5.25 14.228 3h-3.3" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default HouseIcon;