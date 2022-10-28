import ModalInput from "./../../ModalInput";
import ModalTextarea from "./ModalTextarea";
import ModalAddSubtask from "./ModalAddSubtask";
import ModalSelectStatus from "./../../ModalSelectStatus";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../../../redux/actions";

const ModalForm = ({setModalShow}) => {
  const selector = useSelector((state) => state.tasks);
  const columns = selector.find((val) => val.selected === true).columns;

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      subtasks: [],
      status: "0",
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .required("title is required")
        .min(5, "title must be atleast 5 character"),
      description: yup.string(),
      subtasks: yup
        .array()
        .required("title is required")
        .min(1, "title must be atleast 1 subtask"),
    }),
    onSubmit: (values) => {
      dispatch(addTask(values));
      setModalShow(false);
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit} className="form mt-4">
      <ModalInput
        formikHandler={formik.handleChange}
        inputValue={formik.values.title}
        title="Title"
        id="title"
      />

      {formik.touched.title && formik.errors.title ? (
        <div className="text-danger">{formik.errors.title}</div>
      ) : null}

      <ModalTextarea
        formikHandler={formik.handleChange}
        inputValue={formik.values.description}
        title="Description"
        id="description"
      />
      {formik.touched.description && formik.errors.description ? (
        <div className="text-danger">{formik.errors.description}</div>
      ) : null}

      <ModalAddSubtask
        formikHandler={formik.handleChange}
        inputValue={formik.values.subtasks}
        title="SubTask"
        id="subtasks"
      />
      {formik.touched.subtasks && formik.errors.subtasks ? (
        <div className="text-danger ms-3">{formik.errors.subtasks}</div>
      ) : null}

      <div className="m-2">
        <ModalSelectStatus columns={columns} formikHandler={formik.handleChange} />
      </div>

      <div className="mt-4">
        <input
          type="submit"
          className="m-2 p-2 rounded-pill text-white bg-success w-100 text-center"
          value="+ Create Task"
        />
      </div>
    </form>
  );
};

export default ModalForm;
