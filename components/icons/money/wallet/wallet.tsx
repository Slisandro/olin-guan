import * as React from "react";
import Svg, { Path } from "react-native-svg";

type WalletIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const WalletIcon: React.FC<WalletIconProps> = (props) => {
    if (props.size === "large") return <WalletIconLarge {...props} />

    if (props.size === "medium") return <WalletIconMedium {...props} />

    return <WalletIconSmall {...props} />
};

const WalletIconLarge: React.FC<WalletIconProps> = ({ color }) => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
        />
    </Svg>
)

const WalletIconMedium: React.FC<WalletIconProps> = ({ color }) => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M18.334 10v4.167c0 2.5-1.667 4.166-4.167 4.166H5.834c-2.5 0-4.167-1.666-4.167-4.166V10c0-2.267 1.367-3.85 3.492-4.117.216-.033.441-.05.675-.05h8.333c.217 0 .425.009.625.042 2.15.25 3.542 1.842 3.542 4.125Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M14.793 5.875a3.81 3.81 0 0 0-.625-.042H5.834c-.233 0-.458.017-.675.05.117-.233.284-.45.484-.65L8.35 2.517a2.937 2.937 0 0 1 4.133 0l1.459 1.475c.533.525.816 1.191.85 1.883ZM18.334 10.417h-2.5c-.917 0-1.667.75-1.667 1.666 0 .917.75 1.667 1.667 1.667h2.5"
        />
    </Svg>
)

const WalletIconSmall: React.FC<WalletIconProps> = ({ color }) => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M16.5 9v3.75c0 2.25-1.5 3.75-3.75 3.75h-7.5C3 16.5 1.5 15 1.5 12.75V9c0-2.04 1.23-3.465 3.143-3.705.195-.03.397-.045.607-.045h7.5c.195 0 .383.007.563.037C15.246 5.512 16.5 6.945 16.5 9Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M13.314 5.287a3.43 3.43 0 0 0-.563-.037h-7.5c-.21 0-.412.015-.607.045.105-.21.255-.405.435-.585l2.437-2.445a2.644 2.644 0 0 1 3.72 0l1.313 1.328a2.53 2.53 0 0 1 .765 1.694ZM16.5 9.375h-2.25c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5h2.25"
        />
    </Svg>
)

export default WalletIcon;