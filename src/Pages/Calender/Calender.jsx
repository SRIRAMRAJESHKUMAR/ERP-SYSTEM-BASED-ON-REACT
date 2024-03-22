import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { initialOrders } from "../../Common/Data/Data";
import CommonPara from "../../Common/Para/Para";
import "./Calender.css";
import swal from 'sweetalert';

export default function BasicDateCalendar() {
  const [NewDate, setNewDate] = React.useState("");
  const [wantedData, setWanteddata] = React.useState([]);
  const [Display, setDisplay] = React.useState(false);

  function handlealert(){
    swal('No orders Found')
  }
  const HandleChange = (GetData) => {
    setDisplay(true);
    if (Number(GetData.$M + 1) < 10) {
      var CurrentMonth = `0${GetData.$M + 1}`;
    } else {
      var CurrentMonth = GetData.$M + 1;
    }

    setNewDate(`${GetData.$y}-${CurrentMonth}-${GetData.$D}`);
    const selectedDate = `${GetData.$y}-${CurrentMonth}-${GetData.$D}`;
    console.log(selectedDate);
    console.log(initialOrders[0].orderDate);
    const foundOrder = initialOrders.find(
      (order) => order.orderDate === selectedDate
    );
    if (foundOrder) {
      setWanteddata(foundOrder);
    } else {
      setWanteddata(null);
    }
  };
  return (
    <div className="wholeCalender">
     
   
      <div style={{ marginLeft:'5vh'}} className="calenderContainer">
      <CommonPara className='CalenderTitle' label='Order Calender View'/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar onChange={HandleChange} />
        </LocalizationProvider>
      </div>
    {
        Display && 
        <div className="flexContainer" >
    {wantedData ? (
        <div className="CalenderCard">
          <CommonPara label="Order Id : " label2={wantedData.orderId} />
          <CommonPara
            label="Customer Name : "
            label2={wantedData.customerName}
          />
          <CommonPara label="Order Date : " label2={wantedData.orderDate} />
          <CommonPara
            classnamelabel2="satus"
            label="Status : "
            label2={wantedData.status}
          />
        </div>
      ) : 
        handlealert()
      }
    </div>
    }
    </div>
  );
}
