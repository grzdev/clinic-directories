import HospitalMainCard from "../Components/hospitalMainCard";
import HospitalDetails from "../Components/hospitalDetails";
import { Container, SimpleGrid} from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function SecondPage(){
    const {query} = useRouter()

    const currentHospitalDetails = HospitalDetails.find((hospital)=> {
        return(hospital.id == parseInt(query.HospitalPage[1])) 
    })
    console.log(currentHospitalDetails)


    return(
        <Container maxW='container.xs' centerContent>
             <SimpleGrid>
             <HospitalMainCard
                {...currentHospitalDetails}
            /> 
            </SimpleGrid>
        </Container>
    )
}