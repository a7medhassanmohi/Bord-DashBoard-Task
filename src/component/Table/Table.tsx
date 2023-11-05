"use client"
import { Head, elements } from '@/utility/table';
import { Table } from '@mantine/core'
import React from 'react'
import styles from "./Table.module.css"
import Score from './Score';
import Status from './Status';
import Icon from './Icon';
import Trash from '@/icons/Trash';
import FilterComponent from '../FilterComponent/FilterComponent';
type Props = {
  data:Data
  setData:React.Dispatch<React.SetStateAction<Data>>
}

const TableComponent = ({data,setData}: Props) => {
  function deleteItem(id:string){
    setData(prev=>{
      const newArr=prev.filter((i)=>i.id!==id)
      return newArr
    })
  }
    const rows = data.map((element) => (
        <Table.Tr key={element.id}>
            <Icon icon={element.icon}/>
          <Table.Td className={styles.account}>
            {element.Account}
            <p className={styles.accountId}>{element.accountId}</p>
            </Table.Td>
             <Score score={element.accountScore}/>
             <Status status={element.status}/>
          <Table.Td className={styles.Country}>{element.Country}</Table.Td>
          <Table.Td className={styles.lastUpdated}>{element.lastUpdated}</Table.Td>
          <Table.Td className={styles.action} onClick={()=>deleteItem(element.id)} ><Trash/></Table.Td>
        </Table.Tr>
      ));
  return (
    <>
    <FilterComponent/>
    <Table.ScrollContainer minWidth={900}>
    <Table horizontalSpacing="lg" verticalSpacing="sm" highlightOnHover>
    <Table.Thead>
        <Table.Tr>
            {Head.map((item)=>{
                return  <Table.Th className={styles.tHead} key={item.id}>{item.name}</Table.Th>
            })}
         
          {/* <Table.Th className={styles.tHead}>Account score</Table.Th>
          <Table.Th className={styles.tHead}>KYB/KYC status</Table.Th>
          <Table.Th className={styles.tHead}>Country</Table.Th>
          <Table.Th className={styles.tHead}>Last updated</Table.Th>  */}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
  </Table>
    </Table.ScrollContainer>
    </>
  )
}

export default TableComponent