import { regExp } from "./appRegExp"

const validateField=(criteria,value,inputControlobj1)=>{
    for(let i=0;i<criteria.length;i++){
        const {pattern,errorMessage}=regExp[criteria[i]];
        if(!pattern.test(value)){
            inputControlobj1.errorMessage=errorMessage;
            break;
        }
    }
}

export const handleFieledvalidation=(eve,inputControls)=>{

    const {name,value}=eve.target;
    const clonedInputControls=JSON.parse(JSON.stringify(inputControls))
    const inputControlobj1=clonedInputControls.find((obj)=>{
        return obj.model === name;
    })
    inputControlobj1.value=value;
    inputControlobj1.errorMessage="";
    const criteria=inputControlobj1.criteria;
    validateField(criteria,value,inputControlobj1);
    return clonedInputControls;
}

export const handleFormvalidation=(inputControls)=>{
    const clonedInputControls=JSON.parse(JSON.stringify(inputControls))
    const dataObj = {}
    clonedInputControls.forEach((inputControlobj1) => {
        const { value, criteria, model } = inputControlobj1
        dataObj[model] = value;
        validateField(criteria,value, inputControlobj1)
    })
    const isFormInvalid = clonedInputControls.some((inputControlObj) => {
        return inputControlObj?.errorMessage?.length > 0
    })
    return [isFormInvalid, clonedInputControls, dataObj]


}