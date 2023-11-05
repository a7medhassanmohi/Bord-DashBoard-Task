import React from 'react'
import styles from "./Table.module.css"
import { Table } from '@mantine/core'

type Props = {
    status:string
}

const Status = ({status}: Props) => {
    const ColorYellow=status=="in review"?"#E28C01":""
    const ColorGreen=status=="complete"?"#30C048":""
    const ColorRed=status=="Incomplete"?"#CC1742":""
    const ColorGray=status=="In progress"?"#615E7B":""
    const color=ColorGreen || ColorYellow || ColorRed || ColorGray
    const pgColorYellow=status=="in review"?"#FEF5E7":""
    const pgColorGreen=status=="complete"?"#ECFAEE":""
    const pgColorRed=status=="Incomplete"?"#FBE9EE":""
    const pgColorGray=status=="In progress"?"#F1F1F4":""
    const pgColor=pgColorYellow || pgColorGreen || pgColorRed || pgColorGray

  return (
    <Table.Td >
        <p className={styles.status} style={{color:color,backgroundColor:pgColor }}>
       {status}
        </p>
        </Table.Td>
          
  )
}
background: ;

export default Status