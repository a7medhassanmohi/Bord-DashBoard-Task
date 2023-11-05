import { Table } from '@mantine/core'
import React, { ReactNode } from 'react'
import styles from "./Table.module.css"

type Props = {
    score:string
}

const Score = ({score}: Props) => {
    const scoreNumber=score.split("").filter((i)=>!Number.isNaN(parseFloat(i))).join("")
    const ColorYellow=Number(scoreNumber)>=50?"#E28C01":""
    const ColorGreen=Number(scoreNumber)>=70?"#30C048":""
    const ColorRed=Number(scoreNumber)>=0?"#CC1742":""
    const color=ColorGreen || ColorYellow || ColorRed
  return (
    <Table.Td className={styles.accountScore} style={{color:color}}>{score}</Table.Td>
  )
}

export default Score


