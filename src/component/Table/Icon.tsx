import Building2 from '@/icons/Building2'
import Profile from '@/icons/Profile'
import { Table } from '@mantine/core'
import React from 'react'
import styles from "./Table.module.css"

type Props = {
    icon:string
}

const Icon = ({icon}: Props) => {
    const IconComponent=icon=="Private person"?Profile:icon=="Company"?Building2:Profile
  return (
    <Table.Td className={styles.icon} >{<IconComponent/>}</Table.Td>
  )
}

export default Icon