import { Box, Image, Heading, Link, Text} from "@chakra-ui/react"
import { LinkIcon } from '@chakra-ui/icons'
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapPin} from "react-icons/fa"

export default function HospitalMainCard(props){
    return(
            <Box w='450px' h='550px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' mt='80px' borderRadius='30px' boxShadow=' 0 10px 20px -5px #848b90' display='flex'>
                <Image src={`${props.logo}`} alt='' w='160px' h='160px' p='40px'/>

                <Box display='flex' flexDir='column'>
                    <Heading fontSize='1.3rem' color='white' marginTop='37px' ml='-20px'>
                        {props.name}
                    </Heading>
                    
                    <Box display='flex' ml='-30px' mt='10px'>
                        <Link href={props.website}>
                            <Text fontSize='sm' color='white' fontFamily='sans-serif'> 
                                <LinkIcon ml='10px'/>
                                Our website
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' ml='90px' mt='-23px'>
                        <FaMapPin color='red'/>
                        <Link href={props.googleMapUrl}>
                            <Text fontSize='sm' textDecor='underline' color='white' fontFamily='sans-serif' fontWeight={400}>
                                View in Google Maps
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' mt='8px' ml='-14px'>
                        <Text fontSize='1rem' color='white' fontWeight={600}>
                            Service Hours: <i>{props.openingHours}</i
                        ></Text>
                    </Box>

                    <Box display="flex" mt='10px'>
                        <Text fontSize='1.7rem' color='white' fontWeight={600}  mt='20px' ml='-80px'>
                            Specialties
                        </Text>
                        <Text fontSize='17px' color='white' ml='-90px' mt='20px' fontWeight={500} p='40px'>
                            {props.specialties}
                        </Text>
                    </Box>


                    <Box display="flex" >
                        <Text fontSize='1.7rem' color='white' fontWeight={600} mt='-20px' ml='-80px'>
                            Services
                        </Text>
                        <Text fontSize='17px' color='white' fontWeight={500}  ml='-60px' mt='-18px' p='40px'>
                            {props.services}
                        </Text>
                    </Box>


                    <Box display='flex' ml='-15px'> 
                        <Box>
                        <FaPhoneAlt fontSize='30px' color='white'/>
                        <Text color='white' ml='-20px' fontSize='12px'>
                            {props.contact}
                        </Text>
                        </Box>

                        <Box ml='80px'>
                        <FaEnvelope fontSize='30px' color='white'/>
                        <Text  color='white' ml='-40px' fontSize='12px' letterSpacing='-1px'>
                            {props.email}
                        </Text>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
    )
}