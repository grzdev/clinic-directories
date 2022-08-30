import {Box, Center, Container, Heading, Image, Text, SimpleGrid} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons' 
import { TriangleDownIcon } from '@chakra-ui/icons'

export default function Home() {
  
  return (
    <Container maxW='container.xl' bg='#F4FAFF' mt='30px' borderRadius='20px'>
      <Center>
        <Box marginTop='30px'>
          <Image src='http://swiftmedispark.com/img/medispark-logo.png'  alt=" "/>
          <Heading marginLeft='60px' fontSize='25px' fontFamily='Sans-serif' color='#197AB8'>CLINICS</Heading>
        </Box>
      </Center>

        <Container maxW='container.xl'>
          <SimpleGrid minChildWidth='450px' spacing={2}>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.havanaspecialisthospital.com/media/img/logo_xy.png'  alt="Havana specialist hospital" maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Havana specialist hospital </Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(30 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>115, Akerele Extension, P.O. Box 4631,<br/> Surulere Lagos</Text>
                </Box>
              </Box>
            </Box>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.parklandespecialists.com/wp-content/uploads/2019/04/PS-Updated-logo.png'  alt="Parkland Specialist Hospital" maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Parkland Specialist Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>3.6</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(42 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>13, Razaq Balogun Street, Off Adebola Street, Off Adeniran Ogunsanya, Surulere, Lagos</Text>
                </Box>
              </Box>
            </Box>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://reddingtonhospital.com/wp-content/uploads/2020/02/REDDINGTON-LOGO-FOR-WEBSITE-1-1-300x110-1.png' alt="Reddington Hospital"maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Reddington Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>3.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(121 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>12, Ajanaku Street, Off Salvation Road, Opebi, Ikeja, Lagos Ikeja, Lagos</Text>
                </Box>
              </Box>
            </Box>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.euracarehealth.com/wp-content/uploads/2020/06/euracare-2.png' alt="Euracare Multi-Specialist Hospital" maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Euracare Multi-Specialist Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>5.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <Text color='white' ml='10px'>(73 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>293 Jide Oki St, Victoria Island 106104, Lagos</Text>
                </Box>
              </Box>
            </Box>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.lifefortchildrenshospital.com/images/logo-identity.png' alt="Lifefort Children's Hospital" maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Lifefort Children's Hospital</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(13 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'> 
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>70 Agege Motor road, by Bishop St, JUNCTION 101283, Lagos</Text>
                </Box>
              </Box>
            </Box>

            <Box maxW='xl' h='140px' bg='#197AB8' marginTop='40px' borderRadius='20px' display='flex' >
              <Image src='https://www.ettaatlantic.com/wp-content/uploads/2018/12/Etta-Atlantic-Memorial-Hospital-logo.png' alt="Etta-Atlantic Memorial Hospital Ikate Lekki Lagos" maxW='8rem' p="10px"/>
              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='2xl' color='white' marginTop='20px' marginLeft='25px'>Etta-Atlantic Memorial Hospital Ikate Lekki Lagos</Heading>
                </Box>
                <Box display='flex' alignItems='center' mt='5px' ml='27px'>
                  <Text color='white'>4.0</Text>
                  <StarIcon ml='5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px'color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='#23a9ff'/>
                  <StarIcon ml='1.5px' color='lightgrey'/>
                  <Text color='white' ml='10px'>(37 Reviews)</Text>
                </Box>
                <Box ml='12px' display='flex' mt='5px'> 
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='15px' color='white'>22 Abioro St, Ikate 106104, Lekki</Text>
                </Box>
              </Box>
            </Box>

          </SimpleGrid>
        </Container>
    </Container>
  )
}
