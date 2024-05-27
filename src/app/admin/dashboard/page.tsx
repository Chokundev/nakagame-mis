'use client';

import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   SimpleGrid,
//   useColorModeValue,
//   Text,
//   Link,
//   Divider,
// } from '@chakra-ui/react';
// import { ExternalLinkIcon } from '@chakra-ui/icons';

const Dashboard: React.FC = () => {
  // State to manage client-side rendering
  const [isClient, setIsClient] = useState(false);

  // Chakra Color Mode
  // const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  useEffect(() => {
    // Ensure the component is rendered on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevent hydration error by not rendering until client-side
    return null;
  }

  return (
    <iframe src="https://script.google.com/macros/s/AKfycbxttpW3JTCewFnpdYtooJ_glMJlxGeYQ5X7TP9M1LBVHQJma7vUqhhMiAagqAHr-E_uSw/exec" width="100%" height="2000px" frameBorder="0"></iframe>
  );
}

export default Dashboard;
