import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router";

const AddPage = () => {
  const schema = yup.object({
    image: yup.string().required("Данное поле обязательно"),
    name: yup
      .string()
      .min(3, "Минимальное 3 символа")
      .max(30, "Максимальное 30 символов")
      .required("Данное поле обязательно"),
    category: yup
      .string()
      .min(2, "Минимальное 2 символа")
      .max(100, "Максимальное 100 символов")
      .required("Данное поле обязательно"),
    description: yup
      .string()
      .min(10, "Минимальное 10 символов")
      .max(300, "Максимальное 300 символов")
      .required("Данное поле обязательно"),
    price: yup
      .number()
      .min(3, "Минимальное 3 символа")
      .required("Данное поле обязательно"),
    video: yup
      .string()
      .min(1, "Минимальный 1 символ")
      .max(50, "Максимальное 50 символов")
      .required("Данное поле обязательно"),
  });

  const { addProduct } = useContext(adminContext);
  const navigate = useNavigate();
  const handleSubmit = (product) => {
    addProduct(product);
    navigate("/admin");
  };
  return (
    <div className="add-page">
      <h2>Добавить игру</h2>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          image: "",
          name: "",
          category: "",
          description: "",
          price: "",
          video: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Изображение"
              type="text"
              variant="standard"
              name="image"
              value={values.image}
              error={!!errors.image && touched.image}
              helperText={touched.image ? errors.image : ""}
              onChange={handleChange}
            />
            <TextField
              label="Название игры"
              type="text"
              variant="standard"
              name="name"
              value={values.name}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ""}
              onChange={handleChange}
            />
            <TextField
              label="Категория"
              type="text"
              variant="standard"
              name="category"
              value={values.category}
              error={!!errors.category && touched.category}
              helperText={touched.category ? errors.category : ""}
              onChange={handleChange}
            />
            <TextField
              label="Описание:"
              type="text"
              variant="standard"
              name="description"
              value={values.description}
              error={!!errors.description && touched.description}
              helperText={touched.description ? errors.description : ""}
              onChange={handleChange}
            />

            <TextField
              label="Цена"
              type="number"
              variant="standard"
              name="price"
              value={values.price}
              error={!!errors.price && touched.price}
              helperText={touched.price ? errors.price : ""}
              onChange={handleChange}
            />
            <TextField
              label="Трейллер"
              type="text"
              variant="standard"
              name="video"
              value={values.video}
              error={!!errors.video && touched.video}
              helperText={touched.video ? errors.video : ""}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Добавить игру
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPage;
