import SubjectList from './SubjectList';
import image from "./appliances.jpeg"
import bully from "./bully.jpg"
import lab from "./lab.jpg"
import pug from "./pug.jpg"

const dogs = [
  {id: 1, code:"American Bully",url:bully,quantity:0},
  {id: 2, code:"Labrador",url:lab,quantity:0},
  {id:3, code: "Pug",url:pug,quantity:0},
]


export default function App(){
  return (
    <>
   
      <SubjectList data={dogs} title="Dogs"/>
    </>
  )
}