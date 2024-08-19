'use client';

import PlayerProfile from "@/app/components/playerProfile";
import HunterCard from "@/app/components/hunterCard";
import { motion } from 'framer-motion';
import {
    Flex,
    Heading
} from '@radix-ui/themes'

export default function Profile() {
    return (
    <>
        <Flex
        width="100vw"
        height="100vh"
        align="center"
        gap="9"
        justify={{md: "center", lg: "center", xl: "center"}}
        direction={{initial: "column", xs: "column", sm: "column", md: "row"}}
        ml={{sm: "5", xs: "5"}}
        >   
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1 , x: 0}}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, type: "spring" }}
        >
            <Heading size="9">
                Welcome Player
            </Heading>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1 , y: 5}}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, type: "spring"}}
        >
            <PlayerProfile />
        </motion.div>
        </Flex>

        <Heading className="text-center" size="8">
            Hunter's Card
        </Heading>

        <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, type: "spring" }}
        >
            <Flex height="100vh" justify="center" mt="9">
                <HunterCard />
            </Flex>
        </motion.div>
    </>
    );
}