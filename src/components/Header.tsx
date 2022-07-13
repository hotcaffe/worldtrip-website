import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(){
    const router = useRouter(); 

    return (
        <Flex as="header" justify="center" align="center">
            <Flex position='absolute' m='auto' w={1440} align='center'>
                {router.asPath == '/continent' && (
                    <Link href="/" passHref>
                        <ChevronLeftIcon w="32px" h="32px" ml="140px" _hover={{
                            cursor: "pointer"
                        }}/>
                    </Link>
                )}
            </Flex>
            <Image src='/images/logo.svg' alt="logo" h="45px" w="180px" marginY="27px"/>
        </Flex>
    )
}