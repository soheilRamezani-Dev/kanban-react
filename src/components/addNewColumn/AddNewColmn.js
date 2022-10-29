import { Modal } from "react-bootstrap";
import ModalInput from "./../ModalInput";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from 'yup';
import { addColumn } from "../../redux/actions";

const AddNewColumn = ({setModalShow,...props}) => {
  const [columnInput,setColumnInput] = useState('');
  const [columnInputErrors,setColumnInputErrors] = useState('');
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    columnName: yup.string().required('column name is required').min(5,'column name must be atleast 5 character')
  });
  const submitNewColumn = () => {
    schema.validate({columnName:columnInput}).then(()=>{
      
      setColumnInput('');
      setModalShow(false);
      dispatch(addColumn(columnInput));
    }).catch((e)=>{
      setColumnInputErrors(e.message);
    });
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={`${useSelector((state) => state.mode)}-mode`}>
        <div className="bg-primary text-white rounded">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h4 className="mb-5">Add New column</h4>
            <ModalInput title="Column Title" id="Columntitle"inputValue={columnInput} setInputValue={setColumnInput} />
            <div className="text-danger input-error">{columnInputErrors}</div>
            <button onClick={submitNewColumn} className="btn btn-success w-100 mt-3">Add column</button>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewColumn;
