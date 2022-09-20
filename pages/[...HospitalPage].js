import Details from "../Components/Details";
import detailApi from "../Components/detailApi.json"
import { Container, SimpleGrid} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function SecondPage(){
    const [currentDetails, setCurrentDetails] = useState()

    const {query} = useRouter()
    useEffect(()=>{
        if (query.HospitalPage){
            setCurrentDetails(
                detailApi.detailData.find((hospital)=> {
                    return(hospital.id == parseInt(query?.HospitalPage[1])) 
                })
            )
        }     
    },[query])

    return(
        <Container maxW='container.xs' centerContent>
             <SimpleGrid>
                {currentDetails && <Details
                 {...currentDetails}
                />}
            </SimpleGrid>
        </Container>
    )
}