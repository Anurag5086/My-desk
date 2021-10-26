import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { deleteFile, getFiles, uploadFile } from "../../actions/actions";
import "./styles.css";

function Assignment({ type }) {
  const [Data, setData] = useState();
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const email = localStorage.getItem("googleEmail");

  useEffect(() => {
    getFiles(email, type).then((res) => setData(res));
  }, [type]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const uploadImage = async (base64Encoded, name) => {
    const d = new Date();
    const dateFull = `${
      d.getUTCDate() < 10 ? "0" + d.getUTCDate() : d.getUTCDate()
    }-${
      d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
    }-${d.getFullYear()}`;
    await uploadFile(email, base64Encoded, name, dateFull, type);
    window.location.reload();
    setFileInputState("");
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result, selectedFile.name);
    };
  };
  if (email) {
    return Data != null ? (
      <>
        <div className="row d-flex justify-content-center mt-100 mb-100">
          <div className="col-lg-7">
            <div className="card1">
              <div className="card1-body text-center">
                <h4 className="card1-title mb-5">{type.toUpperCase()}</h4>
              </div>
              <div>
                <div className="upload">
                  <form className="form" onSubmit={handleSubmitFile}>
                    <input
                      id="fileInput"
                      type="file"
                      name="image"
                      className="form-input"
                      onChange={handleFileInputChange}
                      value={fileInputState}
                    />
                    <button className="btn_upload" type="submit">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
              <ul className="list-style-none">
                {Data.map((file) => {
                  return (
                    <li
                      className="d-flex no-block card1-body"
                      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }}
                    >
                      <ArrowForwardIcon style={{ marginTop: "8px" }} />
                      <div>
                        {" "}
                        <a
                          href={file.url}
                          target="_blank"
                          className="font-medium p-0 heading"
                          data-abc="true"
                        >
                          {file.name.split(".")[0]}
                        </a>
                      </div>
                      <div className="ml-auto">
                        <div className="tetx-right">
                          <span className="text-muted">Uploaded on:</span>
                          <h6 className="text-muted">{file.date}</h6>
                        </div>
                      </div>
                      <button
                        className="delete_btn"
                        onClick={() => {
                          deleteFile(email, file.publicId);
                          window.location.reload();
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    ) : (
      <></>
    );
  } else {
    window.location.href = "/login";
  }
}

export default Assignment;
