import { useState } from 'react'
export const ASCIIcreate = ()=>{
    // const [img, setImg] = useState()
    const [count,setCount] = useState(20)
    const [image,setImage] = useState("Select any image to view output")
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
        console.log(typeof data)
        setImage(data.value)
        setCount(50)
    }
    return(
        <>
            <h1>Hello</h1>
            <input type="file" id="file" onChange={(event)=>{form.append('image',event.target.files[0])}}/><br />
            <button onClick={()=>{createImg()}}>Submit</button><br />
            <div>
                <textarea name="" id="" cols={count} rows={count} value={image}></textarea>
                {/* <table>{image.map((e)=>{
                    return(
                        <div>
                        <span>{e}</span>
                        <br />
                        </div>
                    )
                })}</table> */}
            </div>
        </>
    )
}