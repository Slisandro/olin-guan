import { AccountProvider } from "@/contexts/AccountContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useSplashAnimation } from "@/hooks/useSplashAnimation";
import { Stack } from "expo-router";
import { Animated, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import "../global.css";

// Este componente decide la ruta inicial
function App() {
    const { isReady } = useSplashAnimation();
    const authStatus = useAuth();

    // Muestra la pantalla de carga mientras se inicializa el estado de autenticación
    // `isFirstLaunch` es `null` mientras se lee el valor de AsyncStorage.
    if (!isReady || authStatus === null || authStatus.isFirstLaunch === null) {
        return (
            <Splash />
        );
    }

    // Renderiza la pila de navegación condicionalmente según el estado.
    // Esto evita cualquier problema con Redirect en el _layout.
    if (authStatus.isFirstLaunch) {
        return (
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(public)/auth" />
            </Stack>
        );
    }

    if (authStatus.isSignedIn) {
        return (
            <Stack screenOptions={{ headerShown: false }} initialRouteName="(private)/(tabs)">
                <Stack.Screen name="(private)/(tabs)" />
            </Stack>
        );
    }

    // Si no es el primer lanzamiento y no está autenticado, muestra la pantalla de autenticación
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName="(public)/auth">
            <Stack.Screen name="(public)/auth" />
        </Stack>
    );
}

// Este es el componente principal que envuelve toda la aplicación con el contexto de autenticación.
// Es el punto de entrada de la navegación.
export default function Root() {
    return (
        <AuthProvider>
            <AccountProvider>
                <App />
            </AccountProvider>
        </AuthProvider>
    );
}

