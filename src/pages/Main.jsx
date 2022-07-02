import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'ankara', label: 'TK06 ankara' },
  { value: 'istanbul', label: 'TK34 istanbul' },
  { value: 'adana', label: 'TK01 adana' },
  { value: 'afyon', label: 'TK03 afyon' },
  { value: 'izmir', label: 'TK35 izmir' },
  { value: 'Yozgat', label: 'TK66 yozgat' },
  { value: 'diyarbakir', label: 'TK27 diyarbakir' },
  { value: 'konya', label: 'TK41 konya' },
  { value: 'sivas', label: 'TK58 sivas' },
  { value: 'hatay', label: 'TK31 hatay' },
  { value: 'van', label: 'TK77 van' },
  { value: 'erzurum', label: 'TK17 erzurum' },
  { value: 'Malatya', label: 'TK45 Malatya' }
]

const firma = [
  { value: 'THY', label: 'Türk Hava Yollari' },
  { value: 'pegasus', label: 'Pegasus' },
  { value: 'Clarusway Air', label: 'Clarusway Air' }
  ]


const Main = () => {
  return (
    <div> 
      <form>
        <div className="mb-3">
          <Select options={options} />
          <div id="emailHelp" className="form-text">Lütfen ucus numaranizi seciniz</div>
          <Select firma={firma} />
          <div id="emailHelp" className="form-text">firmanizi seciniz</div>
          <button type="submit" className="btn btn-primary">Submit</button>
    </div>
 
    
</form>
      
    </div>
  )
}

export default Main