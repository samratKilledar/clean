
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import Video from 'react-native-video';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Slide = () => {
    const navigation = useNavigation();
    const [showRealApp, setShowRealApp] = useState(false);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState("Play");


    const onDone = () => {
        setShowRealApp(true);
    };

    const onSkip = () => {
        setShowRealApp(true);
        navigation.navigate('Home')
    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTitleStyle}>{item.title}</Text>
                <Image style={styles.introImageStyle} source={item.image} />
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlay="pause"
                    showOnStart="true"
                // onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <Text style={styles.introTextStyle}>{item.text}</Text>
            </View>
        );
    };
   const _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
    const renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ion
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
      const renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ion
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
    return (
        <>
            {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native Slide Intro Slider using AppIntroSlider
            </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip from any slide or
                            Done button at last
            </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowRealApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                // <AppIntroSlider
                //     data={slides}
                //     renderItem={RenderItem}
                //     onDone={onDone}
                //     showSkipButton={true}
                //     onSkip={onSkip}
                // />
                <AppIntroSlider
                data={slides}
                renderDoneButton={this.renderDoneButton}
                renderItem={_renderItem}
                renderNextButton={this.renderNextButton}
              />
            )}
        </>
    );
};

export default Slide;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
});

const slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        // image: {
        //   uri:
        //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        // },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
        },
        backgroundColor: '#f6437b',
    },
    {
        key: 's6',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
];
