import * as React from "react";
import Svg, { Path } from "react-native-svg";

type HomeIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const HomeIcon: React.FC<HomeIconProps> = (props) => {
    if (props.size === "large") return <HomeIconLarge {...props} />

    if (props.size === "medium") return <HomeIconMedium {...props} />

    return <HomeIconSmall {...props} />
};

const HomeIconLarge: React.FC<HomeIconProps> = ({ color }) => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
        />
    </Svg>
)

const HomeIconMedium: React.FC<HomeIconProps> = ({ color }) => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10 15v-2.5M8.392 2.35 2.617 6.975c-.65.517-1.067 1.608-.925 2.425L2.8 16.033c.2 1.184 1.333 2.142 2.533 2.142h9.334c1.191 0 2.333-.967 2.533-2.142L18.308 9.4c.134-.817-.283-1.908-.925-2.425l-5.775-4.617c-.891-.716-2.333-.716-3.216-.008Z"
        />
    </Svg>
)

const HomeIconSmall: React.FC<HomeIconProps> = ({ color }) => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9 13.5v-2.25M7.553 2.115 2.355 6.277c-.585.465-.96 1.448-.832 2.183l.997 5.97c.18 1.065 1.2 1.927 2.28 1.927h8.4c1.073 0 2.1-.87 2.28-1.927l.998-5.97c.12-.735-.255-1.718-.833-2.183l-5.197-4.155c-.803-.645-2.1-.645-2.895-.007Z"
        />
    </Svg>
)

export default HomeIcon;