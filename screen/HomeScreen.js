import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native'
import {Layout, Button} from '@ui-kitten/components';
const HomeScreen = () => {
  return (
    <Fragment>
      <Layout style={styles.layout}>
        <Button>Hello</Button>
      </Layout>
    </Fragment>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HomeScreen;
