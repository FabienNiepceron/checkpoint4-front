import axios from 'axios';
import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function UploadFile () {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState(""); 

    const onChangeHandle = (event) => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0]);
    }
    const onClickHandle = () => {
        console.log("file send")
        if (
            selectedFile.type !== "image/jpeg" &&
            selectedFile.type !== "image/jpg" &&
            selectedFile.type !== "image/png"
          ) {
            alert("only jpeg, jpg and png allowed");
          } else {
              const data = new FormData();
              data.append("file", selectedFile);
              console.table("form:" , data.get("file"));
              axios.post(`${API_URL}/upload`, data)
              .then(res => res.data)
              .then(res => {
                  setFilename(res.filename)
                  console.log(res)
                  alert(`L'image  ${res.filename} est sauvegarder`)
              })
              .catch((err) => {
                  alert(err)
              })
    }
    }
    const onClick = () => {
        axios
          .post(`${API_URL}/galerie`, {
            name: name,
            titre: title,
            image: filename
          })
          .then((res) => res.data)
          .then(() => {
            const messageSend = document.getElementById("validate");
            messageSend.innerHTML = "Demande envoyé !";
          })
          .catch((err) => {
            alert(err)
          });
      };


    return(
        <form>
            <input type="file" name="file" accept="image/*" onChange={onChangeHandle} />
            <button type="button" onClick={onClickHandle}>upload</button>
            <input type=" text" name="name" value={name}
              onChange={(event) => setName(event.target.value)} />
              <input type=" text" name="title" value={title}
              onChange={(event) => setTitle(event.target.value)} />
              <button type="button" onClick={onClick} >Ajouter</button>
              <p id="validate"></p>

            {/* {filename && <img src={`${API_URL}/images/${filename}`} alt="upload" />} */}
        </form>
    )
}

export default UploadFile