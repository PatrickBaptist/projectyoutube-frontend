import { createContext, useEffect, useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export const UsersContext = createContext({} as any)

export const UserStorage = ({children} : any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [userVideos, setUserVideos] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') as string)
    const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
    const navigate = useNavigate()

    const getVideos = (token: string, user_id: string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`, {headers: {Authorization: token}}).then(({ data }) => {
          setUserVideos(data.videos)
        }).catch((error) => {
          console.log('erro ao buscar vídeos', error)
        })
      }
    
      const createVideos = (token: string, user_id: string, tittle: string, description: string, thumbnail: string, publishedAt: Date) => {
        api.post('/videos/create-video', {user_id, tittle, description, thumbnail, publishedAt}, {headers: {Authorization: token}})
        .then(() => {
          alert('Video enviado com sucesso!')
          getUser(token)
        }).catch((error) => {
          console.log('Não foi possível enviar o vídeo', error)
          alert('Não foi possível enviar o vídeo. Tente novamente.')
        })
      }

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
            setUser(data.user)
            setLogin(true)
            getVideos(token, data.user.id)
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }
    
    useEffect (() => {
        getUser(token)
    }, [token])

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        alert('Usuário deslogado')
      }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true)
            localStorage.setItem('token', data.token) // salva para o usuário não precisar logar novamente
            setToken(data.token)
            getUser(data.token)// puxa os dados do usuário
            navigate('/')
            alert('Usuário logado')
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error)
        })
    }

    const handleCreateUser = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(() => {
            alert('Cadastro realizado com sucesso')
            handleLogin(email, password)
            navigate('/')
        }).catch((error) => {
            console.log('Não foi possível criar novo usuário', error)
            if (error.response.status == 409) {
                alert('Este e-mail já está em uso. Por favor, tente outro.')
            } else {
                alert('Não foi possível  criar o usuário. Verifique os dados e tente novamente')
            }
        })
    }

    return (
        <UsersContext.Provider value={{
            login,
            user,
            token,
            userVideos,
            openDropDownMenu,
            setOpenDropDownMenu,
            createVideos,
            handleLogin,
            handleCreateUser,
            logOut
        }}>
            {children}
        </UsersContext.Provider>
    )
}