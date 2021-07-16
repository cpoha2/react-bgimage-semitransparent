import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

const GridRowData = (props :any) => {
  const {label, data} = props;

   return <Fragment>
       <Grid item xs={6} md={6}><strong>{label}</strong></Grid>
       <Grid item xs={6} md={6}>{data}</Grid>
    </Fragment>;
}

export default GridRowData;