import { useAuth0 } from '@auth0/auth0-react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const Login = () => {

    const { loginWithRedirect } = useAuth0()
    const {user,isAuthenticated,logout} = useAuth0()
  return (
    <div>
        {isAuthenticated ? (
                        <>
                        <Dropdown className="">
                            <Dropdown.Toggle className="bg-black border-0 text-white fs-7 fw-bold mt-2  " id="dropdown-basic">
                            <img className='rounded-circle ms-4 me-1 text-white' style={{"width": "30px"}} src={user.picture} alt={user.name}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg-white border-0 shadow-lg">
                              <Link className="fs-6 text-decoration-none ms-3 text-black fw-normal overlay" to="/perfil">Ver pedidos</Link>
                              <Dropdown.Item className="fs-6 ms-1 text-black fw-normal " onClick={()=>logout()}>Salir </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
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