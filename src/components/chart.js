import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function mean(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={300} height={200} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{mean(props.data)} {props.unit}</div>
    </div>
  );
}
