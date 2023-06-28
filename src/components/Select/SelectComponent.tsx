import React, { useState } from 'react'
import Select, { components, type DropdownIndicatorProps } from 'react-select'

import '../../styles/tailwind.css'

import { Icon } from '@components/IconComponent/Icon'

import getCustomStyles from './CustomStyles/customStyles'

interface Option {
  value: string
  label: string
}

export interface CustomSelectProps {
  options?: Option[]
  state?: 'default' | 'error'
  errorText?: string
  labelText?: string
  disabled?: boolean
}

const DropdownIndicator = (props: DropdownIndicatorProps): JSX.Element => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon='chevronDown'/>
    </components.DropdownIndicator>
  )
}

const SelectComponent: React.FC<CustomSelectProps> = ({ state, errorText, labelText, options, disabled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = (): void => {
    setIsOpen(true)
  }

  const closeHandler = (): void => {
    setIsOpen(false)
  }

  const customStyles = getCustomStyles(state as 'default' | 'active' | 'error')

  return (
      <div>
        {isOpen && <span className='absolute text-10 leading-16 top-24px left-43px font-medium text-grey_2 z-5'>{labelText}</span>}
        <Select
        styles={customStyles}
        options={options}
        classNamePrefix="react-select"
        onMenuOpen={openHandler}
        onMenuClose={closeHandler}
        placeholder='Enter your email'
        isDisabled={disabled}
        components={{ DropdownIndicator }}
        />
       {state === 'error' && !isOpen && !(disabled ?? false) && <p className='px-24px pt-4px text-12 leading-16 font-medium text-error'>{errorText}</p>}
      </div>
  )
}

export default SelectComponent
