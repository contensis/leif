import React from 'react';

interface Props {
  props?: any;
}

const VideoPlay = (props: Props) => (
  <svg
    width="64"
    height="56"
    viewBox="0 0 64 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 27.6V37.857C64 49.6055 61.9403 52.7753 54.9703 54.6405C52.4353 55.2 39.921 55.2 31.9995 55.2C24.079 55.2 11.5638 55.2 9.02975 54.6405C2.05878 52.7753 0 49.6055 0 37.857V27.6V17.343C0 5.59452 2.05878 2.42466 9.02975 0.559452C11.5638 0 24.079 0 31.9995 0C39.921 0 52.4353 0 54.9703 0.559452C61.9403 2.42466 64 5.59452 64 17.343V27.6Z"
      fill="black"
      fillOpacity="0.6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0005 17.2498V37.9852L40.2822 27.7073L23.0005 17.2498Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.4135 28.9701L40.2827 27.7075L23 17.25L38.4135 28.9701Z"
      fill="#CCCCCC"
    />
  </svg>
);

export default VideoPlay;
