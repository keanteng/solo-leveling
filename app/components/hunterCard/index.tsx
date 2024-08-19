import {
    Text,
    Card,
    Flex,
    Box,
    Heading,
} from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';

export default function HunterCard() {
    return (
    <Box className='shadow-xl' width="400px" height="200px">
    <Card
    style={{
        backgroundColor: "slategray",
        height: "200px",
        width: "400px",
    }}
    >
        <Flex direction="column" gap="110px">
            <Text weight="bold">
                Korean Hunter Association
            </Text>

            <Flex gap="-1" direction="column">
                <Flex gap="1" direction="row">
                    <Text size="2">
                        3495 4838 4573
                    </Text>
                    <CopyIcon />
                </Flex>
                <Text size="2">
                    Rank: S
                </Text>
            </Flex>
        </Flex>
    </Card>
    </Box>
    );
}