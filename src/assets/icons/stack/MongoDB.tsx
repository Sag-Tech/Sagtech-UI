/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function MongoDB ({ color, ...rest }: IAttachIconProps) {
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
        d="M19.8976 1.76501L20.8594 3.57163C21.0757 3.90502 21.31 4.20012 21.5859 4.47494C22.3949 5.27387 23.149 6.12656 23.8431 7.02718C25.4728 9.16719 26.5721 11.5437 27.3572 14.114C27.828 15.6841 28.0836 17.2947 28.1028 18.9234C28.1816 23.7924 26.5124 27.9733 23.147 31.448C22.5996 31.9991 22.0082 32.5046 21.3787 32.9596C21.0453 32.9596 20.8876 32.7039 20.7502 32.4685C20.4999 32.032 20.3334 31.5526 20.2591 31.055C20.1408 30.4659 20.0631 29.8768 20.1014 29.2686V28.9938C20.0744 28.9352 19.7804 1.90355 19.8976 1.76501Z"
        fill="#A5B4FC"
      />
      <path
        d="M19.8976 1.70537C19.8582 1.62653 19.8187 1.68623 19.7793 1.72452C19.7985 2.11873 19.6611 2.47015 19.4459 2.80579C19.2094 3.13918 18.8963 3.39485 18.582 3.66968C16.8362 5.1812 15.4621 7.00696 14.3617 9.04898C12.8975 11.7972 12.1429 14.7425 11.9289 17.8433C11.8309 18.9617 12.2825 22.9083 12.6351 24.0471C13.5969 27.0701 15.3247 29.6032 17.5627 31.8018C18.1124 32.3311 18.7003 32.8222 19.3085 33.2941C19.4853 33.2941 19.5045 33.1364 19.545 33.0193C19.6226 32.7687 19.6817 32.5127 19.7219 32.2534L20.1161 29.3092L19.8976 1.70537Z"
        fill="#F8F8F8"
      />
      <path
        d="M20.8594 34.1557C20.8989 33.7052 21.1151 33.3313 21.3505 32.9585C21.114 32.8605 20.9383 32.6656 20.8009 32.4482C20.6824 32.2424 20.5843 32.0255 20.508 31.8006C20.2332 30.9761 20.1746 30.1111 20.0958 29.2686V28.7584C19.9978 28.8373 19.9775 29.504 19.9775 29.6032C19.9202 30.4936 19.8021 31.3791 19.6239 32.2534C19.5653 32.6071 19.5259 32.9596 19.3085 33.2738C19.3085 33.3133 19.3085 33.3527 19.3276 33.4112C19.6813 34.452 19.7782 35.5118 19.8379 36.592V36.9862C19.8379 37.457 19.8187 37.3579 20.2096 37.5156C20.3672 37.5741 20.5429 37.5944 20.7006 37.7115C20.8189 37.7115 20.838 37.6135 20.838 37.5347L20.7795 36.8871V35.0805C20.7603 34.7651 20.8189 34.452 20.8583 34.1569L20.8594 34.1557Z"
        fill="#8C9EF2"
      />
    </svg>
  )
}
