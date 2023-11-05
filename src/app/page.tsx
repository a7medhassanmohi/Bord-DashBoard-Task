import Image from 'next/image'
import styles from './page.module.css'
import {Container,MainContent,Nav,HeaderContainer, SpaceBetweenContainer} from '@/component/'
import { Button, Table } from '@mantine/core';
import { navFooterLinks, navLinks } from '@/utility/navLinks'
import AddIcon from '@/icons/AddIcon'
import Building from '@/icons/Building'
import ModalComponent from '@/component/modal/Modal';
import TableComponent from '@/component/Table/Table';
import Account from '@/component/Account/Acount';

export default function Home() {
  return (
    <main className={styles.main}>
     <Container>
 <Nav>
    <HeaderContainer>
    <h1 className={styles.header_title}>BORD</h1>
    </HeaderContainer>
    <ul className={styles.navigation}>
      {navLinks.map((link)=>
      {
      const {icon:Icon}=link;
     return <li className={`${styles.navigation_item} ${link.active?styles.navigation_item_active:""}`} key={link.id}>
        <Icon/>
       <p>{link.name}</p> 
      </li>

      }
      
      )}
    </ul>
    <ul className={styles.navigation_footer}>
    {navFooterLinks.map((link)=>
      {
      const {icon:Icon}=link;
     return <li className={styles.navigation_item} key={link.id}>
        <Icon/>
       <p>{link.name}</p> 
      </li>

      }
      
      )}
    </ul>
 </Nav>
 <Account/>
  </Container>
    </main>
  )
}
