import { Modal } from "react-bootstrap";
import ModalInput from "./../ModalInput";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/actions";

const CreateNewBoard = ({setModalShow,...props}) => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState("");
  let schema = yup.object().shape({
    boardName: yup.string().min(5,'board name must be include atleast 5 character').required('board name is required')
  });
  const dispatch = useDispatch();
  const submitHandler = ()=> {
    schema.validate({boardName:inputValue}).then((val)=>{
      setErrors('');
      dispatch(addBoard(inputValue));
      setModalShow(false);
    }).catch((error)=>{
      setErrors(error.message);
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
            <h4 className="mb-5">Add New Board</h4>
            <ModalInput title="Board Title" id="boardtitle" inputValue={inputValue} setInputValue={setInputValue} />
            <div className="input-error text-danger"><small>{errors}</small></div>
            <button className="btn btn-success w-100 mt-3" onClick={submitHandler}>Add Board</button>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewBoard;
