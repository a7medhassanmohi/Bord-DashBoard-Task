import React from 'react'
import styles from "./filter.module.css"
import ArrowDown from '@/icons/ArrowDown'
import { MultiSelect, Select } from '@mantine/core'
type Props = {}
const FilterComponent = (props: Props) => {
  return (
   <div className={styles.filterContainer}>
    <div className={styles.filterBy}>
    <Select
      description="Filter by"
      placeholder=""
      data={['Accounts who have completed', 'Accounts who have incompleted',"Accounts who have in review","Accounts who have in progress"]}
      defaultValue=""
      className={styles.formItem}
    //   rightSection={<ArrowDown />}
      clearable={true} 
    />
    
    </div>
    <div className={styles.condition}><MultiSelect
      description="Conditions"
      placeholder=""
      data={['Accounts who have completed', 'Accounts who have incompleted',"Accounts who have in review","Accounts who have in progress"]}
      className={styles.formItem}
      defaultValue={[]}
      rightSection={<ArrowDown />}
    //   clearable={true} 
    /></div>
   </div>
  )
}

export default FilterComponent