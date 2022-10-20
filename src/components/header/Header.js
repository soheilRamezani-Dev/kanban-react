import {FiMoreVertical} from 'react-icons/fi'

const Header = () => {
  return (
<div className="bg-primary border border-lightgray d-flex justify-content-between text-light p-4">
    <h4>Platform Launch</h4>
    <div>
        <button className="btn btn-success me-3">+ Add New Task</button>
        <FiMoreVertical size="1.5em"/>
    </div>
</div>
  );
};

export default Header;
