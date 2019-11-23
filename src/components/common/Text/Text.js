import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { BLACK_COLOR, WIDTH } from '../../../styles/stylesConstants'

const text = props => {
    let NORMAL_FONT_SIZE = Math.floor(WIDTH / 14);
    let SMALL_FONT_SIZE = Math.floor(WIDTH / 20);
    let LARGE_FONT_SIZE = Math.floor(WIDTH / 12);
    let EXTRA_LARGE_FONT_SIZE = Math.floor(WIDTH / 10);

    let fontSize = props.extra ? EXTRA_LARGE_FONT_SIZE : props.large ? LARGE_FONT_SIZE : props.normal ? NORMAL_FONT_SIZE : SMALL_FONT_SIZE;

    if (props.giant) {
        fontSize = Math.floor(WIDTH / 8);
    }

    let color = {}

    if (props.color) color.color = props.color

    return (
        <Text style={[styles.text, { fontSize: fontSize, ...color }, props.style]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'ROBOTO',
        color: BLACK_COLOR,
        fontWeight: '700'
    }
});

export default text; 