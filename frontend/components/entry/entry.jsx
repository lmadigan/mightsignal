import React from 'react';
import { Link, withRouter } from 'react-router';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LineChart, Line } from 'recharts';



class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
    this.renderErrorMessages = this.renderErrorMessages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.calcMonthTotal = this.calcMonthTotal.bind(this);
    this.parseMonth = this.parseMonth.bind(this);
    this.state = {
      entries: {},
      name: "",
      amount: "",
      date: "",
      changed: true,
      monthTotal: 0
    };
  }

  componentDidMount() {
    this.props.fetchMonths();
    this.props.fetchEntry().then(() => {
      this.setState({ changed: false });
    });
  }

  componentDidUpdate(){
    this.renderChart();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.changed === true ) {
      this.props.fetchEntry();
      this.props.fetchMonths().then(() => {
        this.setState({ changed: false });
      });
    }
  }

  calcMonthTotal() {
    let total = 0;
    let month = this.props.thisMonth
    month.forEach(el => {
      total += parseInt(el.amount);
    });
    return total;
  }

  parseMonth(mon) {
    let month = mon.split("-")[1];
    switch (month) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "Aug";
      case "09":
        return "Sept";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return "";
    }
  }

  renderChart(){
  const date = [];
  const months = this.props.months.month;
  for (var point in months) {
    const total = parseInt(months[point].total_amount) ;
    const dateTime = months[point].month.split(" ")[0]
    const mon = this.parseMonth(dateTime);
    date.push({name: mon, total: total});
  }
    return (
      <div className="outer-chart">
        <div className="chart-container">
          <div className="chart-legend">Total revenue from past months</div>
          <div className="bar-chart-div">
          <BarChart width={550} height={300} data={date}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="total" fill="#00BCD4" />
          </BarChart></div>
        </div>
      </div>
    );
  }


  handleSubmit(e) {
  e.preventDefault();

  const entry = Object.assign({}, {name: this.state.name, amount: parseFloat(this.state.amount), date: this.state.date});
  this.props.createEntry({entry});
  this.setState({name: ""});
  this.setState({amount: ""});
  this.setState({date: ""});
  this.setState({changed: true})
}

  update(property) {
    return e => this.setState({ [property]: e.target.value });
    }

  renderErrorMessages() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, ind) => (
            <li key={`error-${ind}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    console.log(this.props);
    let monthTotal = ( this.props.months.month ? this.calcMonthTotal() : "");
    let chart = this.renderChart();
    const errors = this.renderErrorMessages();
    return (
      <div className="page-wrapper">
        <div className="header">MightySignal's Billing Dashboard</div>
        <div className="current-monthly-wrapper">
          <div className="current-monthly-inner">
            <h1 className="monthly-title">Current Monthly Revenue</h1>
          <div className="month-total">${monthTotal}</div></div>
        </div>

        <div className="chart-form-wrapper">
          {chart}
          <div className="form-wrapper">
            <div className="new-entry">
              <h1 className="login-header">Create Entry</h1>
            </div>
            <form onSubmit={this.handleSubmit} className='input-fields'>
              <div className="field-item">
                  <input type="text" required
                    placeholder="Name..."
                    value={this.state.name}
                    onChange={this.update("name")}
                    className=''/>
              </div>
              <br/>
              <div className="field-item">
                  <input type="text"  required
                    placeholder="Amount..."
                    value={this.state.amount}
                    onChange={this.update("amount")}
                    className=''/>
                </div>
                <br/>
                <div className="field-item">
                    <input type="date" required
                      placeholder="Date (yyyy-mm-dd)"
                      value={this.state.date}
                      onChange={this.update("date")}
                      className=''/>
                  </div>
                <br/>
                <div className="submit-item">
                  <input type="submit" className="submit" value="Create Entry" />
                </div>
              </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Entries;
