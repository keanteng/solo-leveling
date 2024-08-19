'use client';

import {
    Card,
    Box,
    Text,
    Heading,
    Inset,
    Flex,
    Badge
} from '@radix-ui/themes';

export default function Equipment() {

    const equipments = [
        {
            name: 'Heavenly Demon Sword',
            description: 'A legendary sword owned by the founder of Demonic Cult ',
            rarity: 'SSS',
            Effect: 'Cannot be Measured',
            image: "https://placewaifu.com/image/320/150",
        },
        {
            name: '??? Egg',
            description: 'An egg of unknown origin and possesses mysterious power',
            rarity: 'SSS',
            Effect: '???',
            image: 'https://placewaifu.com/image/321/150',
        },
        {
            name: 'Demonic Breathing Technique',
            description: 'An advanced breathing technique that increase your cultivation speed',
            rarity: 'S',
            Effect: 'Growth + 10%',
            image: 'https://placewaifu.com/image/319/150',
        },
        {
            name: 'Saber of Light',
            description: 'A saber possess only by the spirit of light',
            rarity: '???',
            Effect: 'N/A',
            image: 'https://placewaifu.com/image/318/150',
        },
        {
            name: 'Crimson Eyes',
            description: 'A pair of eyes that can see through partial future',
            rarity: 'C+',
            Effect: 'Intelligence + 5%',
            image: 'https://placewaifu.com/image/317/150',
        },
        {
            name: 'Steps of Wind God',
            description: 'Movement technique that trespass the limit of sound speed',
            rarity: 'S',
            Effect: 'Agi + 100%',
            image: 'https://placewaifu.com/image/320/150?greyscale',
        },
        {
            name: 'Toad Eater',
            description: 'Receive an item by feeding an item to the toad',
            rarity: 'AAA',
            Effect: 'N/A',
            image: 'https://placewaifu.com/image/320/151?greyscale',
        },
    ]

    return (
        <div className="flex flex-wrap gap-3">
        {equipments.map((equipment, index) => (
            <div key={index} className="flex-1 basis-1/4 max-w-xs max-h-xs">
                <Card size="2">
                    <Inset clip='padding-box' side='top' pb='current'>
                        <img 
                            src={equipment.image}
                            alt={equipment.name}
                        />
                    </Inset>
                    <Heading size="2" mb="3">
                        {equipment.name}
                    </Heading>
                    <Flex direction="column" gap="2">
                        <Flex width="175px" direction="column" gap="2">
                            <Badge color='orange' size="2">Rarity: {equipment.rarity}</Badge>
                            <Badge color='crimson' size="2">Effect: {equipment.Effect}</Badge>
                        </Flex>
                    <Text size="2" mt="2">
                        {equipment.description}
                    </Text>
                    </Flex>
                </Card>
            </div>
        ))}
        </div>
    )
}