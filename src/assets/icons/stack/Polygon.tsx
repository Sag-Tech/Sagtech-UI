/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function Polygon ({ color, ...rest }: IAttachIconProps) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M28.7083 26.4679L37.0101 21.5712C37.4502 21.3111 37.7222 20.8287 37.7222 20.311V10.5176C37.7222 9.99993 37.4502 9.51759 37.0101 9.25747L28.7083 4.36076C28.2681 4.10065 27.7218 4.10318 27.2842 4.36076L18.9823 9.25747C18.5423 9.51759 18.2703 9.99993 18.2703 10.5176V28.0185L12.4481 31.4505L6.62589 28.0185V21.1521L12.4481 17.7201L16.2876 19.9852V15.379L13.1601 13.5329C12.945 13.4067 12.6978 13.3385 12.4481 13.3385C12.1983 13.3385 11.9512 13.4067 11.7361 13.5329L3.43419 18.4296C2.99412 18.6897 2.72217 19.1722 2.72217 19.6898V29.4833C2.72217 30.0009 2.99412 30.4832 3.43419 30.7433L11.7361 35.6401C12.1761 35.8977 12.7201 35.8977 13.1601 35.6401L21.462 30.7433C21.9021 30.4832 22.174 30.0009 22.174 29.4833V11.9798L22.2778 11.9192L27.9938 8.54784L33.816 11.9798V18.8464L27.9938 22.2784L24.1592 20.0181V24.6245L27.2817 26.4654C27.7218 26.723 28.2681 26.723 28.7058 26.4654L28.7083 26.4679Z"
        fill="#F8F8F8"
      />
    </svg>
  )
}
