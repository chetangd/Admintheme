import { useEffect, useState } from 'react';
import MainCard from 'components/MainCard';
import Add from './Add';
import List from './List';
import tableData from './mockData';

const Staff = () => {
  const [openForm, setOpenForm] = useState(false);
  const customer = null;
  const onOpenAddForm = () => {
    setOpenForm(!openForm);
  };

  useEffect(() => {
    // APi to get staff list
  }, []);

  return (
    <MainCard content={false}>
      <Add openForm={openForm} onOpenAddForm={onOpenAddForm} customer={customer} />
      <List onOpenAddForm={onOpenAddForm} tableData={tableData} />
    </MainCard>
  );
};

export default Staff;
