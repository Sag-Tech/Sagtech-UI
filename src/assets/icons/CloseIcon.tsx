import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function CloseIcon ({ color, ...rest }: IAttachIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      {...rest}
    >
      <path
        d="M2.92969 1.92896L17.0718 16.0711"
        stroke="#F8F8F8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2.92969 16.071L17.0718 1.92891"
        stroke="#F8F8F8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
