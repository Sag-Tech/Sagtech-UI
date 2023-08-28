/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function NodeJS ({ color, ...rest }: IAttachIconProps) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_399_1107)">
        <path
          d="M19.0466 0.50778C20.0254 -0.0574683 21.3003 -0.0600215 22.2783 0.50778C27.1984 3.3126 32.12 6.11303 37.0393 8.91955C37.9645 9.44537 38.5834 10.4842 38.574 11.5598V28.4347C38.5809 29.5549 37.9008 30.6186 36.9247 31.1325C32.0208 33.9218 27.1194 36.7146 22.2163 39.5039C21.2172 40.0803 19.9167 40.0359 18.9489 39.4123C17.4787 38.5525 16.0059 37.6969 14.5356 36.8379C14.2352 36.6571 13.8965 36.5133 13.6843 36.2194C13.8719 35.9644 14.2072 35.9326 14.4797 35.8213C15.0934 35.6244 15.657 35.3083 16.2208 35.0017C16.3633 34.9032 16.5374 34.941 16.6741 35.0291C17.9312 35.7563 19.1773 36.5047 20.4387 37.2249C20.7078 37.3817 20.9803 37.1736 21.2103 37.0442C26.0226 34.3003 30.8408 31.5666 35.6522 28.8218C35.8304 28.7353 35.929 28.5444 35.9145 28.3474C35.9179 22.7807 35.9154 17.213 35.9162 11.6464C35.9366 11.4228 35.8084 11.2173 35.608 11.1258C30.7211 8.3492 25.8367 5.56835 20.9507 2.79104C20.866 2.73233 20.7657 2.70082 20.663 2.70067C20.5603 2.70052 20.4599 2.73173 20.3751 2.79019C15.489 5.56835 10.6054 8.35175 5.71937 11.1282C5.51973 11.2198 5.38574 11.422 5.4095 11.6464C5.41035 17.213 5.4095 22.7807 5.4095 28.3482C5.40103 28.4443 5.42196 28.5408 5.46947 28.6245C5.51698 28.7083 5.58878 28.7754 5.67523 28.8167C6.9791 29.5627 8.28465 30.3034 9.58937 31.0468C10.3244 31.4459 11.2269 31.6831 12.0367 31.3773C12.7513 31.1187 13.2523 30.383 13.2386 29.6174C13.2454 24.0832 13.2353 18.5482 13.2437 13.0149C13.2258 12.7692 13.4568 12.5662 13.6936 12.5893C14.3201 12.5851 14.9474 12.5808 15.5739 12.591C15.8354 12.5851 16.0154 12.8496 15.983 13.0971C15.9805 18.6664 15.9898 24.2357 15.9788 29.8049C15.9805 31.2892 15.3761 32.9042 14.0153 33.6305C12.3388 34.5066 10.2668 34.3208 8.61055 33.4807C7.17677 32.7587 5.80851 31.9066 4.40018 31.1332C3.4215 30.6221 2.74482 29.5542 2.75171 28.4349V11.5598C2.74144 10.462 3.38494 9.40423 4.33902 8.88608C9.2421 6.09445 14.1443 3.30069 19.0466 0.50778Z"
          fill="white"
        />
        <path
          d="M23.324 12.1971C25.4624 12.0582 27.7517 12.1148 29.676 13.1777C31.1659 13.9921 31.9919 15.7015 32.0182 17.3714C31.9766 17.5967 31.7432 17.7209 31.5301 17.7055C30.9096 17.7046 30.289 17.714 29.6686 17.7012C29.4054 17.7114 29.2524 17.4666 29.2194 17.2318C29.0411 16.4328 28.6092 15.6415 27.8638 15.2561C26.7195 14.6781 25.3927 14.7072 24.1449 14.7192C23.234 14.768 22.2545 14.8476 21.4828 15.388C20.8903 15.7974 20.7103 16.6238 20.9218 17.2893C21.1212 17.7672 21.6679 17.9213 22.1153 18.0635C24.6924 18.7435 27.4233 18.6758 29.9512 19.5707C30.9978 19.9355 32.0216 20.6448 32.3798 21.7503C32.8484 23.232 32.643 25.0031 31.5981 26.1926C30.7507 27.1714 29.5166 27.7042 28.2857 27.9935C26.6482 28.3619 24.9488 28.3713 23.2859 28.2077C21.7222 28.0279 20.095 27.6134 18.8878 26.5385C17.8556 25.6343 17.3514 24.2253 17.4015 22.8655C17.4134 22.6358 17.6401 22.4757 17.8581 22.4945C18.4829 22.4894 19.1077 22.4877 19.7325 22.4954C19.9821 22.4774 20.1671 22.695 20.1799 22.9323C20.2952 23.6935 20.5788 24.4926 21.2367 24.9439C22.5066 25.7704 24.0999 25.7138 25.554 25.737C26.7586 25.6831 28.1108 25.6667 29.0938 24.8635C29.6125 24.4053 29.7662 23.6388 29.626 22.9794C29.4742 22.4226 28.8969 22.1632 28.4011 21.9935C25.8571 21.1816 23.0957 21.4762 20.5762 20.5581C19.5534 20.1934 18.5643 19.5039 18.1714 18.4438C17.623 16.9433 17.8743 15.0874 19.0287 13.9381C20.1543 12.7948 21.7791 12.3547 23.324 12.1971Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_399_1107">
          <rect
            width="36"
            height="40"
            fill="white"
            transform="translate(2.66675)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}