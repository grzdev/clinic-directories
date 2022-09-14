import {Box, Heading, Image, Text } from '@chakra-ui/react'
import {StarIcon, TriangleDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";




export default function Cards(props){

   const router = useRouter()

    
    return(
        <Box maxW='sm' h='8.75rem' bgGradient='linear(to-r, #23a9ff, #48a7ba)' marginTop='2.5rem' borderRadius='1.3rem' display='flex'  boxShadow=' 0 0.625rem 1.3rem -0.325rem #848b90' ml='3rem'>
              <Image src={`${props.img}`}  alt="Hospital-Image" maxW='8rem' p="1.88rem"/>

              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='md' color='white' marginTop='1.88rem' ml='-0.625rem'>{props.name}</Heading>
                </Box>

                <Box display='flex' alignItems='center' mt='0.125rem' ml='-0.625rem'>
                  {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < props.stats.rating ? '#ffba23' : 'gray.300'}
                    />
                   ))}
                  <Text color='white' ml='0.625rem'>{props.stats.reviewCount} Reviews</Text>
                </Box>
                 
                <Box ml='-1.3rem' display='flex' mt='0.125rem'>
                  <TriangleDownIcon ml='0.625rem' mt='0.3rem' color='red'/>
                  <Text fontSize='0.8125rem' color='white' wordBreak='normal'>{props.address}</Text>
                </Box>

                <Box display='flex' mt='0.625rem' ml='1.56rem'>
                  <button type="button" onClick={()=> router.push(`/HospitalPage/${props.id}`)}>
                    <Text fontFamily='sans-serif' color='white' _hover='black' cursor='pointer' fontWeight={550}>
                      More info?
                      <ChevronRightIcon/>
                    </Text>
                   </button>
                </Box>
              </Box> 
            </Box>
    )
}