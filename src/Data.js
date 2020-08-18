import React, { useEffect ,useState} from 'react';
function Data() {
   let data="Loading...";
   const [data_var,Setdata_var]=useState(data)
    useEffect(() => {

        async function fetchData() {

            const responce = await fetch('https://api.covid19api.com/summary');
           
             data=await responce.json();
             Setdata_var(data);
             console.log(data);
     
           
        }
        fetchData();
    },[ ]);
    return(
        <div>
           

        </div>
    )
}
export default Data;