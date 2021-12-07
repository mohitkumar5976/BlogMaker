import React, { useState, useEffect } from "react";
import "./LayoutCategory.css";
import axios from "axios";
import { useHistory } from "react-router";

function LayoutCategory() {
  const [Category, setCategory] = useState("");
  const [GetCategory, setGetCategory] = useState([]);
  let history = useHistory();
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    await axios.get("/getCategory").then((res) => {
      console.log(res.data);
      setGetCategory(res.data);
    });
  };

  const add = async (e) => {
    const category = {
      category: Category,
    };
    await axios.post("/addCategory", category).then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        console.log("category added");
        history.push("/layout");
        setCategory("");
      }
    });
  };

  const deleteCategory = (id) => {
    axios.post(`/deleteCategory/${id}`).then((res) => {
      loadCategory();
    });
  };

  return (
    <>
      <div className="LayoutCategory-wrapper">
        <form onSubmit={add} className="LayoutCategory-header">
          <div className="LayoutCategory-title">Category Name</div>
          <div>
            <input
              type="text"
              value={Category}
              name="Category"
              onChange={(e) => setCategory(e.target.value)}
              className="LayoutCategory-inpu"
            />
          </div>
          <div className="LayoutCategoryButton">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
        <hr></hr>
        <div className="CategoryList">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Category Name</th>
                <th scope="col">No.of Posts</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {GetCategory.map((data) => (
                <tr key={data.id}>
                  <td scope="row">{data.categories}</td>
                  <td>0</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        deleteCategory(data.id);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LayoutCategory;
