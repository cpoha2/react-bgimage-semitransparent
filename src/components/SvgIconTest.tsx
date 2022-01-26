import React from 'react';
import { IconButton, SvgIcon, Icon } from '@material-ui/core';
import { AcUnitOutlined } from '@material-ui/icons';
import { ReactComponent as MySkypeIconTestOne} from '../assets/SkypeOptimized.svg';

const SvgIconTest = (props : any) => {
    return (
        <div>
            
            BUTTONS: <br/>

            <IconButton 
                aria-label="test"
                size="medium" 
                onClick={() => {alert("You clicked the snowflake icon button")}}
            >
                <AcUnitOutlined/>
            </IconButton>

            
            <IconButton
                aria-label="svg tester"
                size="medium"
                onClick={() => {alert("This is the SVG icon that we hope works")}}
            >
                <SvgIcon {...props}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
            </IconButton>

            <IconButton 
                aria-label="whatever"
                size="medium"
                onClick={() => {alert("one")}}
                >
                    <SvgIcon component={MySkypeIconTestOne}></SvgIcon>
                </IconButton>

{/*             <IconButton
                aria-label="svg tester"
                size="medium"
                onClick={() => {alert("This is the Skype icon that we hope works")}}
            >
                <SvgIcon {...props}>
                <path
     fill="#fffffe"
     d=" M 0.00 0.00 L 256.00 0.00 L 256.00 256.00 L 0.00 256.00 L 0.00 0.00 Z"
     id="path4"
     style={{fill:"none"}} />
  <path
     fill="#00aff0"
     d=" M 38.00 21.99 C 58.33 7.32 87.08 6.06 108.73 18.61 C 133.14 14.38 158.95 18.40 180.73 30.27 C 205.04 43.33 224.13 65.76 233.02 91.90 C 239.13 109.59 240.55 128.82 237.37 147.25 C 245.19 161.00 247.90 177.55 244.73 193.06 C 241.38 210.17 230.83 225.68 216.24 235.21 C 196.04 248.79 168.29 249.56 147.25 237.38 C 123.82 241.41 99.11 237.92 77.91 227.10 C 53.27 214.72 33.62 192.82 24.01 166.97 C 17.05 148.50 15.30 128.18 18.61 108.74 C 10.62 94.75 8.03 77.84 11.44 62.10 C 14.82 46.02 24.55 31.41 38.00 21.99 Z"
     id="path6" />
  <path
     fill="#fffffe"
     d=" M 49.00 34.98 C 61.35 26.69 77.55 24.62 91.62 29.41 C 96.62 31.00 101.12 33.75 105.64 36.34 C 123.28 32.49 142.00 33.05 159.07 39.16 C 186.24 48.55 208.42 71.08 217.34 98.41 C 223.00 115.07 223.38 133.21 219.65 150.34 C 224.05 157.55 227.84 165.35 228.73 173.85 C 230.91 189.86 224.39 206.64 212.12 217.12 C 200.14 227.68 182.84 231.70 167.42 227.49 C 161.27 226.00 155.76 222.81 150.34 219.66 C 131.76 223.73 111.98 222.83 94.21 215.84 C 67.98 205.85 46.85 183.53 38.38 156.77 C 32.95 140.32 32.68 122.50 36.35 105.64 C 30.68 96.80 26.67 86.62 26.87 75.97 C 26.72 59.73 35.40 43.82 49.00 34.98 Z"
     id="path8"
     style={{fill:"#ffffff;fill-opacity:1"}} />
  <path
     fill="#00aff0"
     d=" M 113.41 60.77 C 129.40 58.35 146.25 60.80 160.52 68.54 C 166.76 72.00 172.80 76.68 175.70 83.40 C 177.59 87.82 177.80 93.59 174.31 97.29 C 170.53 101.16 164.36 102.35 159.29 100.72 C 153.42 98.26 150.50 92.11 145.52 88.45 C 139.26 83.29 130.83 81.90 122.94 82.04 C 117.17 82.29 110.99 83.60 106.78 87.84 C 102.89 91.99 101.45 99.10 105.24 103.77 C 108.82 107.90 114.35 109.44 119.42 110.85 C 129.09 113.27 138.87 115.22 148.58 117.51 C 158.68 119.82 168.88 124.24 175.55 132.47 C 187.05 147.37 184.46 171.00 170.16 183.20 C 158.72 193.33 142.81 196.13 127.99 196.22 C 112.17 195.99 95.26 192.75 83.10 181.93 C 77.00 176.43 71.87 168.13 73.71 159.64 C 75.72 151.20 87.31 148.00 93.88 153.19 C 98.90 157.22 101.62 163.35 106.46 167.56 C 112.25 172.87 120.32 174.98 128.04 174.79 C 135.61 174.99 143.65 172.67 148.84 166.91 C 152.37 163.02 154.24 157.10 151.95 152.12 C 150.07 147.44 145.24 144.89 140.62 143.63 C 132.10 141.40 123.52 139.37 115.00 137.12 C 105.64 134.83 95.91 132.74 87.86 127.16 C 81.58 122.99 76.82 116.48 75.29 109.06 C 72.72 97.42 74.56 83.99 83.02 75.10 C 90.76 66.49 102.24 62.49 113.41 60.77 Z"
     id="path10" />
                </SvgIcon>
</IconButton> */}

<br/><br/>
NOT BUTTONS: <br/>
icon 1: <SvgIcon component={MySkypeIconTestOne}></SvgIcon>
icon 2: <SvgIcon titleAccess="blah"><g>
<path style={{ color:"blue"}} d="M38 21.99c20.33-14.67 49.08-15.93 70.73-3.38 24.41-4.23 50.22-.21 72 11.66 24.31 13.06 43.4 35.49 52.29 61.63 6.11 17.69 7.53 36.92 4.35 55.35 7.82 13.75 10.53 30.3 7.36 45.81-3.35 17.11-13.9 32.62-28.49 42.15-20.2 13.58-47.95 14.35-68.99 2.17-23.43 4.03-48.14.54-69.34-10.28-24.64-12.38-44.29-34.28-53.9-60.13-6.96-18.47-8.71-38.79-5.4-58.23-7.99-13.99-10.58-30.9-7.17-46.64C14.82 46.02 24.55 31.41 38 21.99Z"/>
<path style={{color:"#fff"}} d="M49 34.98c12.35-8.29 28.55-10.36 42.62-5.57 5 1.59 9.5 4.34 14.02 6.93 17.64-3.85 36.36-3.29 53.43 2.82 27.17 9.39 49.35 31.92 58.27 59.25 5.66 16.66 6.04 34.8 2.31 51.93 4.4 7.21 8.19 15.01 9.08 23.51 2.18 16.01-4.34 32.79-16.61 43.27-11.98 10.56-29.28 14.58-44.7 10.37-6.15-1.49-11.66-4.68-17.08-7.83-18.58 4.07-38.36 3.17-56.13-3.82-26.23-9.99-47.36-32.31-55.83-59.07-5.43-16.45-5.7-34.27-2.03-51.13-5.67-8.84-9.68-19.02-9.48-29.67C26.72 59.73 35.4 43.82 49 34.98Z" />
<path style={{color:"#00aff0"}} d="M113.41 60.77c15.99-2.42 32.84.03 47.11 7.77 6.24 3.46 12.28 8.14 15.18 14.86 1.89 4.42 2.1 10.19-1.39 13.89-3.78 3.87-9.95 5.06-15.02 3.43-5.87-2.46-8.79-8.61-13.77-12.27-6.26-5.16-14.69-6.55-22.58-6.41-5.77.25-11.95 1.56-16.16 5.8-3.89 4.15-5.33 11.26-1.54 15.93 3.58 4.13 9.11 5.67 14.18 7.08 9.67 2.42 19.45 4.37 29.16 6.66 10.1 2.31 20.3 6.73 26.97 14.96 11.5 14.9 8.91 38.53-5.39 50.73-11.44 10.13-27.35 12.93-42.17 13.02-15.82-.23-32.73-3.47-44.89-14.29-6.1-5.5-11.23-13.8-9.39-22.29 2.01-8.44 13.6-11.64 20.17-6.45 5.02 4.03 7.74 10.16 12.58 14.37 5.79 5.31 13.86 7.42 21.58 7.23 7.57.2 15.61-2.12 20.8-7.88 3.53-3.89 5.4-9.81 3.11-14.79-1.88-4.68-6.71-7.23-11.33-8.49-8.52-2.23-17.1-4.26-25.62-6.51-9.36-2.29-19.09-4.38-27.14-9.96-6.28-4.17-11.04-10.68-12.57-18.1-2.57-11.64-.73-25.07 7.73-33.96 7.74-8.61 19.22-12.61 30.39-14.33Z"/>
</g>
</SvgIcon>
icon 3: <SvgIcon {...props}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
        </div>
    );
}

export default SvgIconTest;