import { useState } from 'react'
export const ASCIIcreate = ()=>{
    // const [img, setImg] = useState()
    const [count,setCount] = useState(20)
    const [image,setImage] = useState(null)
    const [img,setImg] = useState(null)
    const form = new FormData()
    const createImg = async()=>{
        const res = await fetch('http://127.0.0.1:5000',{
            method:'POST',
            // headers:{
            //     'Content-Type':'application/json'
            // },
            body:form
        })
        const data = await res.json()
        console.log(data.count)
        console.log(data.value)
        setImage(data.value)
        setCount(50)
    }
    return(
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            
            <h1 className='x' style={{fontSize:'50px',padding:'15px'}}>ASCII-Generator</h1>
            <label htmlFor="file" style={{padding:'10px'}}>Choose your Image file here.</label>
            <input style={{border:'2px solid black', padding:'5px'}} type="file" id="file" onChange={(event)=>{form.append('image',event.target.files[0]);}}/><br />
            <button className='x' style={{padding:'3px', background:'white', color:'black'}} onClick={()=>{createImg()}}>Submit</button><br />
            <div style={{display:'flex',}}>
                <img src={img} style={{height:'400px',justifyContent:'flex-start'}} alt="" />
                <textarea className={(!image)?"hidden":""} id="" cols={count} rows={count} value={image} style={{background:'white',border:'2px solid black',color:'black',padding:'10px',marginBottom:'10px'}}></textarea>
                
            </div>
        </div>
    )
}

// setImg(URL.createObjectURL(event.target.files[0]));