/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Images from './assets/Images'


export default class Floor extends React.Component {
    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;
        const imageIterations = Math.ceil(width / height)
        return (
            <View
                style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                    overflow: "hidden",
                    flexDirection: "row"
                }}
            >
                {Array.apply(null, Array(imageIterations)).map((el, idx) => {
                    return <Image style={{ width: height, height: height }} key={idx} resizeMode="stretch" source={Images.floor} />
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({})
