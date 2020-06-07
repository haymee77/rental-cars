import React from 'react';
import axios from 'axios';
import Car from './components/Car';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    cars: [],
  };
  getCars = async () => {
    const params = {
      sdate: '2020-07-06T09:00',
      edate: '2020-07-08T09:00',
      zone: 'JEJU',
    };
    const { status, data } = await axios({
      method: 'post',
      url: 'https://erp.dev.zzimcar.co.kr/search/car/list',
      data: params,
    });

    if (status === 200) {
      return data;
    } else {
      return null;
    }
  };
  componentDidMount() {
    this.getCars().then((res) => {
      if (res) {
        this.setState({
          cars: res,
          isLoading: false,
        });
      }
    });
  }

  render() {
    const { cars } = this.state;
    return (
      <div className='App'>
        <div className='cars'>
          {cars.map((car) => (
            <Car
              key={car.erpCode}
              erpCode={car.erpCode}
              name={car.erpName}
              agency={car.agency}
              insurance={car.bohum}
              pic={car.imgUrlDetail}
              price={car.salefee}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
