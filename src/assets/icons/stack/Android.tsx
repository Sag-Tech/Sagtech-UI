/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import type { SVGProps } from 'react'

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
  color: string
}

export default function Android ({ color, ...rest }: IAttachIconProps) {
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
        d="M15.5351 23.5734C16.6837 23.5734 17.6149 24.5046 17.6149 25.6532V34.5754C17.6149 35.7241 16.6837 36.6551 15.5351 36.6551C14.3865 36.6551 13.4553 35.7241 13.4553 34.5754V25.6532C13.4553 24.5047 14.3865 23.5735 15.5351 23.5735V23.5734Z"
        fill="#F8F8F8"
      />
      <path
        d="M10.7869 12.8464C10.78 12.9253 10.774 13.005 10.774 13.0857V26.6035C10.774 28.0573 11.9248 29.2285 13.3533 29.2285H27.1C28.5287 29.2285 29.6794 28.0572 29.6794 26.6035V13.0857C29.6794 13.005 29.6765 12.925 29.6697 12.8464H10.7869Z"
        fill="#F8F8F8"
      />
      <path
        d="M24.9185 23.5733C26.0672 23.5733 26.9984 24.5046 26.9984 25.6532V34.5754C26.9984 35.7241 26.0672 36.6551 24.9185 36.6551C23.7699 36.6551 22.8387 35.7241 22.8387 34.5754V25.6532C22.8387 24.5047 23.7699 23.5735 24.9185 23.5735V23.5733ZM7.4323 14.0495C8.58083 14.0495 9.51204 14.9807 9.51204 16.1294V25.0515C9.51204 26.2002 8.58083 27.1314 7.4323 27.1314C6.28363 27.1314 5.35242 26.2002 5.35242 25.0517V16.1295C5.35227 14.9808 6.28348 14.0495 7.4323 14.0495ZM33.0214 14.0495C34.17 14.0495 35.1012 14.9807 35.1012 16.1294V25.0515C35.1012 26.2002 34.17 27.1314 33.0214 27.1314C31.8728 27.1314 30.9415 26.2002 30.9415 25.0517V16.1295C30.9415 14.9808 31.8728 14.0495 33.0214 14.0495ZM10.8477 11.9585C10.9055 7.80632 14.5296 4.40191 19.1815 3.95325H21.2718C25.924 4.40206 29.5478 7.80661 29.6056 11.9585H10.8477Z"
        fill="#F8F8F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4615 3.36276C11.5663 3.30227 11.7003 3.33817 11.7608 3.44295L13.9547 7.24315C14.0152 7.34793 13.9793 7.48191 13.8745 7.54241C13.7697 7.6029 13.6358 7.567 13.5753 7.46222L11.3813 3.66202C11.3208 3.55724 11.3567 3.42325 11.4615 3.36276ZM28.9922 3.36276C29.097 3.42326 29.1329 3.55724 29.0724 3.66202L26.8783 7.46222C26.8178 7.567 26.6838 7.6029 26.5791 7.54241C26.4743 7.48191 26.4384 7.34792 26.4989 7.24314L28.693 3.44295C28.7535 3.33816 28.8874 3.30227 28.9922 3.36276Z"
        fill="#F8F8F8"
      />
      <path
        d="M17.4327 8.23749C17.4344 8.81789 16.9541 9.28977 16.3597 9.29138C15.7655 9.29284 15.2824 8.82373 15.2806 8.24333V8.23749C15.279 7.65694 15.7594 7.1852 16.3537 7.1836C16.9478 7.18199 17.4309 7.65095 17.4327 8.23165V8.23749ZM25.4648 8.23749C25.4665 8.81789 24.9862 9.28977 24.3918 9.29138C23.7976 9.29284 23.3145 8.82373 23.3128 8.24333V8.23749C23.3112 7.65694 23.7915 7.1852 24.3858 7.1836C24.9799 7.18199 25.463 7.65095 25.4648 8.23165V8.23749Z"
        fill="#292A94"
      />
    </svg>
  )
}