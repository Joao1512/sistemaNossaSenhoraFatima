import React, { useState } from 'react';

import Menu from './../../Components/menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import api from './../../Services/api';

import './styles.css';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

export default function NewEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [residence_number, setResidenceNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [access_level, setAccessLevel] = useState('Comum');
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);
    const [errMsg, setErrMsg] = useState('');
    function clearFields() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordVerify('');
        setCpf('');
        setPhone('');
        setStreet('');
        setResidenceNumber('');
        setState('');
        setCity('');

    }
    async function handleSubmit() {
        if (!name) {
            setErrMsg('Preencha o seu nome!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!email) {
            setErrMsg('Preencha o seu email!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!password) {
            setErrMsg('Digite uma senha!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!passwordVerify) {
            setErrMsg('Digite sua senha novamente!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if(password !== passwordVerify) {
            setErrMsg('Senhas não conferem!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!cpf) {
            setErrMsg('Digite o seu CPF!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!phone) {
            setErrMsg('Digite o seu número de celular!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!street) {
            setErrMsg('Digite a sua Rua!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!residence_number) {
            setErrMsg('Digite o número de sua residência!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!state) {
            setErrMsg('Digite o estado em que reside!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        if (!city) {
            setErrMsg('Digite o nome da sua cidade!');
            setTransition(() => TransitionUp);
            return setOpen(true);
        }
        setLoading(true);
        const json = {
            name,
            email,
            password,
            cpf,
            phone,
            street,
            residence_number,
            state,
            city,
            access_level
        }
        const response = await api.post('/employees', json);
        if(response.status === 200) {
            setErrMsg('Novo Funcionário Salvo com Sucesso!');
            setTransition(() => TransitionUp);
            clearFields();
            setLoading(false);
            return setOpen(true);
        }
        console.log('Erro: ' + response);
        setErrMsg('Houve um erro ao salvar o novo funcionário em nosso banco de dados!');
        setTransition(() => TransitionUp);
        setLoading(false);
        return setOpen(true);
    }
    function handleClose() {
        return setOpen(false);
    }
    return (
        <>
        <Menu />
        <div className="employeeWrapper">
            <p>Novo Funcionário</p>
            <form>
                <div className="employeeForm">
                    <TextField
                        required
                        label="Nome"
                        id="outlined-required"
                        placeholder="Nome para login"
                        margin="normal"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Email"
                        id="outlined-required"
                        placeholder="seuemail@exemplo.com"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        label="Senha"
                        id="outlined-required"
                        type="password"
                        placeholder="***********"
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <TextField
                        required
                        label="Repetir Senha"
                        id="outlined-required"
                        type="password"
                        placeholder="***********"
                        margin="normal"
                        variant="outlined"
                        value={passwordVerify}
                        onChange={e => setPasswordVerify(e.target.value)}
                    />
                    <div className="cpfphoneWrapper">
                        <TextField
                            required
                            label="CPF"
                            id="outlined-required"
                            margin="normal"
                            variant="outlined"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                        <TextField
                            required
                            label="Celular"
                            id="outlined-required"
                            placeholder="(DDD) 9999-9999"
                            margin="normal"
                            variant="outlined"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <TextField
                        required
                        label="Rua"
                        id="outlined-required"
                        margin="normal"
                        variant="outlined"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                    />
                    <div className="cpfphoneWrapper">
                        <TextField
                            required
                            label="Num."
                            id="outlined-required"
                            margin="normal"
                            variant="outlined"
                            value={residence_number}
                            onChange={e => setResidenceNumber(e.target.value)}
                        />
                        <TextField
                            required
                            label="Estado"
                            id="outlined-required"
                            margin="normal"
                            variant="outlined"
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>
                    <TextField
                        required
                        label="Cidade"
                        id="outlined-required"
                        margin="normal"
                        variant="outlined"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
            </form>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{errMsg}</span>}
            />
            <Button onClick={handleSubmit} className="btn" variant="contained">
                {loading ? <CircularProgress color="white" style={{margin: 'auto auto'}} /> : 'Registrar'}
            </Button>
        </div>
        </>
    );
}