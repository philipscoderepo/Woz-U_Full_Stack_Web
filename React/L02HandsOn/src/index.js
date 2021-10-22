import React from "react";
import ReactDOM from "react-dom";

const stateInfo = (
  head1, head2, head3, 
  item1, item2, item3,
  item4, item5, item6) => {
  return (
      <div>
          <h1>State Table</h1>
          <table className="table1">
            <tr>
              <th>{head1}</th>
              <th>{head2}</th>
              <th>{head3}</th>
            </tr>
            <tr>
              <th>{item1}</th>
              <th>{item2}</th>
              <th>{item3}</th>
            </tr>
            <tr>
              <th>{item4}</th>
              <th>{item5}</th>
              <th>{item6}</th>
            </tr>
          </table>
      </div>
  );
};

ReactDOM.render(
  stateInfo(
  'State', 'Capital', 'Population', 
  'California', 'Sacramento', '500,930',
  'Connecticut', 'Hartford', '123,088'),
  document.getElementById('root')
);