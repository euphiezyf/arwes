import rgba from 'polished/lib/color/rgba';
import { CSSObject } from '@emotion/css';

import { ArwesTheme } from '../ArwesThemeProvider';

const createGlobalGeneralStyles = (theme: ArwesTheme): Record<string, CSSObject> => {
  const { palette, space, outline, shadow, fontScale, transitionDuration } = theme;

  return {
    '*, *:before, *:after': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    'html, body': {
      backgroundColor: palette.neutral.main,

      // Prevent adjustments of font size after orientation changes in iOS.
      webkitTextSizeAdjust: '100%',

      // Fonts
      fontSize: `${16 * fontScale}px`,
      lineHeight: 1.2,
      color: palette.text.root,

      // Scrollbars
      scrollbarWidth: 'thin',
      scrollbarColor: palette.primary.dark2 + ' ' + palette.neutral.elevate(2),
      '& ::-webkit-scrollbar': {
        width: space(1.5),
        height: space(1.5)
      },
      '& ::-webkit-scrollbar-thumb': {
        background: palette.primary.dark2,
        '&:hover': {
          background: palette.primary.dark1
        }
      },
      '& ::-webkit-scrollbar-track': {
        background: palette.neutral.elevate(2)
      },

      // Selection
      '& ::selection': {
        backgroundColor: rgba(palette.primary.main, 0.3),
        color: 'inherit'
      }
    },

    // TEXT

    'h1, h2, h3, h4, h5, h6': {
      lineHeight: 1,
      fontWeight: 'bold',
      color: palette.text.headings,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      textShadow: `0 0 ${shadow.blur(1)}px ${palette.text.headings}`
    },
    h1: { fontSize: '1.75rem' },
    h2: { fontSize: '1.625rem' },
    h3: { fontSize: '1.5rem' },
    h4: { fontSize: '1.375rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1.125rem' },
    p: {
      fontSize: '1rem'
    },
    'b, strong': {
      fontWeight: 'bolder'
    },
    small: {
      fontSize: '80%'
    },
    'sub, sup': {
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline'
    },
    sub: {
      bottom: '-0.25em'
    },
    sup: {
      top: '-0.5em'
    },
    a: {
      color: palette.text.link,
      outline: 'none',
      textDecoration: 'none',
      transition: `color ${transitionDuration}ms ease-out`,

      '&:hover, &:focus': {
        color: palette.text.linkHover
      }
    },

    // LISTS

    'ul, ol': {
      paddingLeft: space(6),
      'ul, ol': {
        marginBottom: 0
      }
    },
    ul: {
      listStyle: 'none',
      li: {
        position: 'relative',
        '&::before': {
          content: '"≫"',
          display: 'block',
          position: 'absolute',
          left: '-1.3em',
          top: '0.2em',
          fontSize: '0.9em',
          lineHeight: '1em',
          fontWeight: 'inherit'
        }
      }
    },

    // CODES

    'code, pre': {
      fontFamily: 'monospace'
    },
    pre: {
      display: 'block',
      borderWidth: `${outline(1)}px 0 ${outline(1)}px 0`,
      borderStyle: 'solid',
      borderColor: palette.primary.dark1,
      padding: space(4),
      fontSize: '1rem',
      backgroundColor: rgba(palette.primary.light2, 0.05)
    },

    // BLOCKQUOTE

    blockquote: {
      marginLeft: space(3),
      borderLeft: `${outline(6)}px solid ${palette.text.root}`,
      paddingLeft: space(3)
    },

    // TABLES

    table: {
      borderCollapse: 'separate',
      borderSpacing: space(1),
      width: '100%',
      textAlign: 'left'
    },
    thead: {
      tr: {
        backgroundColor: rgba(palette.text.root, 0.15)
      },
      'th, td': {
        borderBottom: `${outline(1)}px solid ${palette.secondary.dark1}`
      }
    },
    tbody: {
      tr: {
        backgroundColor: rgba(palette.text.root, 0.05),
        '&:hover, &:focus': {
          backgroundColor: rgba(palette.text.root, 0.1)
        }
      },
      td: {
        borderBottom: `${outline(1)}px solid ${palette.primary.dark2}`
      }
    },
    'th, td': {
      padding: `${space(1)}px ${space(1.5)}px`
    },
    tr: {
      transition: `background-color ${transitionDuration}ms ease-out`
    },

    // ASSETS

    img: {
      border: `1px solid ${palette.primary.dark2}`,
      maxWidth: '100%'
    },

    figure: {
      img: {
        marginBottom: 0,
        verticalAlign: 'top'
      }
    },
    figcaption: {
      padding: space(2),
      backgroundColor: rgba(palette.text.root, 0.05)
    },

    // LINE

    hr: {
      display: 'block',
      height: 0,
      borderWidth: `0 0 ${outline(1)}px 0`,
      borderStyle: 'solid',
      borderColor: palette.text.root
    },

    // FORMS

    fieldset: {
      borderStyle: 'solid',
      borderWidth: outline(1),
      borderColor: palette.primary.dark2,
      padding: space(4)
    },

    'button, input, optgroup, select, textarea': {
      fontFamily: 'inherit',
      fontSize: '100%',
      lineHeight: 1.2
    },

    'button, [type="button"], [type="reset"], [type="submit"]': {
      display: 'inline-block',
      outline: 'none',
      border: `${outline(1)}px solid ${palette.secondary.main}`,
      padding: `0 ${space(5)}px`,
      color: palette.secondary.light1,
      lineHeight: `${space(6)}px`,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      cursor: 'pointer',
      backgroundColor: rgba(palette.secondary.dark2, 0.3),
      boxShadow: `0 0 ${shadow.blur(2)}px ${palette.secondary.main}`,
      transition: [
        `border-color ${transitionDuration}ms ease-out`,
        `color ${transitionDuration}ms ease-out`,
        `background-color ${transitionDuration}ms ease-out`,
        `box-shadow ${transitionDuration}ms ease-out`
      ].join(', '),

      // Correct the inability to style clickable types in iOS and Safari.
      WebkitAppearance: 'button',

      '&:hover, &:focus': {
        outline: 'none',
        borderColor: palette.secondary.light1,
        color: palette.secondary.light2,
        backgroundColor: rgba(palette.secondary.dark1, 0.3),
        boxShadow: `0 0 ${shadow.blur(4)}px ${palette.secondary.light1}`
      },
      '&:disabled': {
        borderColor: palette.primary.dark2,
        color: palette.primary.dark2,
        backgroundColor: palette.neutral.elevate(1),
        boxShadow: 'none',
        cursor: 'auto'
      }
    },

    'input, textarea, select': {
      display: 'block',
      outline: 'none',
      borderWidth: `0 0 ${outline(2)}px 0`,
      borderStyle: 'solid',
      borderColor: palette.secondary.main,
      padding: `${space(1)}px ${space(2)}px`,
      width: '100%',
      lineHeight: `${space(6)}px`,
      color: palette.secondary.light1,
      backgroundColor: 'transparent',
      transition: [
        `border-color ${transitionDuration}ms ease-out`,
        `background-color ${transitionDuration}ms ease-out`,
        `box-shadow ${transitionDuration}ms ease-out`
      ].join(', '),

      '&::placeholder': {
        color: rgba(palette.secondary.light1, 0.5)
      },
      '&:hover, &:focus': {
        borderColor: palette.secondary.light1,
        backgroundColor: rgba(palette.secondary.dark3, 0.3),
        boxShadow: `0 0 ${outline(2)}px ${palette.secondary.dark3}`
      },
      '&:disabled': {
        borderColor: palette.primary.dark2,
        color: palette.primary.dark1,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        cursor: 'auto',

        '&::placeholder': {
          color: palette.primary.dark2
        }
      }
    },
    option: {
      color: palette.secondary.light1,
      backgroundColor: palette.secondary.dark3
    },

    // Show the overflow in Edge.
    'button, input': {
      overflow: 'visible'
    },

    // Remove the inner border and padding in Firefox.
    [[
      'button::-moz-focus-inner',
      '[type="button"]::-moz-focus-inner',
      '[type="reset"]::-moz-focus-inner',
      '[type="submit"]::-moz-focus-inner'
    ].join(', ')]: {
      borderStyle: 'none',
      padding: 0
    },

    // Add the correct vertical alignment in Chrome, Firefox, and Opera.
    progress: {
      verticalAlign: 'baseline'
    },

    // Correct the cursor style of increment and decrement buttons in Chrome.
    [[
      '[type="number"]::-webkit-inner-spin-button',
      '[type="number"]::-webkit-outer-spin-button'
    ].join('')]: {
      height: 'auto'
    },

    '[type="search"]': {
      // Correct the odd appearance in Chrome and Safari.
      WebkitAppearance: 'textfield',
      // Correct the outline style in Safari.
      outlineOffset: '-2px'
    },

    // Remove the inner padding in Chrome and Safari on macOS.
    '[type="search"]::-webkit-search-decoration': {
      WebkitAppearance: 'none'
    },

    '::-webkit-file-upload-button': {
      // Correct the inability to style clickable types in iOS and Safari.
      WebkitAppearance: 'button',
      // Change font properties to `inherit` in Safari.
      font: 'inherit'
    },

    // CONTENT BLOCK ELEMENTS

    [[
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'ul',
      'ol',
      'pre',
      'blockquote',
      'table',
      'img',
      'figure',
      'hr',
      'fieldset'
    ].join(', ')]: {
      marginBottom: space(4)
    }
  };
};

export { createGlobalGeneralStyles };
