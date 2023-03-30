import React, { useState, useCallback, useMemo } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function Hooks(props) {
    //let age = 18, text1 = "Age";
    let [age, setAge] = useState(19);

    let [salary, setSalary] = useState(1000);

    let incrementAge = useCallback(()=>{
        console.log("Increment Age Gets Called")
        setAge(age+1)
    },[age]);

    let incrementSalary = useCallback(()=>{
        console.log("salary")
        setSalary(salary + 100)
    },[salary]);


    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 900000000) i++;

        return age % 2 === 0;
    },[age])

    return(
        <>
            <Title />
            <Count text={"Age"} count={age}/>
            <Button handleClick={incrementAge}>
                {"Increment Age"}
            </Button>
            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}

            <span>{isEven ? ' Even' : ' Odd'}</span>

            <Count text={"Salary"} count={salary}/>
            <Button handleClick={incrementSalary}>
                {"Increment Salary"}
            </Button>
        </>
    )
}

export default Hooks;