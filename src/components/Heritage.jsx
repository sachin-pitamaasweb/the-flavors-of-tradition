// import React from "react";
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// import '../style/Heritage.css';

// const Heritage = () => {
//     const theme = useTheme();
//     const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
//     const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
//     const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

//     const fontSizeforHeritageH3 = isTablet ? '2.5rem' : isDesktop ? '108px !important' : isLargeDesktop ? '48px' : '2rem';

//     return (
//         <div className="heritage">
//             <div className="heritage-text-div">
//                 <div className="heritage-text">
//                     <span className="heritage-span" >OUR HERITAGE</span>
//                     <h3 style={{ fontSizeforHeritageH3 }} className={`heritage-h3`}>Taste the Essence of Excellence with MRMC Foods</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Heritage;


import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

import '../style/Heritage.css';

const Heritage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const heritageSpanStyle = {
        fontFamily: 'Libre Baskerville',
        fontSize: isDesktop ? '48px' : isTablet ? '38px' : '20px',
        letterSpacing: isDesktop ? '30px' : isTablet ? '10px' : '5px',
        color: '#316C2F',
        fontWeight: 'bold',
    };

    const heritageH3Style = {
        fontFamily: 'Libre Baskerville',
        fontSize: isLargeDesktop ? '125px' : isDesktop ? '2.5rem' : isTablet ? '50px' : '1.5rem',
        letterSpacing: isLargeDesktop ? '2px' : isDesktop ? '1.5px' : isTablet ? '1px' : '0.5px',
        color: '#316C2F',
        marginBottom: '-0.5rem'
    };

    const heritageImageStyle = {
        marginTop: isLargeDesktop ? '-300px' : isDesktop ? '0px' : isTablet ? '0px' : '0px',
        marginLeft: isLargeDesktop ? '450px' : isDesktop ? '0px' : isTablet ? '0px' : '0px',
        position: 'relative',
        left: '0px',
        top: '0px',
        zIndex: '-1'
    }


    return (
        <div className="heritage">
            <div className="heritage-text-div">
                <div className="heritage-text">
                    <span className="heritage-span">
                        <Typography variant="h6" sx={heritageSpanStyle}>OUR HERITAGE</Typography>
                    </span>
                    <Typography variant="h3" sx={heritageH3Style}>Taste the Essence of Excellence with MRMC Foods</Typography>
                </div>
            </div>
            <div className="heritage-img-text">
                <div className="heritage-img-div">
                    <img className="heritage-img" style={heritageImageStyle} src={require('../assets/images/bg-image4.png')} alt="heritage" />
                </div>
            </div>
        </div>
    );
};

export default Heritage;
