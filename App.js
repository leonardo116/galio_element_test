/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Button,
  Text,
  GalioProvider,
  Block,
  theme,
  Card,
  Checkbox,
  Icon,
  Input,
  NavBar,
  Radio,
  Slider,
  Switch,
} from 'galio-framework';

const App = () => {
  return (
    <Fragment>

      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <GalioProvider theme={customTheme}>
                <Block safe flex>
                  <Text h4>Buttons</Text>
                  <Button
                    capitalize
                    color={'success'}
                    // loading
                    icon={'font-awesome'}
                    iconFamily="font-awesome"
                    iconSize={theme.SIZES.BASE}
                    iconColor={theme.COLORS.PRIMARY}
                    onPress={() => Alert.alert('Like it!')}>
                    press here!
                  </Button>
                  <Card
                    neutral
                    fullBackgroundImage
                    image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                    avatar="http://i.pravatar.cc/100"
                    title="Offset"
                    caption="420 minutes ago"
                    location="Los Angeles, CA"
                  />
                  <Card
                    image="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300"
                    title="Christopher Moon"
                    location="Los Angeles, CA"
                    caption="138 minutes ago"
                    avatar="http://i.pravatar.cc/100"
                  />
                  <Checkbox
                    label="test"
                    checkboxStyle="success"
                    flexDirection="row"
                    iconName="sc-vk"
                    iconFamily="evilicons"
                    iconColor="#fff"
                    color="primary"
                    image="https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                    onChange={() => Alert.alert('Check changed!')}
                  />
                  <Icon
                    family="evilicons"
                    color={theme.COLORS.ICON}
                    size={theme.SIZES.BASE * 5}
                    name={'sc-vk'}
                  />
                  <Input
                    type="default"
                    placeholder="password"
                    password
                    label="galio input"
                    bgColor={theme.COLORS.TRNSLATE}
                    rounded
                    viewPass
                    family="evilicons"
                    icon="sc-skype"
                    color="blue"
                    help="galio input help"
                    left
                    bottomHelp
                    // borderless
                    placeholderTextColor={theme.COLORS.PRIMARY}
                    style={{ borderColor: theme.COLORS.INFO }}
                  />

                </Block>
                <Block>
                  <NavBar
                    back
                    title="Chart"
                    leftStyle={{ marginRight: 0 }}
                    leftIconColor={theme.COLORS.MUTED}
                    rightStyle={{ alignSelf: 'flex-end' }}
                    onLeftPress={() => Alert.alert('Back')}
                    style={theme.SIZES.BASE}
                    right={(
                      <Button
                        onlyIcon
                        icon="gear"
                        color="transparent"
                        iconFamily="font-awesome"
                        iconColor={theme.COLORS.MUTED}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Settings')}
                      />
                    )}
                  />
                  <NavBar
                    title="Feed"
                    titleStyle={{ alignSelf: 'flex-start' }}
                    onLeftPress={() => Alert.alert('Menu')}
                    rightStyle={{ flexDirection: 'row' }}
                    leftStyle={{ flex: 0.4 }}
                    style={{ marginHorizontal: -(theme.SIZES.BASE - 2) }}
                    right={[
                      <Button
                        key="right-heart"
                        onlyIcon
                        icon="heart"
                        iconFamily="font-awesome"
                        color="transparent"
                        iconColor={theme.COLORS.BLACK}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Like!')}
                        style={{ marginRight: theme.SIZES.BASE }}
                      />,
                      <Button
                        key="right-search"
                        onlyIcon
                        icon="search"
                        color="transparent"
                        iconFamily="font-awesome"
                        iconColor={theme.COLORS.BLACK}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Search')}
                      />,
                    ]}
                  />

                  <NavBar
                    title="Terms of Services"
                    leftStyle={{ flex: 0.4 }}
                    onLeftPress={() => Alert.alert('Back')}
                    titleStyle={{ alignSelf: 'flex-start' }}
                    style={{ marginHorizontal: -(theme.SIZES.BASE - 2) }}
                    right={[
                      <Button
                        key="right-location"
                        onlyIcon
                        icon="map-pin"
                        iconFamily="font-awesome"
                        color="transparent"
                        iconColor={theme.COLORS.MUTED}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Like!')}
                        style={{ marginRight: theme.SIZES.BASE }}
                      />,
                      <Button
                        key="right-search"
                        onlyIcon
                        icon="search"
                        color="transparent"
                        iconFamily="font-awesome"
                        iconColor={theme.COLORS.MUTED}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Search')}
                      />,
                    ]}
                  />
                  <NavBar
                    title="Discover"
                    style={{ backgroundColor: theme.COLORS.THEME, marginHorizontal: -(theme.SIZES.BASE - 2) }}
                    titleStyle={{ color: theme.COLORS.WHITE }}
                    rightStyle={{ alignSelf: 'flex-end' }}
                    leftIconColor={theme.COLORS.WHITE}
                    onLeftPress={() => Alert.alert('Menu')}
                    right={(
                      <Button
                        onlyIcon
                        color="transparent"
                        icon="shopping-cart"
                        iconFamily="font-awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert('Search')}
                      />
                    )}
                  />
                </Block>
                <Block>
                  <Radio
                    label="galio label"
                    color="success"
                    onChange={() => Alert.alert('Radio')}
                  />
                  <Text h3 bold italic>Galio is awesome</Text>
                  <Slider
                    value={30}
                    minimumValue={10}
                    maximumValue={50}
                    onValueChange={() => Alert.alert('slider')}
                  />
                  <Switch
                    initialValue={true}
                    color={'success'}
                    onChange={() => Alert.alert('switch')}
                  />
                </Block>

              </GalioProvider>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const customTheme = {
  SIZES: { BASE: 24, },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: 'red', }
  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
