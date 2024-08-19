import {
    Box,
    Card,
    Text,
    Heading,
    Flex,
    Separator,
    TextField,
    Select
} from '@radix-ui/themes';

export default function PlayerProfile() {
    return (
        <Box width={{lg: "550px", md: "550px", xs: "200px", sm: "200px"}} className='shadow-xl'>
            <Card>
                <Box className='p-3'>
                    <Box>
                        <Heading>STATUS</Heading>
                    </Box>

                    <Flex direction="column" mt="2" mb="2" gap="2">
                        <Flex direction="row" justify="between">
                            <Flex direction="row" align="center" gap="2" width="240px">
                                <Text weight="bold">NAME:</Text>
                                <TextField.Root type="text" placeholder='Your Name'/>
                            </Flex>
                            <Flex direction="row" align="center" gap="2" width="240px">
                                <Text weight="bold">LEVEL:</Text>
                                <TextField.Root type="number" placeholder='Your Level' defaultValue={89}/>
                            </Flex>
                        </Flex>
                        <Flex direction="row" align="center" gap="2" width="240px">
                            <Text weight="bold">CLASS:</Text>
                            <Select.Root defaultValue='warrior'>
                                <Select.Trigger />
                                <Select.Content>
                                    <Select.Item value="warrior">Warrior</Select.Item>
                                    <Select.Item value="mage">Mage</Select.Item>
                                    <Select.Item value="archer">Archer</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Flex>
                        <Flex direction="row" align="center">
                            <Text weight="bold">TITLE:&nbsp;</Text>
                            <Select.Root defaultValue='player'>
                                <Select.Trigger />
                                <Select.Content>
                                    <Select.Item value="berserker">Berserker</Select.Item>
                                    <Select.Item value="player">Player</Select.Item>
                                    <Select.Item value="returner">Returner</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Flex>
                    </Flex>

                    <Separator size="4"/>

                    <Flex direction="column" mt="2" mb="2">
                        <Flex direction="row" justify="between">
                            <Text weight="bold">HP: 110</Text>
                            <Text weight="bold">MP: 258</Text>
                        </Flex>
                        <Text weight="bold">FATIGUE: 0</Text>
                    </Flex>

                    <Separator size="4"/>

                    <Flex direction="column"  mt="2" mb="2">
                        <Flex direction="row" justify="between">
                            <Text weight="bold">STRENGTH: 243</Text>
                            <Text weight="bold">STAMINA: 88</Text>
                        </Flex>
                        <Flex direction="row" justify="between">
                            <Text weight="bold">AGILITY: 273</Text>
                            <Text weight="bold">INTELLIGENCE: 100</Text>
                        </Flex>
                        <Flex direction="row" justify="between">
                            <Text weight="bold">PERCEPTION: 72</Text>
                            <Text weight="bold">AP: 10, 000</Text>
                        </Flex>
                    </Flex>

                    <Separator size="4"/>

                    <Flex direction="column" mt="2">
                        <Text weight="bold">PHYSICAL DAMAGE REDUCTION: 57.3%</Text>
                        <Text weight="bold">MAGICAL DAMAGE REDUCTION: 69.4%</Text>
                    </Flex>
                </Box>
            </Card>
        </Box>
    );
}