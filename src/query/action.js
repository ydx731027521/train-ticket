import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_DEPARTDATE,
  ACTION_SET_HIGHSPEED,
  ACTION_SET_TRANLIST,
  ACTION_SET_ORDERTYPE,
  ACTION_SET_ONLYTICKETS,
  ACTION_SET_TICKETTYPES,
  ACTION_SET_SELECTEDTICKETTYPES,
  ACTION_SET_TRAINTYPES,
  ACTION_SET_SELECTTRAINTYPES,
  ACTION_SET_DEPARTSTATIONS,
  ACTION_SET_SELECTDEPARTSTATION,
  ACTION_SET_ARRIVESTATIONS,
  ACTION_SET_SELECTARRIVESTATIONS,
  ACTION_SET_DEPARTTIMESTART,
  ACTION_SET_DEPARTTIMEEND,
  ACTION_SET_ARRIVETIMESTART,
  ACTION_SET_ARRIVETIMEEND,
  ACTION_SET_ISFILTERSVISIBLE,
  ACTION_SET_SEARCHPARSED
} from "./actionTypes";
import { ORDERTYPE_SHORT, ORDERTYPE_LONG } from "./constant";

// 设置出发地点
export function setFrom(payload) {
  return {
    type: ACTION_SET_FROM,
    payload
  };
}

// 设置目的地
export function setTo(payload) {
  return {
    type: ACTION_SET_TO,
    payload
  };
}

// 设置出发日期
export function setDepartDate(payload) {
  return {
    type: ACTION_SET_DEPARTDATE,
    payload
  };
}

// 设置是否是高铁
export function setHighSpeed(payload) {
  return {
    type: ACTION_SET_HIGHSPEED,
    payload
  };
}

// 切换是否是高铁
export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch(setHighSpeed(!highSpeed));
  };
}

// 设置车次列表
export function setTranList(payload) {
  return {
    type: ACTION_SET_TRANLIST,
    payload
  };
}

// 切换耗时类型
export function toggleOrderType() {
  return (dispatch, getState) => {
    const { orderType } = getState();
    dispatch({
      type: ACTION_SET_ORDERTYPE,
      payload: orderType === ORDERTYPE_SHORT ? ORDERTYPE_LONG : ORDERTYPE_SHORT
    });
  };
}

// 切换是否只看有票
export function setOnlyTickets(payload) {
  return (dispatch, getState) => {
    const { onlyTickets } = getState();
    dispatch({
      type: ACTION_SET_ONLYTICKETS,
      payload: !onlyTickets
    });
  };
}

// 设置坐席类型
export function setTicketTypes(payload) {
  return {
    type: ACTION_SET_TICKETTYPES,
    payload
  };
}

// 设置选中的坐席类型
export function setSelectedTicketTypes(payload) {
  return {
    type: ACTION_SET_SELECTEDTICKETTYPES,
    payload
  };
}

// 设置车次类型
export function setTrainTypes(payload) {
  return {
    type: ACTION_SET_TRAINTYPES,
    payload
  };
}

// 设置选中的车次类型
export function seSelectTrainTypes(payload) {
  return {
    type: ACTION_SET_SELECTTRAINTYPES,
    payload
  };
}

// 设置出发车站
export function setDepartStations(payload) {
  return {
    type: ACTION_SET_DEPARTSTATIONS,
    payload
  };
}

// 设置选择的出发车站
export function setSelectDepartStation(payload) {
  return {
    type: ACTION_SET_SELECTDEPARTSTATION,
    payload
  };
}

// 设置到达车站
export function setArriveStations(payload) {
  return {
    type: ACTION_SET_ARRIVESTATIONS,
    payload
  };
}

// 设置选择的到达车站
export function setSelectArriveStations(payload) {
  return {
    type: ACTION_SET_SELECTARRIVESTATIONS,
    payload
  };
}

// 设置出发开始时间
export function setDepartTimeStart(payload) {
  return {
    type: ACTION_SET_DEPARTTIMESTART,
    payload
  };
}

// 设置出发结束时间
export function setDepartTimeEnd(payload) {
  return {
    type: ACTION_SET_DEPARTTIMEEND,
    payload
  };
}

// 设置到达开始时间
export function setArriveTimeStart(payload) {
  return {
    type: ACTION_SET_ARRIVETIMESTART,
    payload
  };
}

// 设置到达结束时间
export function setArriveTimeEnd(payload) {
  return {
    type: ACTION_SET_ARRIVETIMEEND,
    payload
  };
}

// 设置是否显示综合筛选
export function toggleIsfiltersvisible() {
  return (dispatch, getState) => {
    const { isfiltersvisible } = getState();
    dispatch({
      type: ACTION_SET_ISFILTERSVISIBLE,
      payload: !isfiltersvisible
    });
  };
}

// 设置是否完成地址栏参数的解析
export function setSearchParsed(payload) {
  return {
    type: ACTION_SET_SEARCHPARSED,
    payload
  };
}
