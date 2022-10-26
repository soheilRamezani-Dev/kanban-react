import { BsCardList } from "react-icons/bs";
import CreateNewBoard from "../createNewBoard/CreateNewBoard";
import { useState } from "react";

const NewBoardButton = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="new-bord p-3 text-success" role="button">
        <span className="board-item-icon">
          <BsCardList size="1.5em" />
        </span>
        <span onClick={() => setModalShow(true)} role="button" className="ps-2">+ Create New Board</span>
      </div>
      <CreateNewBoard setModalShow={setModalShow} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default NewBoardButton;
