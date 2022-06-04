import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import styled from "styled-components";

const Mensagem = styled.div`
  position:fixed;
  max-width:350px;
  width:90%;
  bottom:-50px;
  left:50%;
  transform:translateX(-50%);
  transition:.3s;
  opacity:0;
  height:0px;
  z-index:100;

  &.active{
    opacity:1;
    bottom:10px;
    height:auto;
  }
`
// tipo: error | warning | info | success
export default function Alerts({msg, tipo}) {
  const [alertActive, setAlertActive] = useState(!msg ? true : false)

  useEffect(() => {
    setAlertActive(true)

    const timer = setTimeout(() => {
      setAlertActive(false)
    }, 3000);

    return () => clearTimeout(timer);
  },[msg])

  return msg !== ""? <Mensagem className={alertActive ? 'active' : ''}>
      <Alert variant="filled" severity={tipo || "success"}>{ msg || "Mensagem"}</Alert>
  </Mensagem> : ""
}
