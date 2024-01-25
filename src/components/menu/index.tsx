import { ButtonIcon, Container, MenuItem1, Hr, MenuItem2, MenuItem3, MenuItem4, MenuItem5, MenuItem6, MenuItem7, MenuItem8, SubTittle, Developer } from "./style"
import { Items1, Items2, Items3, Items4, Items5, Items6, Items7, Items8 } from '../icons/icons'
import { UserContext } from "../../contexts/userContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function Menu() {

    const { openMenu } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <Container $openmenu={openMenu}>
               
            {Items1.map((item1, index) => (
            <MenuItem1 key={index} $openmenu={openMenu} onClick={() => navigate(item1.link)}>
                <ButtonIcon alt="" src={item1.img}/>
                <span>{item1.name}</span>
            </MenuItem1>
            ))}

            <Hr $openmenu={openMenu}/>
           
            {Items2.map((item2, index) => (
                <MenuItem2 key={index} $openmenu={openMenu} onClick={() => navigate(item2.link)}>
                    <ButtonIcon alt="" src={item2.img}/>
                    <span>{item2.name}</span>
                </MenuItem2>
                ))}
           

            <Hr $openmenu={openMenu}/>
            <SubTittle $openmenu={openMenu}>Explorar</SubTittle>
       
            {Items3.map((item3, index) => (
                <MenuItem3 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt="" src={item3.img}/>
                    <span>{item3.name}</span>
                </MenuItem3>
                ))}
      

            <Hr $openmenu={openMenu}/>
      
            {Items4.map((item4, index) => (
                <MenuItem4 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt="" src={item4.img}/>
                    <span>{item4.name}</span>
                </MenuItem4>
                ))}
          

            <Hr $openmenu={openMenu}/>
            <SubTittle $openmenu={openMenu}>Mais do Youtube</SubTittle>
          
            {Items5.map((item5, index) => (
                <MenuItem5 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt="" src={item5.img}/>
                    <span>{item5.name}</span>
                </MenuItem5>
                ))}
            

            <Hr $openmenu={openMenu}/>
            
            {Items6.map((item6, index) => (
                <MenuItem6 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt="" src={item6.img}/>
                    <span>{item6.name}</span>
                </MenuItem6>
                ))}
            
            
            <Hr $openmenu={openMenu}/>
          
            {Items7.map((item7, index) => (
                <MenuItem7 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt=""/>
                    <span>{item7.name}</span>
                </MenuItem7>
                ))}
          
                <br/>
            
            {Items8.map((item8, index) => (
                <MenuItem8 key={index} $openmenu={openMenu}>
                    <ButtonIcon alt=""/>
                    <span>{item8.name}</span>
                </MenuItem8>
                ))}
           

                <br/>

            <Developer $openmenu={openMenu}>© Desenvolvido por: Patrick Baptista</Developer>

                <br/>

        </Container>
    )
}

export default Menu