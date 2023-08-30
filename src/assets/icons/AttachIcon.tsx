import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function AttachIcon ({ color,  ...rest }: IAttachIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="icons">
        <path
          id="Icon"
          d="M21.1527 10.8999L12.1371 19.9156C10.0869 21.9658 6.76275 21.9658 4.71249 19.9156C2.66224 17.8653 2.66224 14.5412 4.71249 12.4909L13.7281 3.47532C15.0949 2.10849 17.311 2.10849 18.6779 3.47532C20.0447 4.84216 20.0447 7.05823 18.6779 8.42507L10.0158 17.0871C9.33238 17.7705 8.22434 17.7705 7.54092 17.0871C6.8575 16.4037 6.8575 15.2957 7.54092 14.6123L15.1423 7.01086"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
