import React from "react";
import Flexi from "../Home/Flexi";
import hoc from "../HighOrder";
const flexConfigForRegistration= {
 items: [
   {
     type: "Header",
     props: {
       label: "Registration",
       horozintalAlign: "center",
       verticalAlign:"center"
     }
   },
   {
     type: "CardC",
     props: {
       color: "grey",
       horozintalAlign: "left",
     },
     children: {
       items: [
         {
           type: "TexField",
           props:{
             inputType:"text",
             label:"Name",
             name:"name"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"email",
             label:"Email",
             name:"email"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"number",
             label:"Mobile",
             name:"Message"
           }
         },
         {
           type: "RadioGroups",
           props:{
             label:"Gender",
             name:"gender",
             options:[
               {
                 label:"Male"
               },
               {
                 label:"Female"
               }
             ]
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"password",
             label:"Password",
             name:"password"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"password",
             label:"Confirm Password",
             name:"confirmPassword"
           }
         },
         {
           type: "Buttons",
           props:{
             label:"Register"
           }
         }
       ]
     }
   }
 ]
}

class Registeration extends React.Component {



  render() {
    const { config, handleOnSubmit, handleFieldChange } = this.props;


    console.log(config, "props");
    return (
      <Flexi
        items={config.items}
        handleOnSubmit={handleOnSubmit}
        handleFieldChange={handleFieldChange}
      />
    );
  }
}
export default hoc(flexConfigForRegistration)(Registeration)
