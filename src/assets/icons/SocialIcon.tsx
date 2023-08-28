import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function SocilaIcon ({ color, ...rest }: IAttachIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...rest}
    >
      <path
        d="M16 32C24.8365 32 32 24.8365 32 16C32 7.16347 24.8365 0 16 0C7.16347 0 0 7.16347 0 16C0 24.8365 7.16347 32 16 32Z"
        fillOpacity="0.04"
      />
      <path d="M12.0766 11C14.8804 11 17.1531 13.2387 17.1531 16.0001C17.1531 18.7615 14.8802 21 12.0766 21C9.27306 21 7 18.7615 7 16.0001C7 13.2388 9.27285 11 12.0766 11ZM20.1836 11.2929C21.5855 11.2929 22.7219 13.4002 22.7219 16.0001H22.7222C22.7222 18.5994 21.5857 20.7073 20.1839 20.7073C18.7821 20.7073 17.6455 18.5994 17.6455 16.0001C17.6455 13.4009 18.7818 11.2929 20.1837 11.2929H20.1836ZM24.1072 11.7832C24.6002 11.7832 25 13.6712 25 16.0001C25 18.3284 24.6003 20.2171 24.1072 20.2171C23.6141 20.2171 23.2147 18.3289 23.2147 16.0001C23.2147 13.6713 23.6144 11.7832 24.1072 11.7832Z" />
    </svg>
  )
}
