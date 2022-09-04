import { Container, Box, Image, Heading, Link, Text} from "@chakra-ui/react"
import { LinkIcon } from '@chakra-ui/icons'
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export default function HospitalMainCard(props){
    return(
            <Box w='500px' h='550px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' mt='80px' borderRadius='30px' boxShadow=' 0 10px 20px -5px #848b90' display='flex'>
                <Image src={`${props.logo}`} alt='' w='160px' h='160px' p='40px'/>
                <Heading fontSize='2xl' color='white' marginTop='37px' ml='-12px'>
                    Havana specialist hospital
                </Heading>
                
                <Box display='flex' flexDirection='column' mt='77px' ml='-290px' alignItems='center'>
                    <Link href={props.website}>
                        <Text fontSize='sm' color='white' fontFamily='sans-serif'> 
                            <LinkIcon ml='10px'/>
                            Our website
                        </Text>
                    </Link>
                </Box>

                <Box display='flex' mt='77px' ml='35px'>
                    <Link href={props.googleMapUrl}>
                        <Text fontSize='sm' textDecor='underline' color='white' fontFamily='sans-serif' fontWeight={400}>
                            View in Google Maps
                        </Text>
                    </Link>
                </Box>

                <Box display='flex' mt='103px' ml='-215px'>
                    <Text fontSize='1rem' color='white' fontWeight={600}>Service Hours: <i>{props.openingHours}</i></Text>
                </Box>

                <Box display="flex" mt='150px' ml='-275px'>
                    <Text fontSize='1.7rem' color='white' fontWeight={600}>Specialties</Text>
                </Box>

                <Box display="flex" mt='190px' ml='-55px' w='250px'>
                    <Text fontSize='17px' color='white' fontWeight={500}>{props.specialties}</Text>
                </Box>

                <Box display="flex" mt='280px' ml='-325px'>
                    <Text fontSize='1.7rem' color='white' fontWeight={600}>Services</Text>
                </Box>

                <Box display="flex" mt='320px' ml='-28px' w='250px'>
                    <Text fontSize='17px' color='white' fontWeight={500}>{props.services}</Text>
                </Box>

                <Box display='flex' mt='480px' ml='-250px' w='60px'>
                    <Box>
                     <FaPhoneAlt fontSize='30px' color='white'/>
                     <Text color='white' ml='-20px' fontSize='12px'>{props.contact}</Text>
                    </Box>

                    <Box ml='80px'>
                     <FaEnvelope fontSize='30px' color='white'/>
                     <Text  color='white' ml='-60px' fontSize='12px' letterSpacing='-1px'>{props.email}</Text>
                    </Box>
                      
                </Box>
            </Box>
    )
}