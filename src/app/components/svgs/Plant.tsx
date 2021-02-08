import React from 'react';

interface Props {
  props?: any;
}

const Plant: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.29273 11.7513C9.6241 12.481 10.7969 13.4175 11.7552 14.5159C11.7841 14.5498 11.8215 14.5773 11.8644 14.5962C11.9073 14.6152 11.9546 14.625 12.0025 14.625C12.0504 14.625 12.0977 14.6152 12.1406 14.5962C12.1835 14.5773 12.2209 14.5498 12.2498 14.5159C13.2064 13.4172 14.377 12.4798 15.7061 11.748C15.8006 11.6962 15.8777 11.6228 15.9293 11.5355C15.9809 11.4481 16.005 11.35 15.9991 11.2515C15.845 8.57461 14.574 6.04464 12.4341 4.15482C12.3158 4.0554 12.1591 4 11.9963 4C11.8335 4 11.6768 4.0554 11.5586 4.15482C9.42363 6.04843 8.15589 8.57844 8.0009 11.2548C7.99492 11.3532 8.01886 11.4512 8.07021 11.5386C8.12156 11.6259 8.19842 11.6994 8.29273 11.7513Z" fill="#2B2F51" />
    <path
      d="M9.28895 20.9754C9.36223 21.0005 9.43977 21.0065 9.51549 20.9929C9.59122 20.9792 9.66304 20.9464 9.72533 20.8969C9.78761 20.8473 9.83865 20.7825 9.87443 20.7075C9.91022 20.6325 9.92976 20.5493 9.93153 20.4645C10.002 18.8953 10.3479 17.3562 10.9499 15.9329C10.9882 15.8461 11.005 15.7497 10.9987 15.6535C10.9925 15.5573 10.9633 15.4646 10.9142 15.3848C10.0991 14.0361 8.99565 12.9304 7.70169 12.1655C6.40773 11.4007 4.96314 11.0004 3.49582 11C3.36432 11 3.23821 11.0577 3.14522 11.1605C3.05224 11.2633 3 11.4027 3 11.5481C3.00219 13.6553 3.61359 15.7066 4.74497 17.4026C5.87635 19.0986 7.46847 20.3504 9.28895 20.9754Z" fill="#2B2F51" />
    <path
      d="M14.711 20.9754C14.6378 21.0005 14.5602 21.0065 14.4845 20.9929C14.4088 20.9792 14.337 20.9464 14.2747 20.8969C14.2124 20.8473 14.1613 20.7825 14.1256 20.7075C14.0898 20.6325 14.0702 20.5493 14.0685 20.4645C13.998 18.8953 13.6521 17.3562 13.0501 15.9329C13.0118 15.8461 12.995 15.7497 13.0013 15.6535C13.0075 15.5573 13.0367 15.4646 13.0858 15.3848C13.9009 14.0361 15.0043 12.9304 16.2983 12.1655C17.5923 11.4007 19.0369 11.0004 20.5042 11C20.6357 11 20.7618 11.0577 20.8548 11.1605C20.9478 11.2633 21 11.4027 21 11.5481C20.9978 13.6553 20.3864 15.7066 19.255 17.4026C18.1236 19.0986 16.5315 20.3504 14.711 20.9754Z" fill="#2B2F51" />
  </svg>
);

export default Plant;
