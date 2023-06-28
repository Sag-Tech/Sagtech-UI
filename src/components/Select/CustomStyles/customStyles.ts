import { type StylesConfig } from 'react-select'

const getCustomStyles = (
  state: 'default' | 'active' | 'error'
): StylesConfig => {
  console.log(state)
  return {
    control: (styles, { isDisabled, menuIsOpen }) => {
      let borderColor

      if (isDisabled) {
        borderColor = '#83838A'
      } else if (state === 'error' && !menuIsOpen) {
        borderColor = '#992D2D'
      } else {
        borderColor = '#6D3EF1'
      }
      return {
        ...styles,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor,
        borderRadius: '16px',
        transition: '0.35s',
        display: 'block',
        background: '#070715',
        cursor: 'pointer',
        boxShadow: 'none',
        '& .react-select__indicators': {
          position: 'absolute',
          top: '16px',
          right: '24px',
          transition: '0.35s',
          ...(menuIsOpen && {
            transform: 'rotate(180deg)',
            transition: '0.5s'
          })
        },
        '& .react-select__indicator': {
          color: '#B5B5B9',
          ...(menuIsOpen && {
            color: '#F8F8F8'
          })
        },
        padding: menuIsOpen ? '23px 24px 8px 24px' : '16px 24px 16px 24px',
        ...(menuIsOpen && { boxShadow: 'none' }),
        '&:hover': {
          borderColor: 'none'
        }
      }
    },
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#070715',
      marginTop: '8px',
      borderRadius: '16px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#6D3EF1',
      padding: '8px',
      animation: 'scaleIn 0.35s ease-in-out'
    }),
    option: (styles, { isSelected, isDisabled }) => {
      let color
      let borderRadius
      let backgroundColorCustom
      if (isSelected) {
        color = '#F8F8F8'
        borderRadius = '8px'
        backgroundColorCustom = '#20202D'
      } else if (isDisabled) {
        color = '#51515B'
      } else {
        color = '#B5B5B9'
        borderRadius = '16px'
        backgroundColorCustom = '#070715'
      }
      return {
        ...styles,
        backgroundColor: backgroundColorCustom,
        borderRadius,
        color,
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        boxShadow: 'none',
        cursor: 'pointer',
        ...(!isDisabled && {
          '&:hover': {
            color: '#F8F8F8',
            backgroundColor: 'none'
          }
        }),
        '&:focus': {
          backgroundColor: 'none'
        },
        '&:active': {
          backgroundColor: '#070715'
        }
      }
    },
    placeholder: (provided, { isDisabled }) => {
      let color

      if (isDisabled) {
        color = '#83838A'
      } else {
        color = '#B5B5B9'
      }
      return {
        ...provided,
        color
      }
    },
    input: (styles) => {
      return {
        ...styles,
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#F8F8F8',
        padding: '0px',
        margin: '0px'
      }
    },
    singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: '#F8F8F8',
      ...(isDisabled && {
        color: '#83838A'
      })
    })
  }
}
export default getCustomStyles
