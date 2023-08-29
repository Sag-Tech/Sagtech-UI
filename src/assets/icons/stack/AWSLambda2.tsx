/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function AWSLambda2 ({ color, ...rest }: IAttachIconProps) {
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
        d="M27.853 26.0288L27.8603 33.4017L21.3176 36.6667V29.2969L27.853 26.0288ZM35.705 22.0883V29.487L30.1247 32.2719L30.1207 24.907L35.705 22.0883ZM27.8431 16.1602L27.8504 23.4558L21.3174 26.7021V19.4041L27.8431 16.1602ZM35.705 12.2517V19.5015L30.1191 22.3412L30.1142 15.031L35.705 12.2517ZM20.3228 11.3941L26.1624 14.3417L20.1038 17.3843L14.3745 14.5067L20.3228 11.3941ZM12.2003 7.29409L17.77 10.1055L11.808 13.2173L6.08772 10.3446L12.2003 7.29409ZM28.1218 7.33673L34.121 10.3446L28.7557 13.0395L22.9041 10.0878L28.1218 7.33673ZM20.1395 3.33337L25.5401 6.04098L20.3617 8.80572L14.7966 5.99895L20.1395 3.33337Z"
        fill="#F8F8F8"
      />
      <path
        d="M19.0079 19.4041L14.6009 17.1885V26.7648C14.6009 26.7648 9.21162 15.2976 8.71225 14.2676C8.64792 14.1347 8.38295 13.9888 8.31522 13.9535C7.34888 13.4461 4.51726 12.0117 4.51726 12.0117V28.9304L8.43448 31.0244V22.181C8.43448 22.181 13.7666 32.4272 13.8206 32.5392C13.8745 32.6513 14.4102 33.7312 14.982 34.1104C15.7437 34.6146 19.0087 36.578 19.0087 36.578L19.0079 19.4041Z"
        fill="#A5B4FC"
      />
    </svg>
  )
}
