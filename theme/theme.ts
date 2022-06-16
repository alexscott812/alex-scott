import type { Theme } from 'theme-ui';

const colorPallete= {
  "white": "#FFFFFF",
  "black": "#000000",
  "blue": {
    "50": "#E6EFFF",
    "100": "#B9D1FE",
    "200": "#8CB4FD",
    "300": "#5F97FC",
    "400": "#3279FB",
    "500": "#055CFA",
    "600": "#044AC8",
    "700": "#033796",
    "800": "#022564",
    "900": "#011232"
  },
  "green": {
    "50": "#EEF7EE",
    "100": "#CEE8CE",
    "200": "#AFDAAF",
    "300": "#8FCB8F",
    "400": "#70BD70",
    "500": "#51AE51",
    "600": "#408C40",
    "700": "#306930",
    "800": "#204620",
    "900": "#102310"
  },
  "brown": {
    "50": "#F9F2EC",
    "100": "#EEDBC9",
    "200": "#E2C4A6",
    "300": "#D7AD84",
    "400": "#CC9661",
    "500": "#C17F3E",
    "600": "#9A6532",
    "700": "#744C25",
    "800": "#4D3319",
    "900": "#27190C"
  },
  "gray": {
    "50": "#F2F2F3",
    "100": "#DADADC",
    "200": "#C3C3C6",
    "300": "#ABABB0",
    "400": "#93939A",
    "500": "#7C7C83",
    "600": "#636369",
    "700": "#4A4A4F",
    "800": "#313135",
    "900": "#19191A"
  }
};

const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  // breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // space: [
  //   "0rem",
  //   "0.25rem",
  //   "0.5rem",
  //   "0.75rem",
  //   "1rem",
  //   "1.25rem",
  //   "1.5rem",
  //   "1.75rem",
  //   "2rem",
  // ],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    //body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    // text: '#141414',
    text: colorPallete.gray[800],
    background: colorPallete.white,
    primary: colorPallete.blue[500],
    primaryHover: colorPallete.blue[600],
    // muted: '#f4f5f8',
    muted: colorPallete.gray[50],
    mutedHover: colorPallete.gray[100],
    highlight: colorPallete.blue[50],
    modes: {
      dark: {
        text: colorPallete.white,
        // background: '#141414',
        background: colorPallete.gray[900],
        primary: colorPallete.blue[200],
        primaryHover: colorPallete.blue[300],
        // muted: '#242424',
        muted: colorPallete.gray[800],
        mutedHover: colorPallete.gray[700],
        highlight: colorPallete.blue[800]
      },
      natural: {
        // text: '#463122',
        // background: '#fff5e8',
        text: colorPallete.brown[900],
        background: colorPallete.brown[50],
        primary: colorPallete.green[500],
        primaryHover: colorPallete.green[600],
        // muted: '#f8edde',
        muted: colorPallete.brown[100],
        mutedHover: colorPallete.brown[200],
        highlight: colorPallete.green[100]
      }
    }
  },
  radii: {
    small: 3,
    medium: 6,
    large: 9,
    extraLarge: 18,
    full: 99999,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      borderRadius: 'full',
      px: 3,
      py: 2,
      fontWeight: 'bold',
      transition: 'background-color 0.125s ease-in-out',
      ':hover': {
        bg: 'primaryHover'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      bg: 'muted',
      ':hover': {
        bg: 'mutedHover'
      }
    },
    icon: {
      borderRadius: 'full',
      ':hover': {
        bg: 'muted'
      }
    },
    emoji: {
      variant: 'buttons.primary',
      bg: 'muted',
      width: '2.5rem',
      height: '2.5rem',
      p: 0,
      lineHeight: '0',
      ':hover': {
        bg: 'mutedHover'
      }
    }
  },
  cards: {
    primary: {
      //p: 3,
      borderRadius: 'extraLarge',
      width: '100%',
      overflow: 'hidden'
    },
    outline: {
      variant: 'cards.primary',
      border: '2px solid',
      borderColor: 'muted'
    },
    sunken: {
      variant: 'cards.primary',
      bg: 'muted',
    },
    hero: {
      variant: 'cards.primary',
      // color: 'background',
      color: 'text',
      // border: '2px solid',
      // borderColor: 'primary',
      p: 5
      // backgroundImage: 'linear-gradient(to bottom right, #2ebf91, #8360c3)'
      // backgroundImage: 'linear-gradient(to bottom right, #e96443, #904e95)'
    }
  },
  images: {
    primary: {
      borderStyle: 'none'
    },
    cardTop: {
      height: '10rem',
      width: '100%',
      bg: 'muted',
      objectFit: 'cover'
    }
  },
  links: {
    nav: {
      borderRadius: 'full',
      px: 2,
      py: 1,
      fontWeight: 'body',
      transition: 'all 0.125s ease-in-out',
      ':hover': {
        // color: 'text',
        // bg: 'muted',
        cursor: 'pointer'
      }
    }
  },
  badges: {
    primary: {
      color: 'primary',
      bg: 'highlight',
      textTransform: 'uppercase'
    }
  },
  layout: {
    container: {
      maxWidth: 768,
      width: '100%',
      mx: 'auto',
      px: 3,
    }
  }
};

export default theme;