// import classes from './shared-ui.module.scss';

import { useState } from 'react';

import LocalButton from './components/Button/Button';
import LocalInput from '../lib/components/Inputs/Input/Input';
import LocalTextArea from '../lib/components/Inputs/TextArea/TextArea';
import LocalModal from '../lib/components/Modal/Modal';
import LocalTable from '../lib/components/Table/Table';
import LocalAnalyticsChart from '../lib/components/AnalyticsChart/AnalyticsChart';

/**
 * https://nx.dev/docs/technologies/module-federation/concepts/micro-frontend-architecture#shared-libraries
 * @returns 
 */
const SharedUi = () => {
  const [email, setEmail] = useState('');
  const [txtAreaMsg, setTxtAreaMsg] = useState('');
  const [show, setShow] = useState(false);

  const headers = ['name', 'email', 'role'];

  const data = [
    { name: 'Alice', email: 'alice@test.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@test.com', role: 'User' },
    { name: 'Charlie', email: 'charlie@test.com', role: 'Editor' },
  ];

  return (
    <>
      <h1>Welcome to SharedUi!</h1>
      <div className="container mt-3">
        <LocalButton
          text="Submit"
          type="submit"
          variant="success"
          onClick={() => console.log('Clicked')}
        />
      </div>
      <div className="container mt-3">
        <LocalInput
          id="email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <LocalTextArea
          id="message"
          rows={5}
          placeholder="Write your message..."
          value={txtAreaMsg}
          onChange={(e: any) => setTxtAreaMsg(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          Open Modal
        </button>

        <LocalModal
          title="Demo Modal"
          show={show}
          onClose={() => setShow(false)}
        >
          <p>This is a simple Bootstrap modal for the demo app.</p>
        </LocalModal>
      </div>
      <div className="container mt-3">
        <LocalTable headers={headers} data={data} bordered />
      </div>
      <div className="container mt-3">
        <LocalAnalyticsChart
          title="Sales Overview"
          total="$24,300"
          growth="+8.1%"
          data={[
            { label: 'Jan', value: 30 },
            { label: 'Feb', value: 45 },
            { label: 'Mar', value: 52 },
            { label: 'Apr', value: 61 },
            { label: 'May', value: 48 },
          ]}
        />
      </div>
    </>
  );
};

export default SharedUi;

