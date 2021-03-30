import { useState } from 'react';
import { Form } from 'semantic-ui-react';

const AccountForm = () => {
  const [username, setUserName] = useState("")
  const [membership, setMembership] = useState("")
  // const [user, setUser] = useState({ username: "", membership: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="username"
        value={username}
        onChange={(e, { value }) => setUserName(value)}
        label="Username"
        type="text"
      />
      <Form.Select 
        name="membership"
        value={membership}
        onChange={(e, { value}) => setMembership(value)}
        label="Memberships Levels"
        options={membershipOpts}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
]

export default AccountForm;