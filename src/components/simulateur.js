import React, { useState, useEffect } from 'react';
import CenterCard363 from './centerCard363';
import useForm from '../sim-form-react';

const Simulateur = () => {
  const [editing, setEditing] =  useState(false);
  const [errMsg, setErrMsg] =  useState('');
  const [status, setStatus] =  useState('');
  const [profile, setProfile] =  useState({});
  const options = {
    initialValues: {
      montantSouhaite: '',
      taux: '',
      moisNumber: '',
    },
    debug: false
  }
  const { setInputs, onSubmit, onChange, inputs, reset } = useForm('AdvanceForm', options);

  const cancelForm = () => {
    setEditing(false)
    reset();
  }


  const renderButtons = () => {

      return (<div className="form-group">
        <button type="submit" className="btn-lg btn btn-light btn-block">Lancer la simulation</button>
        <button className="btn-lg btn btn-secondary btn-block" onClick={cancelForm}>Cancel</button>
      </div>)
  
  }
  const renderSimulateurForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Montant souhaité:</label>
          <input
            type="number"
            min="1"
            max="300000"
            name="montantSouhaite"
            onChange={onChange}
            value={inputs.montantSouhaite}
            className="form-control form-control-lg"
            placeholder="Montant souhaité"
            required
            />
      </div>

      <div className="form-group">
        <label>Taux d’intérêt:</label>
        <input
          type='number'
          min='1'
          max='12'
          name="taux"
          onChange={onChange}
          value={inputs.taux}
          className="form-control form-control-lg"
          placeholder="Taux d’intérêt"
          required
          step="0.01"
          />
      </div>

      <div className="form-group">
        <label>Nombre de mois:</label>
        <input
            type='number'
            min='1'
            max='300'
            name="moisNumber"
            onChange={onChange}
            value={inputs.moisNumber}
            className="form-control form-control-lg"
            placeholder="Nombre de mois"
            required
            />
      </div>

      <div style={{'paddingTop': '30px'}}>
        {renderButtons()}
      </div>
    </form>);
  }
  return (
    <CenterCard363>
      <div className='card border-secondary'>
      <h4 className="card-header">
      CALCULATEUR DE CRÉDIT
      </h4>
      <div className='card-body'>
      <p className="text-muted">Formulaire</p>
        {profile && renderSimulateurForm()}
      </div>
      </div>
    </CenterCard363>
  );
}

export default Simulateur;
