import { TextStyle } from 'react-native';

type Theme = {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    textLight: string;
  };
  fontSizes: {
    body: number;
    subheading: number;
  };
  fonts: {
    main: TextStyle['fontFamily'];
  };
  fontWeights: {
    normal: TextStyle['fontWeight'];
    bold: TextStyle['fontWeight'];
  };
};

const theme: Theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    textLight: '#fff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
