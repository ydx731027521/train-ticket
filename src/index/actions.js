import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_HIGN_SPEED
} from "./actionTypes";

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

// 设置是否在加载城市数据的状态
export function setIsLoadingCityData(payload) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload
  };
}

// 设置城市数据
export function setCityData(payload) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload
  };
}

// 设置高铁的选中状态
export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch({
      type: ACTION_SET_HIGN_SPEED,
      payload: !highSpeed
    });
  };
}

// 显示城市浮层
export function showCitySelector(currentSelectingLeftCity) {
  return dispatch => {
    dispatch({
      type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    });

    dispatch({
      type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
      payload: currentSelectingLeftCity
    });
  };
}

// 隐藏城市浮层
export function hideCitySelector() {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  };
}

// 设置选择的城市
export function setSelectedCity(city) {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState();
    currentSelectingLeftCity ? dispatch(setFrom(city)) : dispatch(setTo(city));
  };
}

// 设置日期浮层的展示
export function showDateSelector(payload) {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload
  };
}

// 设置始发地点和目的地调换位置
export function exchangeFromTo() {
  return (dispatch, getState) => {
    const { from, to } = getState();
    dispatch(setFrom(to));
    dispatch(setTo(from));
  };
}

// // 设置城市浮层的状态
// export function setIsCitySelectorVisible(payload) {
//   return {
//     type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
//     payload
//   };
// }

// export function setCurrentselectingLeftCity(payload) {
//   return {
//     type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
//     payload
//   };
// }

// // 设置日期浮层的状态
// export function setIsDateSelectorVisible(payload) {
//   return {
//     type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
//     payload
//   };
// }
