import { BsCardList } from "react-icons/bs";

const NewBoardButton = () => {
  return (
    <div className="new-bord p-3 text-success">
      <span className="board-item-icon">
        <BsCardList size="1.5em" />
      </span>
      <span className="ps-2">+ Create New Board</span>
    </div>
  );
};

export default NewBoardButton;
