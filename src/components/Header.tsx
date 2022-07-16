import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(){
    const router = useRouter(); 

    return (
        <Flex as="header" justify="center" align="center"  m='auto' w={[375, 375, 1440]}>
            <Flex position='absolute' m='auto' w={[375, 375, 1440]} align='center'>
                {router.asPath.includes('/continent') && (
                    <Link href="/" passHref>
                        <ChevronLeftIcon w={["16px", "16px", "32px"]} h={["16px", "16px", "32px"]} ml={["16px", "16px", "140px"]} _hover={{
                            cursor: "pointer"
                        }}/>
                    </Link>
                )}
            </Flex>
            <Image src='/images/logo.svg' alt="logo" h={["20px", "20px", "45px"]} w={["81px", "81px", "180px"]} marginY="27px"/>
        </Flex>
    )
}