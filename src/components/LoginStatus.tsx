const LoginStatus = ()=>{
    const isLoggedIn = false;
    return(
        <div>
            <h2 className="text-danger">{isLoggedIn?"welcome,user" :"please login"}</h2>

        </div>
    )
}
export default LoginStatus;