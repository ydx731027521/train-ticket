import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

import Option from "./Option";
import Slider from "./Slider";

const BottomModal = memo(props => {
  const {
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd
  } = props;

  const [localCheckedTicketTypes, setLocalCheckedTicketTypes] = useState(() => {
    return { ...checkedTicketTypes };
  });

  const [localCheckedTrainTypes, setLocalCheckedTrainTypes] = useState(() => {
    return { ...checkedTrainTypes };
  });

  const [localCheckedDepartStations, setLocalCheckedDepartStations] = useState(
    () => {
      return { ...checkedDepartStations };
    }
  );

  const [localCheckedArriveStations, setLocalCheckedArriveStations] = useState(
    () => {
      return { ...checkedArriveStations };
    }
  );

  const [localDepartTimeStart, setLocalDepartTimeStart] = useState(
    departTimeStart
  );

  const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd);

  const [localArriveTimeStart, setLocalArriveTimeStart] = useState(
    arriveTimeStart
  );

  const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd);

  const optionGroup = [
    {
      title: "坐席类型",
      options: ticketTypes,
      checkedMap: localCheckedTicketTypes,
      update: setLocalCheckedTicketTypes
      // dispatch: localCheckedTicketTypesDispatch
    },
    {
      title: "车次类型",
      options: trainTypes,
      checkedMap: localCheckedTrainTypes,
      update: setLocalCheckedTrainTypes
      // dispatch: localCheckedTrainTypesDispatch
    },
    {
      title: "出发车站",
      options: departStations,
      checkedMap: localCheckedDepartStations,
      update: setLocalCheckedDepartStations
      // dispatch: localCheckedDepartStationsDispatch
    },
    {
      title: "到达车站",
      options: arriveStations,
      checkedMap: localCheckedArriveStations,
      update: setLocalCheckedArriveStations
      // dispatch: localCheckedArriveStationsDispatch
    }
  ];

  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span className="reset">重置</span>
            <span className="ok">确定</span>
          </div>
          <div className="options">
            {optionGroup.map(group => (
              <Option key={group.title} {...group} />
            ))}
            <Slider
              title="出发时间"
              currentStartHours={localDepartTimeStart}
              currentEndHours={localDepartTimeEnd}
              onStartChanged={setLocalDepartTimeStart}
              onEndChanged={setLocalDepartTimeEnd}
            />
            <Slider
              title="到达时间"
              currentStartHours={localArriveTimeStart}
              currentEndHours={localArriveTimeEnd}
              onStartChanged={setLocalArriveTimeStart}
              onEndChanged={setLocalArriveTimeEnd}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default BottomModal;

BottomModal.propTypes = {
  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,
  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedArriveStations: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired,
  toggleIsFiltersVisible: PropTypes.func.isRequired
};
