import { Box, Image, Heading, Text, Button, Container, Center, Link} from "@chakra-ui/react"
import { LinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapPin} from "react-icons/fa"

export default function detailsCard(props){
    return(
        <Container>
            <Box maxW={"xl"} maxH={'100vh'} bgGradient='linear(to-r, #23a9ff, #48a7ba)' mt='6.2rem' borderRadius='3.12rem' boxShadow=' 0 0.63rem 1.3rem -0.3rem #848b90' display='flex' p='1.3rem'>
                <Image src={`${props.logo}`} alt='Hospital-image2' w='10rem' h='10rem' p='2.5rem' ml="-1.9rem" mt='-1.3rem'/>

                <Box display='flex' flexDir='column'>
                    <Heading fontSize='1.2rem' color='white' marginTop='1.3rem' ml='-1.13rem'>
                        {props.name}
                    </Heading>
                    
                    <Box display='flex' ml='-1.95rem' mt='0.625rem'>
                        <Link href={props.website}>
                            <Text fontSize='xs' color='white' fontFamily='sans-serif'> 
                                <LinkIcon ml='0.625rem'/>
                                Our website
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' ml='3.8rem' mt='-1.1rem'>
                        <FaMapPin color='red'/>
                        <Link href={props.googleMapUrl}>
                            <Text fontSize='xs' textDecor='underline' color='white' fontFamily='sans-serif' fontWeight={400}>
                                View in Maps
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' mt='0.5rem' ml='-0.87rem'>
                        <Text fontSize='0.8rem' color='white' fontWeight={600}>
                            Service Hours: <i>{props.openingHours}</i></Text>
                    </Box>

                    <Box display="flex" mt='-0.325rem'>
                        <Text fontSize='1.5rem' color='white' fontWeight={600}  mt='1.3rem' ml='-3.75rem'>
                            Specialties
                        </Text>
                        <Text fontSize='0.94rem' color='white' ml='-7.81rem' mt='1.3rem' fontWeight={500} p='2.5rem'>
                            {props.specialties}
                        </Text>
                    </Box>


                    <Box display="flex" mt="-0.5125rem" >
                        <Text fontSize='1.5rem' color='white' fontWeight={600} mt='-1.3rem' ml='-3.75rem'>
                            Services
                        </Text>
                        <Text fontSize='0.9375rem' color='white' fontWeight={500}  ml='-6.2rem' mt='-1.3rem' p='2.5rem'>
                            {props.services}
                        </Text>
                    </Box>


                    <Box display='flex' ml='-5rem'> 
                        <Box>
                        <FaPhoneAlt fontSize='1.56rem' color='white'/>
                        <Text color='white' ml='-1.3rem' fontSize='0.75rem'>
                            {props.contact}
                        </Text>
                        </Box>

                        <Box ml='5rem'>
                        <FaEnvelope fontSize='1.56rem' color='white'/>
                        <Text  color='white' ml='-3.4rem' fontSize='0.75rem' letterSpacing='-0.0825rem'>
                            {props.email}
                        </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Center mt='2rem' mb='5rem'>     
                <Button onClick={()=> {javascript:history.back()}} type="button" bgGradient='linear(to-r, #23a9ff, #48a7ba)' w="6.875rem" h="2.5rem" borderRadius='1.87rem' boxShadow=' 0 0.625rem 1.3rem -0.325rem #848b90'>
                    <ChevronLeftIcon color={'white'} fontSize={'2.5rem'}/>
                </Button>
            </Center>

    </Container>
    )
}
