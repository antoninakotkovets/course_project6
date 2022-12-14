import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import { Field, Form, Formik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow({ open, setOpen, inputs, initValues, onSubmitFunction }) {
  const inputsToRender = inputs.map(({ ...props }) => {
    console.log(props)
    return <Field {...props} />
  })

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Formik
        initialValues={initValues}

        onSubmit = {(values) =>{
          onSubmitFunction(values)
        }}

        >
          <Form>
            {inputsToRender}
            <button  type='submit' >сохранить</button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
}