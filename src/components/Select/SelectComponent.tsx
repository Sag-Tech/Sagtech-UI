import React from 'react'
import Select, { components, type DropdownIndicatorProps } from 'react-select'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'
import getCustomStyles from './CustomStyles/customStyles'

export interface Option {
  value: string
  label: string
}

export interface CustomSelectProps {
  options?: Option[]
  state?: 'default' | 'error'
  errorText?: string
  labelText?: string
  disabled?: boolean
  isMenuOpen?: boolean
  onMenuToggle?: () => void
}

const DropdownIndicator = (props: DropdownIndicatorProps): JSX.Element => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon='chevrondown'/>
    </components.DropdownIndicator>
  )
}

const SelectComponent: React.FC<CustomSelectProps> = ({ state, errorText, labelText, options, disabled, isMenuOpen, onMenuToggle }) => {
  const customStyles = getCustomStyles(state as 'default' | 'active' | 'error')
  return (
      <div>
        {(isMenuOpen ?? false) && <span className='absolute text-10 leading-16 top-24px left-43px font-medium text-grey_2 z-5'>{labelText}</span>}
        <Select
        styles={customStyles}
        options={options}
        classNamePrefix="react-select"
        placeholder='Enter your email'
        isDisabled={disabled}
        components={{ DropdownIndicator }}
        menuIsOpen={isMenuOpen}
        onMenuOpen={onMenuToggle}
        onMenuClose={onMenuToggle}
        />
       {state === 'error' && !(isMenuOpen ?? false) && !(disabled ?? false) && <p className='px-24px pt-4px text-12 leading-16 font-medium text-error'>{errorText}</p>}
      </div>
  )
}

export default SelectComponent
