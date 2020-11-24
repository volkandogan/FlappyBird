/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react'
import {  Image } from 'react-native'
import Images from './assets/Images'


export default class pipeTop extends React.Component {
    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;
        return (
            <Image
                style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                }}
                resizeMode='stretch'
                source={Images.pipeTop}
            />
        )
    }
}