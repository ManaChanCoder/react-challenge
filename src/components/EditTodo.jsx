import React from "react";

const EditTodo = (props) => {
  const { editText, setTextTodo, textTodo, editModal, editWarning } = props;

  const enterEdit = (e) => {
    if (e.key === "Enter") editText();
  };
  return (
    <div
      class="modal fade"
      id="editTodo"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Edit Todo
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <span className="block mb-3 text-center">{editWarning}</span>
            <input
              type="text"
              placeholder="Edit Todo"
              className="outline-none w-full bg-gray-200 text-black rounded-xl px-2 py-1 text-lg"
              name="editTodo"
              value={textTodo}
              onChange={(e) => setTextTodo(e.target.value)}
              onKeyDown={enterEdit}
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => editText(editModal)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
