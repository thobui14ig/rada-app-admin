import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Danh Sách Nhân Viên" />

      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
