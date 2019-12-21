import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_HIGH_SPEED,
  ACTION_SET_TRAIN_LIST,
  ACTION_SET_ORDER_TYPE,
  ACTION_SET_ONLY_TICKETS,
  ACTION_SET_TICKET_TYPES,
  ACTION_SET_CHECKED_TICKET_TYPES,
  ACTION_SET_TRAIN_TYPES,
  ACTION_SET_CHECKED_TRAIN_TYPES,
  ACTION_SET_DEPART_STATIONS,
  ACTION_SET_CHECKED_DEPART_STATIONS,
  ACTION_SET_ARRIVE_STATIONS,
  ACTION_SET_CHECKED_ARRIVE_STATIONS,
  ACTION_SET_DEPART_TIME_START,
  ACTION_SET_DEPART_TIME_END,
  ACTION_SET_ARRIVE_TIME_START,
  ACTION_SET_ARRIVE_TIME_END,
  ACTION_SET_IS_FILTERS_VISIBLE,
  ACTION_SET_SEARCH_PARSED
} from "./actionTypes";
import { ORDER_DEPART, ORDER_DURATION } from "./constant";
import { transDayTime } from "../utils/util";

// 设置出发地点
export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  };
}

// 设置目的地
export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  };
}

// 设置出发日期
export function setDepartDate(departDate) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: departDate
  };
}

// 设置是否是高铁
export function setHighSpeed(highSpeed) {
  return {
    type: ACTION_SET_HIGH_SPEED,
    payload: highSpeed
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
export function setTrainList(trainList) {
  return {
    type: ACTION_SET_TRAIN_LIST,
    payload: trainList
  };
}

// 切换耗时类型
export function toggleOrderType() {
  return (dispatch, getState) => {
    const { orderType } = getState();
    if (orderType === ORDER_DEPART) {
      dispatch({
        type: ACTION_SET_ORDER_TYPE,
        payload: ORDER_DURATION
      });
    } else {
      dispatch({
        type: ACTION_SET_ORDER_TYPE,
        payload: ORDER_DEPART
      });
    }
  };
}

// 切换是否只看有票
export function toggleOnlyTickets() {
  return (dispatch, getState) => {
    const { onlyTickets } = getState();

    dispatch({
      type: ACTION_SET_ONLY_TICKETS,
      payload: !onlyTickets
    });
  };
}

// 设置坐席类型
export function setTicketTypes(ticketTypes) {
  return {
    type: ACTION_SET_TICKET_TYPES,
    payload: ticketTypes
  };
}

// 设置选中的坐席类型
export function setCheckedTicketTypes(checkedTicketTypes) {
  return {
    type: ACTION_SET_CHECKED_TICKET_TYPES,
    payload: checkedTicketTypes
  };
}

// 设置车次类型
export function setTrainTypes(trainTypes) {
  return {
    type: ACTION_SET_TRAIN_TYPES,
    payload: trainTypes
  };
}

// 设置选中的车次类型
export function setCheckedTrainTypes(checkedTrainTypes) {
  return {
    type: ACTION_SET_CHECKED_TRAIN_TYPES,
    payload: checkedTrainTypes
  };
}

// 设置出发车站
export function setDepartStations(departStations) {
  return {
    type: ACTION_SET_DEPART_STATIONS,
    payload: departStations
  };
}

// 设置选择的出发车站
export function setCheckedDepartStations(checkedDepartStations) {
  return {
    type: ACTION_SET_CHECKED_DEPART_STATIONS,
    payload: checkedDepartStations
  };
}

// 设置到达车站
export function setArriveStations(arriveStations) {
  return {
    type: ACTION_SET_ARRIVE_STATIONS,
    payload: arriveStations
  };
}

// 设置选择的到达车站
export function setCheckedArriveStations(checkedArriveStations) {
  return {
    type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
    payload: checkedArriveStations
  };
}

// 设置出发开始时间
export function setDepartTimeStart(departTimeStart) {
  return {
    type: ACTION_SET_DEPART_TIME_START,
    payload: departTimeStart
  };
}

// 设置出发结束时间
export function setDepartTimeEnd(departTimeEnd) {
  return {
    type: ACTION_SET_DEPART_TIME_END,
    payload: departTimeEnd
  };
}

// 设置到达开始时间
export function setArriveTimeStart(arriveTimeStart) {
  return {
    type: ACTION_SET_ARRIVE_TIME_START,
    payload: arriveTimeStart
  };
}

// 设置到达结束时间
export function setArriveTimeEnd(arriveTimeEnd) {
  return {
    type: ACTION_SET_ARRIVE_TIME_END,
    payload: arriveTimeEnd
  };
}

// 设置是否显示综合筛选
export function toggleIsFiltersVisible() {
  return (dispatch, getState) => {
    const { isFiltersVisible } = getState();

    dispatch({
      type: ACTION_SET_IS_FILTERS_VISIBLE,
      payload: !isFiltersVisible
    });
  };
}

// 设置是否完成地址栏参数的解析
export function setSearchParsed(searchParsed) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: searchParsed
  };
}

// 前一天
export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();

    dispatch(setDepartDate(transDayTime(departDate) - 86400 * 1000));
  };
}

// 后一天
export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();

    dispatch(setDepartDate(transDayTime(departDate) + 86400 * 1000));
  };
}
