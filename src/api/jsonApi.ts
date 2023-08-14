import { httpApi } from "../config/axios.config"


export const getCourses = async () => {
  const courses = await httpApi.get('/courses');
console.log(courses.data)
  return courses.data;
}