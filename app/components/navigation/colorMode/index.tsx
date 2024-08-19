'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import {
    IconButton,
    Flex,
    Link
} from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

const ColorMode = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // darkMode state
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

    // function handle
    const handleClick = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        setTheme(newDarkMode ? 'dark' : 'light');
    }

    return (
        <Flex gap="3">
            <IconButton onClick={handleClick} color='gray' highContrast>
                {darkMode ? <MoonIcon /> : <SunIcon />}
            </IconButton>

            <IconButton color='gray' highContrast>
                <Link underline='none' href="https://www.google.com">
                {darkMode ? <GitHubLogoIcon color="black" /> : <GitHubLogoIcon color="white"/>}
                </Link>
            </IconButton>
        </Flex>
    )
}

export default React.memo(ColorMode);