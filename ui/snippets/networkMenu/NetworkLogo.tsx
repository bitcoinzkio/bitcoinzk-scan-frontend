import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import { route } from 'nextjs-routes';

import config from 'configs/app';

interface Props {
  isCollapsed?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
}

const NetworkLogo = ({ isCollapsed, onClick }: Props) => {
  return (
    <Box
      as="a"
      href={ route({ pathname: '/' }) }
      width={{
        base: '120px',
        lg: isCollapsed === false ? '120px' : '30px',
        xl: isCollapsed ? '30px' : '120px',
      }}
      height={{
        base: '50px',
        lg: isCollapsed === false ? '50px' : '30px',
        xl: isCollapsed ? '30px' : '50px',
      }}
      display="inline-flex"
      overflow="hidden"
      onClick={ onClick }
      flexShrink={ 0 }
      marginTop={{
        base: '40px',
        lg: '30px',
        xl: '40px',
      }}
      aria-label="Link to main page"
    >
      { /* big logo */ }
      <Image
        w="auto"
        h="100%"
        // src={logoSrc}
        alt={ `${ config.chain.name } network logo` }
        fallback={ <img src="./zk-logo.svg"/> }
        // display={{
        //   base: "block",
        //   lg: isCollapsed === false ? "block" : "none",
        //   xl: isCollapsed ? "none" : "block",
        // }}
        // style={logoStyle}
      />
    </Box>
  );
};

export default React.memo(NetworkLogo);