// // Componente de la pantalla de carga
function Splash() {
    // const { opacity } = useSplashAnimation();
    const opacity = 1
    return (
        <View
            style={{
                position: "relative",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#57B6C5",
            }}
        >
            <Svg
                width={62}
                height={96}
                viewBox="0 0 62 96"
                fill="none"
                style={{
                    bottom: "8%",
                    position: "absolute",
                    left: "-1%"
                }}
            >
                <Path
                    d="M19.997 23.751V12a4 4 0 00-4-4h-4a4 4 0 00-4 4v18.68m12-6.929l8.527-4.923a4 4 0 013.035-.4l10.929 2.93a4 4 0 012.828 4.898l-2.928 10.928a4 4 0 01-1.864 2.43l-20.527 11.85m0-27.713l-12 6.929m0 0L-18.538 46a4 4 0 00-1.465 5.464l8 13.857a4 4 0 005.465 1.464l14.535-8.392m0 0V84a4 4 0 004 4h4a4 4 0 004-4V51.464m-12 6.928l12-6.928"
                    stroke="#D9E6F8"
                    strokeWidth={6}
                    opacity={0.6}
                />
            </Svg>
            <Svg
                width={91}
                height={90}
                viewBox="0 0 91 90"
                fill="none"
                style={{
                    bottom: "20%",
                    position: "absolute",
                    left: "60%"
                }}
            >
                <G opacity={0.6} stroke="#D9E6F8" strokeWidth={3.97779}>
                    <Path
                        d="M45.054 15.911c11.108 0 20.697 6.504 25.166 15.911H19.889c4.469-9.407 14.058-15.91 25.165-15.91z"
                        strokeLinejoin="round"
                    />
                    <Path d="M45.05 31.813v41.766M68.921 73.595V41.773M68.92 59.666H55a1.99 1.99 0 00-1.99 1.989v11.933M21.184 73.595V41.773M21.184 59.666h13.923a1.99 1.99 0 011.989 1.989v11.933M27.15 51.712h35.8" />
                </G>
            </Svg>

            <Svg
                width={76}
                height={76}
                viewBox="0 0 76 76"
                fill="none"
                style={{
                    bottom: "50%",
                    position: "absolute",
                    right: "10%"
                }}
            >
                <G
                    opacity={0.6}
                    stroke="#D9E6F8"
                    strokeWidth={4.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path
                        clipRule="evenodd"
                        d="M12.667 22.166h38a3.167 3.167 0 013.166 3.167v14.25a7.917 7.917 0 01-7.916 7.917h-1.584A6.333 6.333 0 0138 41.166a6.333 6.333 0 10-12.667 0A6.333 6.333 0 0119 47.5h-1.583A7.917 7.917 0 019.5 39.583v-14.25a3.167 3.167 0 013.167-3.166z"
                    />
                    <Path d="M31.667 53.833A6.333 6.333 0 0038 60.167h11.083c9.62 0 17.417-7.798 17.417-17.417V12.666" />
                </G>
            </Svg>

            <Svg
                width={45}
                height={72}
                viewBox="0 0 45 72"
                fill="none"
                style={{
                    bottom: "40%",
                    position: "absolute",
                    left: "5%"
                }}
            >
                <G
                    opacity={0.6}
                    stroke="#D9E6F8"
                    strokeWidth={4.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path d="M25.66 50.253c-8.787-8.785-23.032-8.785-31.818 0" />
                    <Path
                        clipRule="evenodd"
                        d="M27 11.415C18.39 6.445 7.381 9.393 2.41 18.003l31.176 18c4.97-8.61 2.021-19.618-6.588-24.588v0z"
                    />
                    <Path d="M23.195 29.998c4.974-8.61 6.675-16.932 3.804-18.588-2.871-1.656-9.225 3.978-14.196 12.588M18 27L9 42.588M-18 57.752a7.201 7.201 0 013-.75 7.2 7.2 0 016 3 7.2 7.2 0 006 3 7.2 7.2 0 006-3 7.2 7.2 0 016-3 7.2 7.2 0 016 3 7.2 7.2 0 006 3 7.2 7.2 0 006-3 7.2 7.2 0 016-3 7.201 7.201 0 013 .75" />
                </G>
            </Svg>

            <Svg
                width={74}
                height={74}
                viewBox="0 0 74 74"
                fill="none"
                style={{
                    bottom: "65%",
                    position: "absolute",
                    left: "20%"
                }}
            >
                <G
                    opacity={0.6}
                    stroke="#D9E6F8"
                    strokeWidth={4.625}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path
                        clipRule="evenodd"
                        d="M45.135 31.623l14.891-3.99a6.167 6.167 0 013.192 11.913l-44.674 11.97L4.821 36.042l8.935-2.394 7.553 4.36 8.934-2.393-11.542-19.252 8.934-2.394 17.5 17.655z"
                    />
                    <Path d="M9.25 64.75h55.5" />
                </G>
            </Svg>

            <Svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                style={{
                    bottom: "80%",
                    position: "absolute",
                    left: "60%"
                }}
            >
                <G opacity={0.6} stroke="#D9E6F8">
                    <Path
                        d="M6.9 15.33c2.667-11.534 20.033-11.534 22.667 0 1.567 6.766-2.733 12.5-6.467 16.066-2.733 2.6-7.033 2.567-9.767 0-3.7-3.566-8-9.3-6.433-16.066zM50.233 55.33c2.667-11.534 20.134-11.534 22.8 0 1.567 6.766-2.733 12.5-6.5 16.066-2.733 2.6-7.066 2.567-9.8 0-3.766-3.566-8.066-9.3-6.5-16.066z"
                        strokeWidth={5}
                    />
                    <Path
                        d="M39.999 16.666h8.933c6.167 0 9.034 7.634 4.4 11.7L26.7 51.666c-4.633 4.034-1.767 11.667 4.367 11.667h8.933"
                        strokeWidth={5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M18.286 18.333h.038M61.62 58.333h.038"
                        strokeWidth={6.66667}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </G>
            </Svg>

            <Svg
                width={78}
                height={78}
                viewBox="0 0 78 78"
                fill="none"
                style={{
                    top: "10%",
                    position: "absolute",
                    left: "10%"
                }}
            >
                <G opacity={0.6} stroke="#D9E6F8" strokeWidth={4.875}>
                    <Path d="M29.161 10.575c5.434-5.433 14.244-5.433 19.678 0l18.586 18.586c5.433 5.434 5.433 14.244 0 19.678L48.839 67.425c-5.434 5.433-14.244 5.433-19.678 0L10.575 48.839c-5.433-5.434-5.433-14.244 0-19.678l18.586-18.586z" />
                    <Path
                        d="M32.5 24.654l4.202-4.202a3.25 3.25 0 014.596 0l4.202 4.202M39 52V21.404M39 52v3.25M39 52c0-7.18 5.82-13 13-13h4.596M39 52c0-7.18-5.82-13-13-13h-4.596m31.942-6.5l4.202 4.202a3.25 3.25 0 010 4.596L53.346 45.5m-28.692-13l-4.202 4.202a3.25 3.25 0 000 4.596l4.202 4.202"
                        strokeLinecap="round"
                    />
                </G>
            </Svg>

            <Svg
                width={79}
                height={79}
                viewBox="0 0 79 79"
                fill="none"
                style={{
                    bottom: "25%",
                    position: "absolute",
                    left: "20%"
                }}
            >
                <G
                    opacity={0.6}
                    stroke="#D9E6F8"
                    strokeWidth={4.9375}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path d="M6.583 65.835a7.9 7.9 0 006.584 3.292 7.9 7.9 0 006.583-3.292 7.9 7.9 0 016.583-3.292 7.9 7.9 0 016.584 3.292 7.9 7.9 0 006.583 3.292 7.9 7.9 0 006.583-3.292 7.9 7.9 0 016.584-3.292 7.9 7.9 0 016.583 3.292 7.9 7.9 0 006.583 3.292 7.9 7.9 0 006.584-3.292M13.167 59.25L9.875 42.79h59.25l-6.583 13.167" />
                    <Path d="M16.458 42.791v-19.75h26.334l13.166 19.75" />
                    <Path d="M23.042 23.042V9.875H19.75" />
                </G>
            </Svg>

            <Animated.Image
                source={require("@/assets/images/logo/large.png")}
                style={{
                    opacity,
                    width: 240,
                    height: 150,
                    resizeMode: "contain",
                }}
            />
            <Animated.Text
                style={{
                    opacity,
                    color: "#225D7F",
                    fontSize: 60,
                    fontWeight: 900,
                }}
                className="font-poppins-black"
            >
                OLIN GUAN
            </Animated.Text>

            <Animated.Text
                style={{
                    opacity,
                    color: "#FFFFFF",
                    fontSize: 20
                }}
                className="font-poppins-extrabold"
            >
                Explore the best adventures
            </Animated.Text>
        </View>
    );
}
