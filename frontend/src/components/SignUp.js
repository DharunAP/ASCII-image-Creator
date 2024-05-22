export const SignUp = ()=>{
    return (
        <div style={{display:'flex',width:'100%',height:'740px'}}>
            <div style={{width:'50%',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{display:'flex',backgroundColor:'inherit',alignItems:'center',justifyContent:'center',flexDirection:'column',border:'2px solid silver',padding:'75px 40px'}}>
                    <h1 style={{color:'black',paddingBottom:'40px'}}>SignUp form</h1>
                    <div style={{padding:'30px'}}>
                        <label htmlFor="name" style={{fontSize:'20px',color:'black'}}>UserName : </label>
                        <input type="text" id="name" style={{height:'20px'}}/>                   
                    </div>
                    <div style={{padding:'30px'}}>
                        <label htmlFor="pass" style={{fontSize:'20px',color:'black'}}>Password : </label>
                        <input type="text" id="pass" style={{height:'20px'}}/>
                    </div>
                    <div style={{padding:'30px'}}>
                        <label htmlFor="pass" style={{fontSize:'20px',color:'black'}}>Password : </label>
                        <input type="text" id="pass" style={{height:'20px'}}/>
                    </div>
                    <div>
                        <button style={{backgroundColor:'#2AA18B',color:'white',padding:'5px 10px',border:'1px solid white',fontSize:'20px'}}>Register</button>
                    </div>
                    <a href="\login" style={{color:'#2AA18B',paddingTop:'20px'}}>Already have an account?</a>
                </div>
            </div>
            <div style={{width:'50%',backgroundColor:'#2AA18B',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <h1 style={{fontSize:'70px'}}>SignUp</h1><br />
                <h2 style={{fontSize:'45px',textAlign:'center',padding:'20px',fontStyle:'italic',color:'silver'}}>Register here to store all your ASCII images so that you can view it anytime you login.</h2>
            </div>
        </div>
    )
}