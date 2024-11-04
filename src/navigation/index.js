import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen, BlogsScreen, FinancesScreen, PitchesScreen, ProfileScreen } from '../screens';
import { HeaderMobile, HeaderTab } from '../shared';
import HomeIcon from '../assets/icons/home.svg';
import BlogsIcon from '../assets/icons/blogs.svg';
import FinancesIcon from '../assets/icons/finances.svg';
import PitchesIcon from '../assets/icons/pitches.svg';
import LogoIcon from '../assets/icons/logo.svg';
import SettingsIcon from '../assets/icons/setting.svg';
import ExitIcon from '../assets/icons/exit-outline.svg';
import LogoTextIcon from '../assets/icons/logotext.svg';
import { tw } from 'tailwindcss-react-native';
import { FontSize } from '../enums';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isTablet = screenWidth >= 700;

// Bottom Tab Navigator for Mobile
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === 'Home') {
            IconComponent = <HomeIcon color={color} size={size} />;
          } else if (route.name === 'Blogs') {
            IconComponent = <BlogsIcon color={color} size={size} />;
          } else if (route.name === 'Finances') {
            IconComponent = <FinancesIcon color={color} size={size} />;
          } else if (route.name === 'Pitches') {
            IconComponent = <PitchesIcon color={color} size={size} />;
          }

          return (
            <View style={{ alignItems: 'center' }}>
              {IconComponent}
              {focused && (
                <View
                  style={{
                    height: 4,
                    width: 60, // Adjust width as needed
                    backgroundColor: '#6C5DD3', // Indicator color for active tab
                    // marginTop: 4, // Space between icon and indicator bar
                    // borderRadius: 4, // Rounded edges for the indicator bar
                    // borderWidth:2,
                    borderRadius: 12,
                    position: 'absolute',
                    top: 35
                  }}
                />
              )}
            </View>
          );
        },
        tabBarShowLabel: false, // Hide labels
        // tabBarActiveTintColor: '#6200ee', // Color for active icon
        tabBarInactiveTintColor: '#858585', // Color for inactive icon
        tabBarStyle: { height: 100, paddingBottom: 25, paddingTop: 5, borderTopWidth: 1, },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HeaderMobile title="Home" showBack />,
        }}
      />
      <BottomTab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          header: () => <HeaderMobile title="Blogs" searchFilter={true} />,
        }}
      />
      <BottomTab.Screen
        name="Finances"
        component={FinancesScreen}
        options={{
          header: () => <HeaderMobile title="Finances" />,
        }}
      />
      <BottomTab.Screen
        name="Pitches"
        component={PitchesScreen}
        options={{
          header: () => <HeaderMobile title="Pitches" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function SideTabNavigator() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.tabContainer, { width: screenWidth >= 768 ? 200 : 90 }]}>
        <View>
          <View style={[styles.logoContainer, { left: screenWidth >= 768 ? 20 : 40, }]}>
            {
              screenWidth >= 768 ? (
                <LogoTextIcon />
              ) : (
                <LogoIcon />
              )
            }
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.tab, { flexDirection: screenWidth >= 768? 'row': 'column', }]}>
            {
              screenWidth >= 768 ? (
                <>
                  <HomeIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText, { color: '#9D9DAA' }]}>Home</Text>
                </>
              ) : (
                <HomeIcon />
              )
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Blogs')} style={[styles.tab, { flexDirection: screenWidth >= 768? 'row': 'column', }]}>

            {
              screenWidth >= 768 ? (
                <>
                  <BlogsIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText, { color: '#6C5DD3' }]}>Blogs</Text>
                </>
              ) : (
                <BlogsIcon />
              )
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Finances')} style={[styles.tab, { flexDirection: screenWidth >= 768? 'row': 'column', }]}>

            {
              screenWidth >= 768 ? (
                <>
                  <FinancesIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText,]}>Finances</Text>
                </>
              ) : (
                <FinancesIcon />
              )
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Pitches')} style={[styles.tab, {flexDirection: screenWidth >= 768? 'row': 'column', }]}>

            {
              screenWidth >= 768 ? (
                <>
                  <PitchesIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText, ]}>Pitches</Text>
                </>
              ) : (
                <PitchesIcon />
              )
            }
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.tab, { flexDirection: 'row', }]}>

            {
              screenWidth >= 768 ? (
                <>
                  <SettingsIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText, ]}>Settings</Text>
                </>
              ) : (
                <SettingsIcon />
              )
            }
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, { flexDirection: 'row', }]}>

            {
              screenWidth >= 768 ? (
                <>
                  <ExitIcon style={{ marginRight: 15 }} />
                  <Text style={[styles.tabText, ]}>Log out</Text>
                </>
              ) : (
                <ExitIcon />
              )
            }
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.screenContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => <HeaderTab title="Home" />,
            }}
          />
          <Stack.Screen
            name="Blogs"
            component={BlogsScreen}
            options={{
              header: () => <HeaderTab title="Blogs" searchFilter={true} />,
            }}
          />
          <Stack.Screen
            name="Finances"
            component={FinancesScreen}
            options={{
              header: () => <HeaderTab title="Finances" />,
            }}
          />
          <Stack.Screen
            name="Pitches"
            component={PitchesScreen}
            options={{
              header: () => <HeaderTab title="Pitches" />,
            }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
}

// Main Stack Navigator
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={isTablet ? SideTabNavigator : BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <HeaderMobile title="Profile" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  tabContainer: {
    width: 90,
    backgroundColor: '#FFFFFF',
    height: screenHeight,
    borderRightWidth: 1,
    borderColor: 'rgba(27, 29, 33, 0.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30
    // borderWidth:2
  },
  tab: {
    padding: 20,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9D9DAA'
  },
  logoContainer: {
    // width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // flexDirection:'row',
    // borderWidth:2
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
