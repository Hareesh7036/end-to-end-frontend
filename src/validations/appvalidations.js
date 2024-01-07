import { regExp } from "./appRegExp"

export const handleFieledvalidation=(eve,inputControls)=>{

    const {name,value}=eve.target;
    const clonedInputControls=JSON.parse(JSON.stringify(inputControls))
    const inputControlobj1=clonedInputControls.find((obj)=>{
        return obj.model === name;
    })
    inputControlobj1.value=value;
    inputControlobj1.errorMessage="";
    const criteria=inputControlobj1.criteria;
    for(let i=0;i<criteria.length;i++){
        const {pattern,errorMessage}=regExp[criteria[i]];
        if(!pattern.test(value)){
            inputControlobj1.errorMessage=errorMessage;
            break;
        }
    }
    return clonedInputControls;
}

export const handleFormvalidation=()=>{

}