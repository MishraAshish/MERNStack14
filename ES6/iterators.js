//Filter, Map, Some and Reduce : Iterators of ES6
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Thor"},
    {id : 7, name : "Vu Le", savedby : "IronMan"}
];

//1. List of the persons saved by IronMan

let personSvdByIronMan = personsList.filter((person)=> person.savedby === "IronMan")

//console.log(personSvdByIronMan)
//console.log(personsList)//personsList remains intact thus preserving the immutability

//2. List Names saved by CaptainAmerica

let namesSavedByCA =  personsList.map((item)=>item.savedby==="CaptainAmerica" ? item.name : "").filter(p=>p!="")

console.log(namesSavedByCA)

let namesSavedByCAWithNewRepre =  personsList.map((item)=>
                                        {
                                            if(item.savedby==="CaptainAmerica")
                                            {
                                            return {"Saved Person" : "Sir " + item.name}
                                            }
                                        }).filter(p=>p!=undefined)

console.log(namesSavedByCAWithNewRepre)


//3. Some is a short circuit to check the availability of a property in array

let anyOneSavedByRobin = personsList.some((person)=>person.savedby === "Robin")

console.log(anyOneSavedByRobin)

let anyOneSavedByThor = personsList.some((person)=>person.savedby === "Thor")

console.log(anyOneSavedByThor)


//4. Count of persons saved by each super hero

let countOfPersons = personsList.reduce((prevVal, currVal)=>{
    console.log(prevVal);
    console.log(currVal);
    
    //{}.CaptainAmerica = undefined// false
    //prevVal[{CaptainAmerica: 1}]

    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;

    return prevVal;
},new Set())//initializing the first prevVal

console.log(countOfPersons);


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present