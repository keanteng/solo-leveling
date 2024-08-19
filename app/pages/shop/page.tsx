import Equipment from "@/app/components/equipments"
import {
    Flex,
    Box,
    Callout
} from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export default function Shop() {
    return (
        <Box pt={{md: "75px", initial: "125px"}} width="10" height="1280px" pl="10%"> 
            <Callout.Root size="2" style={{width: "500px", marginBottom: "30px"}}>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Images might take time to load due to server limitation 🥹
                </Callout.Text>
            </Callout.Root>
            <Equipment />
        </Box>
    )
}