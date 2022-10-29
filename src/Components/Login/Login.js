import { useAuth0 } from '@auth0/auth0-react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {

    const { loginWithRedirect } = useAuth0()
    const {user,isAuthenticated,logout} = useAuth0()


  return (
    <div>
        {isAuthenticated ? (
                        <>
                        <img className='rounded-circle ms-4' style={{"width": "25px"}} src={user.picture} alt="usuario"/>
                        <button 
                                className='btn btn-outline-dark border-0 text-white fs-7 fw-bold mt-2 ' 
                                onClick={()=>logout()}>
                                Salir
                        </button>
                        </>
                        ):
                        <button 
                                className='btn btn-outline-dark border-0 text-white' 
                                onClick={()=>loginWithRedirect()}>
                                <AccountCircleIcon/>
                                <span className='mt-2 fs-7 ms-2'>Iniciar sesion</span>
                        </button>}
    </div>

  )
}

export default Login