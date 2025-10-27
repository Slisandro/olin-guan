

// Car
import AirplaneSquareIcon from '@/components/icons/car/airplane-square/airplane-square';
import AirplaneIcon from '@/components/icons/car/airplane/airplane';
import BusSquareIcon from '@/components/icons/car/bus-square/bus-square';
import BusIcon from '@/components/icons/car/bus/bus';
import CarIcon from '@/components/icons/car/car/car';
import DrivingIcon from '@/components/icons/car/driving/driving';
import PlaneArrivalIcon from '@/components/icons/car/plane-arrival/plane-arrival';
import PlaneDepartureIcon from '@/components/icons/car/plane-departure/plane-departure';
import PlaneInflightIcon from '@/components/icons/car/plane-inflight/plane-inflight';
import PlaneIcon from '@/components/icons/car/plane/plane';
import ShipSquareIcon from '@/components/icons/car/ship-square/ship-square';
import ShipIcon from '@/components/icons/car/ship/ship';
import SmartCarIcon from '@/components/icons/car/smart-car/smart-car';
import TrainIcon from '@/components/icons/car/train/train';
//

// Location
import Flag01Icon from '@/components/icons/location/flag-01/flag-01';
import FlagIcon from '@/components/icons/location/flag/flag';
import GPSIcon from '@/components/icons/location/gps/gps';
import HugeIcon from '@/components/icons/location/huge/huge';
import LocationHugeIcon from '@/components/icons/location/location-huge/location-huge';
import LocationSlashIcon from '@/components/icons/location/location-slash/location-slash';
import LocationIcon from '@/components/icons/location/location/location';
import MapIcon from '@/components/icons/location/map/map';
import NavigationMapIcon from '@/components/icons/location/navigation-map/navigation-map';
import NavigationMapsIcon from '@/components/icons/location/navigation-maps/navigation-maps';
import PeopleIcon from '@/components/icons/location/people/people';
import PinIcon from '@/components/icons/location/pin/pin';
import RouteSquareIcon from '@/components/icons/location/route-square/route-square';
import RoutingIcon from '@/components/icons/location/routing/routing';
import SignPostIcon from '@/components/icons/location/sign-post/sign-post';
import SlackIcon from '@/components/icons/location/slack/slack';
//

// Money
import CardIcon from '@/components/icons/money/card/card';
import CashIcon from '@/components/icons/money/cash/cash';
import CoinIcon from '@/components/icons/money/coin/coin';
import WalletIcon from '@/components/icons/money/wallet/wallet';
//

import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="p-16 flex flex-row gap-10">
        <Text className="w-20">Money</Text>
        <View className="flex gap-4 items-center justify-start">
          <CardIcon size='large' />
          <CardIcon size='medium' />
          <CardIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <CashIcon size='large' />
          <CashIcon size='medium' />
          <CashIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <CoinIcon size='large' />
          <CoinIcon size='medium' />
          <CoinIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <WalletIcon size='large' />
          <WalletIcon size='medium' />
          <WalletIcon size='small' />
        </View>
      </View>

      <View className="p-16 flex flex-row gap-10">
        <Text className="w-20">Location</Text>

        <View className="flex gap-4 items-center justify-start">
          <FlagIcon size='large' />
          <FlagIcon size='medium' />
          <FlagIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <Flag01Icon size='large' />
          <Flag01Icon size='medium' />
          <Flag01Icon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <GPSIcon size='large' />
          <GPSIcon size='medium' />
          <GPSIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <HugeIcon size='large' />
          <HugeIcon size='medium' />
          <HugeIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <LocationIcon size='extra-large' />
          <LocationIcon size='large' />
          <LocationIcon size='medium' />
          <LocationIcon size='small' />
          <LocationIcon size='extra-small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <LocationHugeIcon size='extra-large' />
          <LocationHugeIcon size='large' />
          <LocationHugeIcon size='medium' />
          <LocationHugeIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <LocationSlashIcon size='large' />
          <LocationSlashIcon size='medium' />
          <LocationSlashIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <MapIcon size='extra-large' />
          <MapIcon size='large' />
          <MapIcon size='medium' />
          <MapIcon size='small' />
          <MapIcon size='extra-small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <NavigationMapIcon size='extra-large' />
          <NavigationMapIcon size='large' />
          <NavigationMapIcon size='medium' />
          <NavigationMapIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <NavigationMapsIcon size='large' />
          <NavigationMapsIcon size='medium' />
          <NavigationMapsIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PeopleIcon size='large' />
          <PeopleIcon size='medium' />
          <PeopleIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PinIcon size='large' />
          <PinIcon size='medium' />
          <PinIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <RouteSquareIcon size='large' />
          <RouteSquareIcon size='medium' />
          <RouteSquareIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <RoutingIcon size='extra-large' />
          <RoutingIcon size='large' />
          <RoutingIcon size='medium' />
          <RoutingIcon size='small' />
          <RoutingIcon size='extra-small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <SignPostIcon size='large' />
          <SignPostIcon size='medium' />
          <SignPostIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <SlackIcon size='large' />
          <SlackIcon size='medium' />
          <SlackIcon size='small' />
        </View>
      </View>

      <View className="p-16 flex flex-row gap-10">
        <Text className="w-20">Car</Text>

        <View className="flex gap-4 items-center justify-start">
          <AirplaneIcon size='large' />
          <AirplaneIcon size='medium' />
          <AirplaneIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <AirplaneSquareIcon size='large' />
          <AirplaneSquareIcon size='medium' />
          <AirplaneSquareIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <BusIcon size='large' />
          <BusIcon size='medium' />
          <BusIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <BusSquareIcon size='large' />
          <BusSquareIcon size='medium' />
          <BusSquareIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <CarIcon size='large' />
          <CarIcon size='medium' />
          <CarIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <DrivingIcon size='large' />
          <DrivingIcon size='medium' />
          <DrivingIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PlaneIcon size='large' />
          <PlaneIcon size='medium' />
          <PlaneIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PlaneArrivalIcon size='large' />
          <PlaneArrivalIcon size='medium' />
          <PlaneArrivalIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PlaneDepartureIcon size='large' />
          <PlaneDepartureIcon size='medium' />
          <PlaneDepartureIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <PlaneInflightIcon size='large' />
          <PlaneInflightIcon size='medium' />
          <PlaneInflightIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <ShipIcon size='large' />
          <ShipIcon size='medium' />
          <ShipIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <ShipSquareIcon size='large' />
          <ShipSquareIcon size='medium' />
          <ShipSquareIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <SmartCarIcon size='large' />
          <SmartCarIcon size='medium' />
          <SmartCarIcon size='small' />
        </View>

        <View className="flex gap-4 items-center justify-start">
          <TrainIcon size='large' />
          <TrainIcon size='medium' />
          <TrainIcon size='small' />
        </View>
      </View>
    </ScrollView>
  );
}
