
import { useContext } from 'react'
import { filterContext } from './App'
import './body_left.css'



let update=(name,filter,SetFilter,setSearch,searchvalue)=>
{
  
  setSearch(searchvalue=1)
  if(filter.indexOf(name)===-1)
  {
    if(name==="LED" || name==="OLED" || name==="LCD")
    {
      document.getElementById(name).style.backgroundColor="#FF5733"

        filter.splice(0,1)
        SetFilter([...filter,name])
    }
    
    else
    {
      document.getElementById(name).style.color="#FFC300"
      SetFilter([...filter,name])
    }
   
  }
  else{
   
    if(name==="LED" || name==="OLED" || name==="LCD")
    {
      document.getElementById(name).style.backgroundColor="#FFC300"
    }
    else
    {
      document.getElementById(name).style.color="white"
    }
   
    let temp = [...filter]
    temp.splice(temp.indexOf(name),1)
    SetFilter(temp)
   
  }
  
}

let Filter=()=>
{
  const {filter,SetFilter,searchvalue,setSearch} = useContext(filterContext)
  const search=(e)=>
  {
    filter.splice(0,filter.length)
  
    SetFilter([...filter,e.target.value])
    
  }
    return(
        <div class="body_left">
          
          <div class="search">
         
             <h2>Search</h2>
            
            <input type="search" onChange={search}></input>
            </div>

          
        <div class="screen">
            <h3 class="heading">Screen</h3>
            <button onClick={()=>update("LED",filter,SetFilter,setSearch,searchvalue)} id="LED">LED</button> 
            <button onClick={()=>update("OLED",filter,SetFilter,setSearch,searchvalue)} id="OLED">OLED</button> 
            <button onClick={()=>update("LCD",filter,SetFilter,setSearch,searchvalue)} id="LCD">LCD</button> 
        </div>
        <div class="brand">
            <h3>Brand</h3>
            <p onClick={()=>update("Realme",filter,SetFilter,setSearch,searchvalue)}id="Realme">realme</p>
            <p onClick={()=>update("redmi",filter,SetFilter,setSearch,searchvalue)} id="redmi">Mi</p>
            <p onClick={()=>update("oneplus",filter,SetFilter,setSearch,searchvalue)} id="oneplus">OnePlus</p>
            <p onClick={()=>update("samsung",filter,SetFilter,setSearch,searchvalue)} id="samsung"> SAMSUNG</p>
           <p onClick={()=>update("lg",filter,SetFilter,setSearch,searchvalue)} id="lg">LG</p>
            <p onClick={()=>update("sony",filter,SetFilter,setSearch,searchvalue)} id="sony"> SONY</p>
            <p onClick={()=>update("infinix",filter,SetFilter,setSearch,searchvalue)} id="infinix">Infinix</p>
           <p onClick={()=>update("tcl",filter,SetFilter,setSearch,searchvalue)} id="tcl">TCL</p>
        </div>
       

      </div>

    );

}
export default Filter;
