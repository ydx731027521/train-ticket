import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import { ORDER_DEPART } from "./constant";

export default createStore(
  combineReducers(reducers),
  {
    from: null, // 出发地点
    to: null, // 目的地
    departDate: Date.now(), // 出发时间
    highSpeed: false, // 只看高铁
    trainList: [], // 车次列表
    orderType: ORDER_DEPART, // 耗时类型（1.短，2.长）
    onlyTickets: false, // 只看有票
    ticketTypes: [], // 坐席类型
    checkedTicketTypes: {}, // 选中的坐席类型
    trainTypes: [], // 车次类型
    checkedTrainTypes: {}, // 选中的车次类型
    departStations: [], // 出发车站
    checkedDepartStations: {}, // 选择的出发车站
    arriveStations: [], // 到达车站
    checkedArriveStations: {}, // 选择的到达车站
    departTimeStart: 0, // 出发开始时间
    departTimeEnd: 24, // 出发结束时间
    arriveTimeStart: 0, // 到达开始时间,
    arriveTimeEnd: 24, // 到达结束时间,
    isFiltersVisible: false, //  是否显示综合筛选
    searchParsed: false // 是否完成地址栏参数的解析
  },
  applyMiddleware(thunk)
);
