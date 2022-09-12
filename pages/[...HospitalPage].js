import Details from "../Components/Details";
import detailApi from "../Components/detailApi";
import { Container, SimpleGrid} from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function SecondPage(){
    const {query} = useRouter()

    const currentDetails = detailApi.find((hospital)=> {
        return(hospital.id == parseInt(query.HospitalPage[1])) 
    })


    return(
        <Container maxW='container.xs' centerContent>
             <SimpleGrid>
                <Details
                    {...currentDetails}
                /> 
            </SimpleGrid>
        </Container>
    )
}