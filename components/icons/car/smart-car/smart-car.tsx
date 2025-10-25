import * as React from "react";
import Svg, { Path } from "react-native-svg";

type SmartCarIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const SmartCarIcon: React.FC<SmartCarIconProps> = (props) => {
    if (props.size === "large") return <SmartCarIconLarge {...props} />

    if (props.size === "medium") return <SmartCarIconMedium {...props} />

    return <SmartCarIconSmall {...props} />
};

const SmartCarIconLarge: React.FC<SmartCarIconProps> = () => (
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
            d="M12.14 7.62H6.87c-1.86 0-2.28.93-2.51 2.08l-.85 4.05h12l-.85-4.05c-.25-1.15-.66-2.08-2.52-2.08Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16.99 20.36c.08.88-.62 1.64-1.52 1.64h-1.41c-.81 0-.92-.35-1.07-.77l-.15-.45c-.21-.61-.35-1.03-1.43-1.03H7.57c-1.08 0-1.24.47-1.43 1.03l-.15.45c-.14.43-.25.77-1.07.77H3.51c-.9 0-1.61-.76-1.52-1.64l.42-4.57c.11-1.13.32-2.05 2.29-2.05h9.57c1.97 0 2.18.92 2.29 2.05l.43 4.57ZM3.5 11.5h-.75M16.25 11.5h-.75M5 16.75h2.25M11.75 16.75H14M18.71 8.74c.28-.65.18-1.53-.34-2.3-.51-.77-1.29-1.2-2-1.19M21.82 9.73c.42-1.51.12-3.36-.95-4.96C19.8 3.17 18.2 2.19 16.64 2"
        />
    </Svg>
)

const SmartCarIconMedium: React.FC<SmartCarIconProps> = () => (
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
            d="M10.117 6.35H5.724c-1.55 0-1.9.775-2.092 1.733l-.708 3.375h10l-.709-3.375c-.208-.958-.55-1.733-2.1-1.733Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M14.158 16.967a1.26 1.26 0 0 1-1.267 1.367h-1.175c-.675 0-.766-.292-.891-.642l-.126-.375c-.175-.508-.291-.858-1.191-.858h-3.2c-.9 0-1.034.391-1.192.858l-.125.375c-.117.358-.208.642-.892.642H2.924c-.75 0-1.341-.634-1.266-1.367l.35-3.808c.091-.942.266-1.709 1.908-1.709h7.975c1.642 0 1.817.767 1.908 1.709l.359 3.808ZM2.917 9.584h-.625M13.542 9.584h-.625M4.167 13.959h1.875M9.792 13.959h1.875M15.592 7.283c.233-.541.15-1.275-.284-1.916-.425-.642-1.075-1-1.666-.992M18.183 8.108c.35-1.258.1-2.8-.792-4.133-.891-1.333-2.225-2.15-3.525-2.308"
        />
    </Svg>
)

const SmartCarIconSmall: React.FC<SmartCarIconProps> = () => (
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
            d="M9.105 5.715H5.153c-1.395 0-1.71.698-1.883 1.56l-.637 3.038h9l-.638-3.038c-.187-.862-.495-1.56-1.89-1.56Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M12.742 15.27c.06.66-.465 1.23-1.14 1.23h-1.057c-.608 0-.69-.262-.803-.577l-.112-.338c-.158-.457-.263-.772-1.073-.772h-2.88c-.81 0-.93.352-1.072.772l-.113.338c-.105.322-.187.577-.802.577H2.632c-.675 0-1.207-.57-1.14-1.23l.315-3.427c.083-.848.24-1.538 1.718-1.538h7.177c1.478 0 1.635.69 1.718 1.538l.322 3.427ZM2.625 8.625h-.563M12.188 8.625h-.563M3.75 12.563h1.688M8.813 12.563H10.5M14.032 6.555c.21-.488.135-1.148-.255-1.725-.382-.578-.967-.9-1.5-.893M16.364 7.297c.316-1.132.09-2.52-.712-3.72-.802-1.2-2.002-1.934-3.172-2.077"
        />
    </Svg>
)

export default SmartCarIcon;