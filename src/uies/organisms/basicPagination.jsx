import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

import { BOUNDARY_COUNT } from 'utilities/Constants';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#848687',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#F16037',
      color: '#fff',
    },
  },
}));

function BasicPagination(props) {
  const { handleChangePage, totalPages } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    handleChangePage(value);
  };
  return (
    <div>
      <Pagination
        classes={{ ul: classes.ul }}
        shape="rounded"
        count={totalPages}
        page={page}
        onChange={handleChange}
        siblingCount={0}
        boundaryCount={BOUNDARY_COUNT}
      />
    </div>
  );
}

export default BasicPagination;
