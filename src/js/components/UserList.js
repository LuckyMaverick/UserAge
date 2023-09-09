import React from "react";
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody } from "@mui/material";
import classes from "./../../styles/pages/user-list.module.scss"
import Card from "./common/Card"
import Util from './utils/Util'

const UserList = ({ data, columns }) => {
  return (
    <Card>
      <TableContainer className={classes["user-list-container"]}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(c => (
                <TableCell key={Util.string.random()}>{c}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map(i => (
                <TableRow key={Util.string.random()}>
                  <>
                    {Object.keys(i).map(k => (
                      <TableCell key={Util.string.random()}>{i[k]}</TableCell>
                    ))}
                  </>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default UserList