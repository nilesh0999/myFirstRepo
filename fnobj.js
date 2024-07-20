let arr=[
    {fname:"nilesh",mname:"raju",lname:"gatala"},
    {fname:"sunny",mname:"dasharath",lname:"khandagale"},
    {fname:"akshay",mname:"deepak",lname:"chavan"}
]
function fullname(){

    for(let [key,value] of Object.entries(arr)){
        console.log("fullname is ",{[key]:value});
    }
}

fullname();