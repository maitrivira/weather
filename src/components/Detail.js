import React, { useEffect, useState, useReducer } from 'react';
import moment from 'moment/moment';
import axios from 'axios';
import './Detail.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Detail({ match }) {
  const params = match.params;
  const [locs, setLocs] = useState([]);
  const [lists, setLists] = useState([]);
  const [error, setError] = useState('');

  function avg_temp() {
    return (
      lists.map((list) => list.main.temp).reduce((sum, i) => sum + i, 0) / 5
    );
  }

  function avg_diff() {
    return (
      lists
        .map((list) => list.main.temp_max - list.main.temp_min)
        .reduce((sum, i) => sum + i, 0) / 5
    );
  }

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?id=${params.id}&q=&mode=json&units=metric&cnt=5&appid=271da6b323b05ebaf2b4aaa0f3378f89`
      )
      .then((res) => {
        console.log(res.data.list);
        setLocs(res.data.city);
        setLists(res.data.list);
      })
      .catch((err) => {
        console.log(err);
        setError('Error');
      });
  }, []);

  return (
    <div className='detail'>
      <div className='detail-body'>
        <h1>{lists.dt}</h1>
        {/* <h1>{moment.unix(lists.dt).format('DDDD, MMMM, YYYY')}</h1> */}
        <TableContainer component={Paper}>
          <Table className='detail-table' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>{locs.name}</TableCell>
                <TableCell align='left'>Temprature</TableCell>
                <TableCell align='left'>Differences</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists.map((list) => (
                <TableRow key={list.dt}>
                  <TableCell component='th' scope='row'>
                    {list.dt}
                  </TableCell>
                  <TableCell align='left'>{list.main.temp}C</TableCell>
                  <TableCell align='left'>
                    {list.main.temp_max - list.main.temp_min}C
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell align='left'>Average</TableCell>
                <TableCell align='left'>{avg_temp()}C</TableCell>
                <TableCell align='left'>{avg_diff()}C</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
