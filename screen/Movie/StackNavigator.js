import React, {Fragment} from 'react';
import {createStackNavigator}  from '@react-navigation/stack';
import {Text} from "@ui-kitten/components";

const {Screen,Navigator} = createStackNavigator();

const Detail = ()=><Text>Detail</Text>

const StackNavigator = ()=>{
    return (
        <Fragment>
            <Navigator>
                <Screen name='Detail' component={Detail}/>
            </Navigator>
        </Fragment>
    );
}

export default StackNavigator;