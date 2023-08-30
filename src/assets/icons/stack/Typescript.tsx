/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function Typescript ({  ...rest }: IAttachIconProps) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_399_1101)">
        <g clipPath="url(#clip1_399_1101)">
          <path d="M0.444458 20V0H40.4445V40H0.444458" fill="white" />
          <path
            d="M9.21448 20.07V21.7H14.4145V36.5H18.1045V21.7H23.3045V20.1C23.3045 19.2 23.3045 18.47 23.2645 18.45C23.2645 18.42 20.0945 18.41 16.2445 18.41L9.24448 18.44V20.08L9.21448 20.07ZM32.5845 18.4C33.6045 18.64 34.3845 19.1 35.0845 19.83C35.4545 20.23 36.0045 20.93 36.0445 21.11C36.0445 21.17 34.3145 22.34 33.2645 22.99C33.2245 23.02 33.0645 22.85 32.9045 22.59C32.3845 21.85 31.8545 21.53 31.0245 21.47C29.8245 21.39 29.0245 22.02 29.0245 23.07C29.0245 23.39 29.0845 23.57 29.2045 23.83C29.4745 24.38 29.9745 24.71 31.5245 25.39C34.3845 26.62 35.6245 27.43 36.3745 28.59C37.2245 29.89 37.4145 31.93 36.8445 33.46C36.2045 35.13 34.6445 36.26 32.4145 36.63C31.7145 36.75 30.1145 36.73 29.3645 36.6C27.7645 36.3 26.2345 35.5 25.2945 34.47C24.9245 34.07 24.2145 33 24.2545 32.93L24.6345 32.69L26.1345 31.82L27.2645 31.16L27.5245 31.51C27.8545 32.03 28.5945 32.73 29.0245 32.97C30.3245 33.64 32.0645 33.55 32.9245 32.77C33.2945 32.43 33.4545 32.07 33.4545 31.57C33.4545 31.11 33.3845 30.9 33.1545 30.55C32.8345 30.11 32.1945 29.75 30.3945 28.95C28.3245 28.07 27.4445 27.51 26.6245 26.65C26.1545 26.13 25.7245 25.32 25.5245 24.65C25.3745 24.07 25.3245 22.65 25.4645 22.08C25.8945 20.08 27.4045 18.68 29.5645 18.28C30.2645 18.14 31.9145 18.2 32.6045 18.38L32.5845 18.4Z"
            fill="#312E81"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_399_1101">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.444458)"
          />
        </clipPath>
        <clipPath id="clip1_399_1101">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.444458)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
