import React from 'react';

export const MoneyCard = (value) => (
  <div className="card" style={{display: 'inline-block', verticalAlign: 'top'}}>
    <div className="card-inner">
      <div className="bank-value rotate-90">
        <div className="bank-value-inner">
          <span className="currency"></span><span className="amount">{value.value}</span>
        </div>
      </div>
      <div style={{margin: '2%', border: '4px double #ccc', height: '94%'}}>
        <table style={{height: '100%', width: '100%', textAlign: 'center'}}>
          <tbody>
          <tr>
            <td className="">
              <div className="money rotate-90">
                <span className="currency"></span><span className="amount">{value.value}</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="bank-value bottom rotate-90">
        <div className="bank-value-inner">
          <span className="currency"></span><span className="amount">{value.value}</span>
        </div>
      </div>
    </div>
  </div>
);