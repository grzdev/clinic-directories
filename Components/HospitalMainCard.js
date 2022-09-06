import { Box, Image, Heading, Link, Text} from "@chakra-ui/react"
import { LinkIcon } from '@chakra-ui/icons'
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapPin} from "react-icons/fa"

export default function HospitalMainCard(props){
    return(
            <Box maxW={"xl"} maxH={'100vh'} bgGradient='linear(to-r, #23a9ff, #48a7ba)' mt='100px' borderRadius='50px' boxShadow=' 0 10px 20px -5px #848b90' display='flex' p={'20px'}>
                <Image src={`${props.logo}`} alt='Hospital-image2' w='160px' h='160px' p='40px' ml={"-20px"} mt={'-20px'}/>

                <Box display='flex' flexDir='column'>
                    <Heading fontSize='1.2rem' color='white' marginTop='20px' ml='-18px'>
                        {props.name}
                    </Heading>
                    
                    <Box display='flex' ml='-28px' mt='10px'>
                        <Link href={props.website}>
                            <Text fontSize='sm' color='white' fontFamily='sans-serif'> 
                                <LinkIcon ml='10px'/>
                                Our website
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' ml='80px' mt='-21px'>
                        <FaMapPin color='red'/>
                        <Link href={props.googleMapUrl}>
                            <Text fontSize='xs' textDecor='underline' color='white' fontFamily='sans-serif' fontWeight={400}>
                                View in Google Maps
                            </Text>
                        </Link>
                    </Box>

                    <Box display='flex' mt='8px' ml='-14px'>
                        <Text fontSize='1rem' color='white' fontWeight={600}>
                            Service Hours: <i>{props.openingHours}</i
                        ></Text>
                    </Box>

                    <Box display="flex" mt='-10px'>
                        <Text fontSize='1.5rem' color='white' fontWeight={600}  mt='20px' ml='-60px'>
                            Specialties
                        </Text>
                        <Text fontSize='15px' color='white' ml='-125px' mt='20px' fontWeight={500} p='40px'>
                            {props.specialties}
                        </Text>
                    </Box>


                    <Box display="flex" mt={"-5"} >
                        <Text fontSize='1.5rem' color='white' fontWeight={600} mt='-20px' ml='-60px'>
                            Services
                        </Text>
                        <Text fontSize='15px' color='white' fontWeight={500}  ml='-100px' mt='-18px' p='40px'>
                            {props.services}
                        </Text>
                    </Box>


                    <Box display='flex' ml='-40px'> 
                        <Box>
                        <FaPhoneAlt fontSize='25px' color='white'/>
                        <Text color='white' ml='-20px' fontSize='12px'>
                            {props.contact}
                        </Text>
                        </Box>

                        <Box ml='80px'>
                        <FaEnvelope fontSize='25px' color='white'/>
                        <Text  color='white' ml='-60px' fontSize='12px' letterSpacing='-1px'>
                            {props.email}
                        </Text>
                        </Box>
                    </Box>

                    {/* <Box>
                        <button color="">

                        </button>
                    </Box> */}
                </Box>
            </Box>
    )
}