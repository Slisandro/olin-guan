import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type PinIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const PinIcon: React.FC<PinIconProps> = (props) => {
    if (props.size === "large") return <PinIconLarge {...props} />

    if (props.size === "medium") return <PinIconMedium {...props} />

    return <PinIconSmall {...props} />
};

const PinIconLarge: React.FC<PinIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <G
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path
                strokeLinejoin="round"
                d="M15 15h1.127a4 4 0 0 1 3.073 1.44l1.067 1.28c1.085 1.302.159 3.28-1.537 3.28H5.27c-1.695 0-2.622-1.978-1.536-3.28l1.067-1.28A4 4 0 0 1 7.874 15H9"
            />
            <Path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v10" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PinIconMedium: React.FC<PinIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.25}
            clipPath="url(#a)"
        >
            <Path
                strokeLinejoin="round"
                d="M12.5 12.5h.938c.99 0 1.928.44 2.561 1.2l.89 1.066c.904 1.086.132 2.734-1.28 2.734H4.391c-1.414 0-2.185-1.648-1.28-2.734L4 13.7A3.333 3.333 0 0 1 6.561 12.5H7.5"
            />
            <Path d="M10 5.833A1.667 1.667 0 1 0 10 2.5a1.667 1.667 0 0 0 0 3.333Zm0 0v8.334" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PinIconSmall: React.FC<PinIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <G
            stroke="#6B6E80"
            strokeLinecap="round"
            strokeWidth={1.125}
            clipPath="url(#a)"
        >
            <Path
                strokeLinejoin="round"
                d="M11.25 11.25h.844a3 3 0 0 1 2.305 1.08l.8.96c.815.977.12 2.46-1.152 2.46H3.952c-1.272 0-1.966-1.483-1.152-2.46l.8-.96a3 3 0 0 1 2.305-1.08h.845"
            />
            <Path d="M8.999 5.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v7.5" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default PinIcon;