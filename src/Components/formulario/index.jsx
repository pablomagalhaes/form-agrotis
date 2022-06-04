import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { MenuItem, TextField } from '@material-ui/core'

import { Container, Header, HeaderTitle, HeaderButton, Row1, Row2, Row3, FormContainer, ResetImage} from './styles';

import resetImage from '../../assets/images/resetIcon.svg';

import  Alerts  from '../Alerts'
import styles from './formulario.module.css'

const propriedade = [
  {
    id: '10001',
    nome: "Agrotis 1",
    cnpj:  "04.909.987/0001-89"
  },
  {
    id: '10002',
    nome: "Agrotis 2",
    cnpj:  "04.909.987/0001-88"
  },
  {
    id: '10003',
    nome: "Agrotis 3",
    cnpj:  "04.909.987/0001-87"
  },
  {
    id: '10004',
    nome: "Agrotis 4",
    cnpj:  "04.909.987/0001-86"
  },
  {
    id: '10005',
    nome: "Agrotis 5",
    cnpj:  "04.909.987/0001-85"
  }
]
const laboratorio = [
  {
    id: '20001',
    nome: "Agro Skynet"
  },
  {
    id: '20002',
    nome: "Umbrella Agro"
  },
  {
    id: '20003',
    nome: "Osborn Agro"
  },
  {
    id: '20004',
    nome: "Skyrim Agro"
  },
  {
    id: '20005',
    nome: "Agro Brasil"
  },
  {
    id: '20006',
    nome: "AgroSky Brasil"
  },
]

export default function Formulario(){

  const [Showreset, setShowreset] = useState(false);

  const [obsletter, setObsletter] = useState(0)
  const [nomeletter, setNomeletter] = useState(0)

  const [cnpjProp, setCnpjProp] = useState("")
  const [alertMsg, setAlertMsg] = useState({tipo: "", msg: ""})

  const [valuesProp, setValuesProp] = useState({ currenty: "" })
  const [valuesLab, setValuesLab] = useState({ currenty: "" })

  const handleChangeProp = (event) => {
    setValuesProp(event.target.value);
  };
  const handleChangeLab = (event) => {
    setValuesLab(event.target.value);
  };


  //#region : EXIBI OS DADOS NO CONSOLE
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    const { nome, dataInicio, dataFinal, selectPropriedade, selectLaboratorio, observacao } = data

    setAlertMsg({ msg: "Cadastro realizado com sucesso!", tipo: "success" })

    console.log(
      {
        nome, 
        dataInicio, 
        dataFinal, 
        infosPropriedade: {
          id: selectPropriedade.id,
          nome: selectPropriedade.nome, 
          cnpj: selectPropriedade.cnpj, 
        },
        laboratorio: {
          id: selectLaboratorio.id,
          nome: selectLaboratorio.nome
        }, 
        observacoes: observacao
      }
    )
    resetForm()
    setShowreset(true)
  }
 
  
  
  useEffect(() => {
    for(let key in errors){
      if(key){
        setAlertMsg({ msg: "Preencha os campos obragatórios.", tipo: "error" })
      }
    }
  }, [errors])
 

  const resetForm = () => {
    reset({
      nome:'',
      dataInicio:'',
      dataFinal:'',
      selectPropriedade: "",
      selectLaboratorio: "",
      observacao:''
    })
    setNomeletter(0)
    setObsletter(0)
    setShowreset(false);

    setTimeout(() => {
      setAlertMsg({ msg: '', tipo: '' })
    }, 3000)
  }
  //#endregion

  //#region : CONTAR CARACTERES
  const handleLetterNome = e => setNomeletter(e.target.value.length)
  const handleLetterObs = e => setObsletter(e.target.value.length)
  //#endregion

  return (
    <>
      <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Header>
                <HeaderTitle>Teste front-end</HeaderTitle> 
                <HeaderButton type="submit">Salvar </HeaderButton>
              </Header>

                  <Row1>
                    <TextField 
                      id="nome"
                      label="Nome *" 
                      inputProps={{ maxLength: 40, onChange: handleLetterNome }}
                      {...register("nome", { required: true })} 
                      error={errors.nome}  
                      helperText={errors.nome ? errors.nome && "Error" : nomeletter +"/40" } 
                    />
                
                    <TextField 
                      id="dataInicio"
                      label="Data Início *"
                      type="date"
                      defaultValue={""}
                      {...register("dataInicio", { required: true })} 
                      error={errors.dataInicio}  
                      helperText={errors.dataInicio && "Error"}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      id="dataFinal"
                      label="Data Final *"
                      type="date"
                      defaultValue={""}
                      {...register("dataFinal", { required: true })} 
                      error={errors.dataFinal}  
                      helperText={errors.dataFinal && "Error"}
                      InputLabelProps={{
                      shrink: true,
                      }}
                    />
                  
                  </Row1>
            
                  <Row2>
                    <TextField 
                      id="propriedadeSelect"
                      label="Propriedade *"
                      select 
                      defaultValue={valuesProp.currenty}
                      inputProps={{ onChange: handleChangeProp }}
                      SelectProps={{ 
                        renderValue: (optionProp) => optionProp.nome, 
                      }}
                      {...register("selectPropriedade", { required: true })} 
                      error={errors.selectPropriedade}
                      helperText={errors.selectPropriedade ? errors.selectPropriedade && "Error" : cnpjProp ? "CNPJ: "+ cnpjProp : ""}
                      >
                        {propriedade.map(item => (
                          <MenuItem key={item.id} value={item}>
                            <div className={styles.ItemSelect} onClick={() => setCnpjProp(item.cnpj)}>
                              <h3>{item.nome}</h3>
                              <small>{item.cnpj}</small>
                            </div>
                          </MenuItem>
                        ))}
                    </TextField>
                          
                    <TextField 
                      id="laboratorioSelect"
                      select 
                      defaultValue={valuesLab.currenty}
                      inputProps={{ onChange: handleChangeLab }}
                      label="Laboratório *"
                      SelectProps={{ 
                        renderValue: (optionLap) => optionLap.nome 
                      }}
                      {...register("selectLaboratorio", { required: true })} 
                      helperText={errors.selectLaboratorio && "Error"}
                      error={errors.selectLaboratorio}         
                      >
                        {laboratorio.map(item => (
                          <MenuItem key={item.id} value={item}>
                            <h3>{item.nome}</h3>
                            <small>{item.cnpj}</small>
                          </MenuItem>
                        ))}
                    </TextField>
                  </Row2>
                
                  <Row3>
                    <TextField 
                      id="observacao"
                      label="Observação" 
                      multiline
                      inputProps={{ maxLength: 1000, onChange: handleLetterObs }}
                      minRows={7}
                      maxRows={10}
                      {...register("observacao")} 
                      error={errors.observacao}  
                      helperText={ errors.observacao ? errors.observacao && "Error" : obsletter + "/1000" } 
                      />
                  </Row3>  
            <Alerts tipo={alertMsg.tipo} msg={alertMsg.msg} />
          </form>
      </Container>
        <FormContainer>
          {Showreset &&
            <ResetImage
              src={resetImage}
              onClick={() => resetForm()}
          />}
        </FormContainer>    
    </>
  )

}