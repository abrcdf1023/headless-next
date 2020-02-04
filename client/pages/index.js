import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button'

import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <div>
        <Alert severity="info">This is a warning alert — check it out!</Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
}