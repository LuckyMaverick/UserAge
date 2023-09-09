import React, { useState } from 'react';
import Util from "../components/utils/Util";
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";
import ErrorModal from '../components/common/ErrorModal'

function UserAgeRegister() {
  const [users, setUsers] = useState([])
  const [showErrMsg, setShowErrMsg] = useState(false)
  
  const handle = {
    addNew(newUser) {
      if(Util.string.hasEmptyValue(newUser) || +newUser.age < 1) setShowErrMsg(true)
      else setUsers(prev => ([newUser, ...prev]))
    }
  }
  
  
  return (
    <div className={"user-age-container"}>
      <AddUser addUser={handle.addNew} />
      
      { users.length > 0
        ? <UserList data={users} columns={Object.keys(users[0])}/>
        : <div>No Users</div>
      }
      
      <ErrorModal isOpen={showErrMsg} errorMessage={"Object contains empty string properties."} onClose={_ => setShowErrMsg(false)} />
    </div>
  );
}

export default UserAgeRegister;