import { Card } from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: create_at
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>
        Membership Level: membership
      </p>
    </Card.Content>
  </Card>
)

export default Account;