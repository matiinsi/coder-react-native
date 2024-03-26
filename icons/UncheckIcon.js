import Svg, { Path } from 'react-native-svg';

const UncheckIcon = ({color}) => (
    <Svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke={color} 
        width={36}
        height={36}
    >
        <Path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
        />
  </Svg>
  
);

export default UncheckIcon