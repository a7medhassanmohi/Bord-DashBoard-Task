"use client"
import React, { useState } from 'react'
import { HeaderContainer, MainContent, SpaceBetweenContainer } from '..'
import ModalComponent from '../modal/Modal'
import TableComponent from '../Table/Table'
import styles from "./account.module.css"
import Building from '@/icons/Building'
type Props = {}

const Account = (props: Props) => {
    const [data, setData] = useState<Data>([])
  return (
    <MainContent>
    <HeaderContainer>
     <SpaceBetweenContainer>
       <h4 className={styles.mainContent_title}>Monitored accounts</h4>
         <ModalComponent className={styles.button} titleClassName={styles.ModelTitle} starter={!data.length} setData={setData}/>
     </SpaceBetweenContainer>
     </HeaderContainer>
   
     {!!data.length ?(<div className={styles.table_container}>
     <TableComponent data={data} setData={setData}/>
     </div>):(
          <div className={styles.content}>
          <Building/>
          <div>
            <strong>No accounts</strong>
            <p>Add a new account to start monitoring
      them for KYC compliance purposes</p>
          </div>
      <ModalComponent className={styles.button} titleClassName={styles.ModelTitle} setData={setData} starter={!!data.length}/>
        </div>
     )}
     
    </MainContent>
  )
}

export default Account