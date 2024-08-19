import {
    Flex,
    Box,
    Link,
    Heading,
} from '@radix-ui/themes';
import ColorMode from '../colorMode';
import React from 'react';

const Header = () => {
    const links = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Profile',
            href: '/pages/profile'
        },
        {
            name: 'Shop',
            href: '/pages/shop'
        }
    ]


    return (
        <Box position={{md: "fixed", initial: "fixed", sm: "fixed", xs: "fixed"}} width="100vw" pr="6" className='bg-inherit border-b border-gray-500' style={{zIndex: 9999}}>
            <Flex justify="between" ml="2" mr="3" mb="2" mt="2" align="center" direction={{initial: 'column', sm: 'row'}}>
                <Heading>※ Solo-Leveling</Heading>

                <Flex gap="4">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} underline='none' color="gray" highContrast>
                            {link.name}
                        </Link>
                    ))}
                </Flex>

                <ColorMode />
            </Flex>
        </Box>
)
}

export default React.memo(Header);