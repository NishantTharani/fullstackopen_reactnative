import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';
import { TextProps as NativeTextProps } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  bgBlue: {
    backgroundColor: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextLight: {
    color: theme.colors.textLight,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface TextProps {
  bgColor?: 'blue';
  color?: 'textSecondary' | 'primary' | 'textLight';
  fontSize?: 'body' | 'subheading';
  fontWeight?: 'normal' | 'bold';
  style?: TextStyle;
}

export const Text = ({
  bgColor,
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}: TextProps & NativeTextProps) => {
  const textStyle = [
    styles.text,
    bgColor === 'blue' && styles.bgBlue,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'textLight' && styles.colorTextLight,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};
