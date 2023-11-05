"use client"
import React from 'react'
import { Button, Checkbox, Group, Select } from '@mantine/core';
import { Radio,TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import styles from "./Model.module.css"
import ArrowDown from '@/icons/ArrowDown';
type Props = {
  setData: React.Dispatch<React.SetStateAction<Data>>
  close: () => void
}

const AddAccountForm = ({setData,close}: Props) => {
    const form = useForm({
        initialValues: {
            radioType:"Company",
            CompanyName:"",
            registrationCode:"",
            countryOfRegistration:"palestine"
        },
    });
    function handleSubmit(values:ModelData){
      const allStatus=["complete","Incomplete","in review","In progress"]
      const newData:DataItem={
        Account:values.CompanyName,
        accountId: "Tdjdj5",
        accountScore: `${Math.floor(Math.random()*101)}%`,
        status: allStatus[Math.floor(Math.random()*allStatus.length)],
        Country: values.countryOfRegistration,
        lastUpdated: "last week",
        id: (Math.random()*1000* Date.now()).toString(),
        icon: values.radioType,
}
setData((prev)=>[...prev,newData])
close()
      }
    
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}
    className={styles.modal_content}
    >
    <Radio.Group
      withAsterisk
      defaultValue="Company"
      {...form.getInputProps('radioType')}
      className={styles.formItem}
    >
      <Group mt="xs">
        <Radio value="Private person" label="Private person" color="#3FADAD" />
        <Radio value="Company" label="Company" color="#3FADAD"  />
      </Group>
    </Radio.Group>
    <Select
      description="Country of registration"
      placeholder="Country of registration"
      data={['Egypt',"Germany","Australia","Canada"]}
      defaultValue="Egypt"
      className={styles.formItem}
      rightSection={<ArrowDown />}
    //   clearable={true} 
      clearButtonProps={<>x</>}	
      {...form.getInputProps('countryOfRegistration')}
      required
    />
    <TextInput
      description="Company name"
      placeholder="Company name"
      {...form.getInputProps('CompanyName')}
      className={styles.formItem}
      required
    />
    <TextInput
      description="Registration code"
      placeholder="Registration code"
      {...form.getInputProps('registrationCode')}
      className={styles.formItem}
      required
    />
    <hr style={{marginTop:"50px",borderBottom: "1px solid #E3E2E7", }}  />
    <Group justify="flex-start" mt="md"  >
          <Button 
          variant="default"
          type="submit" className={styles.submit}>Add account</Button>
    </Group>
    </form>
  )
}

export default AddAccountForm