/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { http } from "../../config/axios.config"
import {useQuery} from "@tanstack/react-query"



const fetchCourses= async () => {
  const { data } = await http.get("/courses");

  return data
}

export const useFetchCourses = () => { 
  
  return useQuery(["courses"], fetchCourses); 
  
}
