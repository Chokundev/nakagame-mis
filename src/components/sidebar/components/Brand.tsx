// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';


// Custom components
// import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	// Chakra color mode
	const logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<img src="https://medalrank-nakagame42.pages.dev/nakagame-logo.svg" alt="Nakagame Logo" width="90%" />
			{/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
