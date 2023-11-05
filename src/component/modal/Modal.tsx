"use client"
import React, { Fragment, HTMLAttributes } from 'react'
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AddIcon from '@/icons/AddIcon';

import styles from "./Model.module.css"
import AddAccountForm from './AddAccountForm';
type Props = {
    className:string
    titleClassName:string,
    starter?:boolean
    setData: React.Dispatch<React.SetStateAction<Data>>
}

const ModalComponent = ({className,titleClassName,starter,setData}: Props) => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Button justify="center"  leftSection={<AddIcon/>}  variant="default"
    className={starter?styles.StarterButton:className}
    onClick={open}
    >
        Add account
      </Button>
      <Modal
       opened={opened}
        onClose={close}
         title={ <p className={styles.ModelTitle}> Add a new account</p>}
         overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
         >
        <div >
        <AddAccountForm setData={setData} close={close}/>
        </div>
      </Modal>


    
    </>
  )
}

export default ModalComponent