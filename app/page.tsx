'use client';

import {
  Text,
  Box,
  Heading,
  Flex,
  Card,
  Blockquote,
  Quote,
  Tabs,
  Avatar,
} from '@radix-ui/themes';
import { motion } from 'framer-motion';

export default function Home() {
  const landing_text = "Shall Thy Be Spared, Worship God, Praise God and Prove Thy Faith.".split(" ");
  const players = [
    {
      name: "Jinwoo",
      message: "Let's get stronger together!",
      avatar: 'https://64.media.tumblr.com/7c758a838962a8d187c6d45016cd58d3/cd0cfa06979422e5-53/s1280x1920/5d7e91a510d832338c246886eaf0e42db7ebe7c0.jpg',
    },
    {
      name: "Hae In",
      message: "Don't be late for the training!",
      avatar: "https://64.media.tumblr.com/fec2ecd32a2bdbac13abaa08eeb8207b/e540faf1728a9f5c-e5/s1280x1920/c70213001330dee61462459d6acb3221d8ea4a6c.jpg",
    },
  ]

  return (
    <Box 
      height="1500px" 
      width="100vw" 
      pt={{md: "75px", initial: "125px"}} 
    >
      <Box width={{md: "75%", initial: "80%"}} pl={{md: "7", initial: "5"}}>
        <Heading size={{md: "9", initial: "8"}}>
        {landing_text.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {letter}{" "}
          </motion.span>
        ))}
        </Heading>
      </Box>
      
      <Box width={{md: "70%", initial: "90%"}} pl={{md: "7", initial: "5"}}>
        <Blockquote color='gray' highContrast mt="6">
          <Quote>
          Destroy Everything. That Is The Only Mission Bestowed Upon Us.
          </Quote>
        </Blockquote>
      </Box>

      <Tabs.Root defaultValue="account" className="w-9/12 pt-8 pl-8">
        <Tabs.List color='gray' highContrast>
          <Tabs.Trigger value="account">Build</Tabs.Trigger>
          <Tabs.Trigger value="documents">Features</Tabs.Trigger>
        </Tabs.List>

        <Box as='div' pt="3">
          <Tabs.Content value="account">
            <Text>
                The site is powered by Next.js, Radix UI, and Framer Motion to 
                give you the experience of using System and become a Player as in the Manhwa Solo-Leveling 🔥
            </Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text>
                You can play around with your player profile 🧑‍🍼, and see the stats 📊 of your player.
                Check the notifications 🔔 to learn more about the game. Also, go and buy some cool items 💰 from the shop.
              
              </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <Flex direction={{md: "row", initial: "column"}} gap="3" mt="6" pl="6">
        {players.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , y: 10}}
            transition={{ duration: 2, ease: "easeInOut", delay: index * 1 }}
          >
            <Box maxWidth="280px" className='shadow-lg'>
              <Card key={index} className="mb-4">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={player.avatar}
                    radius="full"
                    fallback="F"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {player.name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      {player.message}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
            </motion.div>
        ))}
      </Flex>
    </Box>
  );
}
