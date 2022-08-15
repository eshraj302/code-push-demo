import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CodePush from 'react-native-code-push';
import {STRINGS} from '@constants/index';
import styles from './styles';
import {StyledText, ScreenContainer} from '@components/atoms';

const HomeScreen = () => {
  const [codePushVersion, setCodePushVersion] = useState();

  useEffect(() => {
    CodePush.getUpdateMetadata().then(res => {
      setCodePushVersion(res?.label);
    });
  }, []);

  return (
    <ScreenContainer center>
      <View style={styles.container}>
        <StyledText textStyle={styles.text}>{STRINGS.appName}</StyledText>
      </View>
      <View style={styles.footer}>
        <StyledText textStyle={styles.label}>
          {codePushVersion
            ? `${STRINGS.codePushVersion} - ${codePushVersion}`
            : STRINGS.waitingForUpdate}
        </StyledText>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
